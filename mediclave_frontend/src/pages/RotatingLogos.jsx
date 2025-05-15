import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackImages } from "../assets";
import { Sparkle } from "lucide-react";

const VISIBLE_ICONS = 5;
const CONTAINER_HEIGHT = 500;
const ICON_HEIGHT = CONTAINER_HEIGHT / VISIBLE_ICONS;
const PAUSE_DURATION = 4000;
const SCROLL_DELAY = 500;

const tracks = [
  {
    image: trackImages.Gynecology,
    title: "Gynecology",
    subtitle: "Advancements in Women's Reproductive Health",
    description:
      "This track will focus on the latest breakthroughs in gynecological care, addressing critical issues such as reproductive health, infertility treatments, menstrual disorders, and gynecologic cancers. With a growing emphasis on minimally invasive surgeries and robotic techniques, this session will explore how innovations in diagnostics and treatments are transforming patient outcomes. Experts will also discuss challenges in reproductive health policy and the intersection of gynecology and aging. The session will also examine the implications of reproductive health policies globally and how they influence healthcare delivery. Discussions will include patient-centered care approaches, the integration of new technologies in surgical and diagnostic procedures.",
  },
  {
    image: trackImages.Pediatrics,
    title: "Pediatrics",
    subtitle: "Innovative Solutions in Child Health",
    description:
      "Pediatrics covers the full spectrum of child health, from prenatal care through adolescence. This track will highlight cutting-edge research on child development, pediatric diseases, and pediatric surgery. Topics will include advancements in pediatric oncology, neonatal care, immunization strategies, and chronic disease management in children. Additionally, the session will explore the impact of digital tools in early diagnosis, the role of genetic screening in pediatric care, and the importance of mental health support for children. Discussions will emphasize a holistic approach to pediatric healthcare, integrating family-centered practices and innovations to enhance the long-term well-being of younger populations.",
  },
  {
    image: trackImages.EmergencyMedicine,
    title: "Emergency Medicine",
    subtitle: "Delivering Critical Care in Acute Situations",
    description:
      "Emergency medicine remains at the forefront of healthcare innovation, with a focus on triage, trauma management, and acute care interventions. This track will discuss advancements in emergency procedures, the role of technology in diagnostics, and new treatment protocols for life-threatening injuries and conditions. Topics will include AI-assisted triage, real-time monitoring systems, and innovations in resuscitation and trauma surgery. Attendees will also explore the challenges of disaster response, mass casualty preparedness, and emergency telemedicine. Special attention will be given to streamlining workflows in high-pressure environments to improve outcomes and reduce burnout among emergency care providers.",
  },
  {
    image: trackImages.GeneticDisorders,
    title: "Genetic Disorders",
    subtitle: "Revolutionizing the Future of Genetic Medicine",
    description:
      "This session will focus on the latest developments in genetic testing, gene therapies, and CRISPR technology. Key discussions will include breakthroughs in diagnosing rare genetic disorders, the role of genomics in precision medicine, and ethical considerations in genetic modification and testing. Experts will delve into advancements in next-generation sequencing, carrier screening, and preimplantation genetic diagnosis. The track will also explore gene editing's potential in treating inherited diseases, the challenges of regulatory approval, and accessibility of cutting-edge treatments. Attendees will gain insights into how personalized genomic data is reshaping disease prevention, prognosis, and therapeutic decision-making across medical specialties.",
  },
  {
    image: trackImages.MentalHealth,
    title: "Mental Health",
    subtitle: "Innovative Approaches to Behavioral Healthcare",
    description:
      "This track will explore topics such as emerging therapeutic models, psychiatric disorders, and mental health stigma. Attendees will hear about novel treatments for depression, anxiety, and schizophrenia, as well as advances in digital mental health solutions. The session will also examine the integration of mental health services into primary care, the growing role of telepsychiatry, and the impact of social media on youth mental wellness. Experts will discuss community-based interventions, trauma-informed care, and the importance of early intervention. A special focus will be placed on culturally sensitive approaches and strategies to reduce barriers to mental health care access.",
  },
  {
    image: trackImages.TelemedicineDigitalHealth,
    title: "Telemedicine & Digital Health",
    subtitle: "The Future of Healthcare Delivery",
    description:
      "This session will explore the intersection of technology and patient care, with discussions on telehealth platforms, wearable health technology, AI-driven diagnostics, and mobile health apps. Attendees will gain insights into the regulatory landscape, reimbursement strategies, and the future of telemedicine in an increasingly digital world. The track will also highlight the expansion of remote patient monitoring, virtual consultations, and the integration of electronic health records. Discussions will address equity in access to digital tools, data privacy, and user experience design. Experts will examine how digital innovation is shaping personalized care, chronic disease management, and overall healthcare accessibility.",
  },
  {
    image: trackImages.PublicHealth,
    title: "Public Health",
    subtitle: "Global Health Strategies for the 21st Century",
    description:
      "Public health is the foundation of disease prevention and health promotion. This track will cover emerging trends in global health, addressing the social determinants of health, healthcare systems strengthening, and the fight against global pandemics. Discussions will focus on strategies to reduce health disparities, improve health literacy, and build resilient health infrastructure. Experts will explore cross-sector collaborations, the role of policy in health outcomes, and community-based interventions. Topics such as climate change and its effects on health, mental well-being in populations, and preparedness for future health crises will also be examined to ensure a comprehensive approach to public health.",
  },
  {
    image: trackImages.InfectiousDiseases,
    title: "Infectious Diseases",
    subtitle: "Tackling Emerging Pathogens and Global Pandemics",
    description:
      "This session will provide updates on the latest research in infectious disease prevention, diagnostics, and treatment. Experts will address the development of novel vaccines, antiviral drugs, and surveillance strategies, as well as the global response to pandemics such as COVID-19, Ebola, and others. The track will also explore antimicrobial resistance, emerging zoonotic threats, and the role of genomics in tracking disease outbreaks. Public health officials and clinicians will discuss outbreak preparedness, rapid response frameworks, and equity in access to infectious disease care. Emphasis will be placed on global collaboration and the integration of digital tools in epidemic intelligence systems.",
  },
  {
    image: trackImages.NutritionAndMetabolism,
    title: "Nutrition and Metabolism",
    subtitle: "Exploring the Link Between Diet, Health, and Disease",
    description:
      "This track will explore cutting-edge research on the role of nutrition in metabolism, as well as emerging treatments for metabolic disorders. Topics will include personalized nutrition, gut microbiota, and the impact of diet on chronic conditions. Experts will delve into how nutrition affects metabolic pathways, the prevention of obesity and diabetes, and the influence of genetics on dietary needs. Sessions will also highlight food as medicine, nutrient timing, and innovations in nutritional supplements. This track emphasizes a multidisciplinary approach, bringing together dietitians, endocrinologists, and researchers to discuss how dietary interventions can promote long-term metabolic health.",
  },
  {
    image: trackImages.Rheumatology,
    title: "Rheumatology",
    subtitle:
      "Advances in the Treatment of Autoimmune and Inflammatory Diseases",
    description:
      "This session will highlight new treatment options, including biologics and gene therapy, as well as innovations in diagnostic tools. Experts will discuss the challenges of managing chronic pain and improving quality of life for patients with complex rheumatological conditions. Key topics will include autoimmune diseases such as lupus, rheumatoid arthritis, and psoriatic arthritis. Attendees will explore personalized medicine approaches, early detection strategies, and the role of lifestyle and rehabilitation in disease management. The track will also address patient-centered care, advances in imaging, and the integration of digital tools to monitor and support patients with long-term inflammatory conditions.",
  },
  {
    image: trackImages.Gynecology,
    title: "Women's Health & Midwifery",
    subtitle: "Comprehensive Approaches to Women's Well-being",
    description:
      "This track will discuss the latest advances in maternal health, including obstetric care, midwifery, and postnatal care. Attendees will also explore topics such as sexual health, osteoporosis, and hormonal treatments. Special focus will be given to empowering midwives through evidence-based practices and integrating traditional and modern care methods. The session will examine disparities in maternal outcomes, innovations in prenatal diagnostics, and strategies for reducing maternal and neonatal mortality. Discussions will also include holistic approaches to women's wellness, addressing mental health during and after pregnancy, and community-based care models that promote safe and respectful childbirth experiences globally.",
  },
  {
    image: trackImages.Cancer,
    title: "Cancer",
    subtitle: "Innovative Therapies and Early Detection in Oncology",
    description:
      "This session will explore the latest advancements in cancer treatment, including immunotherapy, precision medicine, and targeted therapies. Experts will also discuss breakthroughs in early detection technologies and personalized cancer treatments. Sessions will cover the integration of genomics in therapy selection, new imaging techniques, and advances in minimally invasive surgeries. The impact of AI in diagnostics and treatment planning will be explored, along with survivorship care and palliative approaches. Attendees will also gain insight into ongoing clinical trials, disparities in cancer care across populations, and policy challenges in scaling access to cutting-edge oncology interventions worldwide.",
  },
  {
    image: trackImages.Gynecology,
    title: "Addiction Medicine",
    subtitle: "Addressing Substance Use Disorders and Recovery",
    description:
      "This track will discuss the science behind addiction, advances in pharmacotherapy, behavioral therapies, and integrative care strategies for supporting recovery. Special focus will be on addressing the opioid crisis, alcohol dependency, and behavioral addictions. Experts will explore innovative harm reduction strategies, digital interventions like mobile therapy apps, and community-based support systems. Attendees will learn about the neurobiology of addiction and the role of trauma-informed care. The session will also delve into legislative reforms, stigma reduction, and equitable access to care. Emphasis will be placed on multidisciplinary approaches and culturally competent recovery models for long-term treatment success.",
  },
  {
    image: trackImages.Pediatrics,
    title: "Remote Healthcare",
    subtitle: "Improving Access to Care in Rural and Underserved Communities",
    description:
      "This session will discuss technological advancements, such as teleconsultations, remote diagnostics, and mobile health units, that are improving healthcare delivery in underserved communities. Focus will be placed on connectivity challenges, data security, and developing scalable telehealth infrastructures. Experts will highlight case studies demonstrating improved health outcomes through digital platforms. Participants will explore remote monitoring technologies, the role of AI in virtual care, and training for remote healthcare providers. The track will also evaluate regulatory frameworks, reimbursement issues, and digital literacy as key enablers of success. Innovations addressing geographic and socioeconomic barriers will be central to the discussion.",
  },
  {
    image: trackImages.Cancer,
    title: "Pain Management",
    subtitle: "Innovative Treatments for Acute and Chronic Pain",
    description:
      "This session will delve into the latest advancements in pain management, including pharmacological treatments, interventional techniques, and holistic therapies. Focus will also be placed on post-operative and cancer-related pain.",
  },
  {
    image: trackImages.Gynecology,
    title: "Vaccines",
    subtitle: "The Role of Immunization in Public Health",
    description:
      "This track will explore new vaccine technologies, including mRNA and universal vaccines. Experts will discuss strategies for increasing vaccine accessibility, addressing vaccine hesitancy, and preparing for future pandemics.",
  },
  {
    image: trackImages.EmergencyMedicine,
    title: "AI in Healthcare",
    subtitle: "Transforming Healthcare with Artificial Intelligence",
    description:
      "From machine learning in radiology to AI-driven drug discovery, AI is streamlining diagnostics, treatment, and care. This session will explore predictive analytics, virtual health assistants, and robotic surgery powered by AI.",
  },
  {
    image: trackImages.GeneticDisorders,
    title: "Cardiovascular Diseases",
    subtitle: "Addressing the Global Burden of Heart Disease",
    description:
      "This track focuses on the latest advancements in the prevention, diagnosis, and treatment of cardiovascular diseases, including the role of AI in predicting risk and improving cardiovascular outcomes.",
  },
];

const ScrollingTracks = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [pausedTrack, setPausedTrack] = useState(tracks[0]);

  
  const scrollRef = useRef(null);

  const loopedTracks = [...tracks, ...tracks];
  const originalLength = tracks.length;
  const middleOffset = originalLength;

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = middleOffset * ICON_HEIGHT;
    }
  }, []);

    useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = ICON_HEIGHT * originalLength * 2;
      if (container.scrollTop <= ICON_HEIGHT) {
        container.scrollTop += originalLength * ICON_HEIGHT;
      } else if (container.scrollTop >= maxScroll) {
        container.scrollTop -= originalLength * ICON_HEIGHT;
      }

      const newIndex =
        Math.round(container.scrollTop / ICON_HEIGHT) % originalLength;
      setIndex(newIndex);
      setPausedTrack(tracks[newIndex]);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [tracks]);

  useEffect(() => {
    if (isHovered) return; // skip if hovering

    const scrollTimeout = setTimeout(() => {
      const nextIndex = (index + 1) % tracks.length;
      setIndex(nextIndex);
      setPausedTrack(tracks[nextIndex]);
    }, SCROLL_DELAY + PAUSE_DURATION);

    return () => clearTimeout(scrollTimeout);
  }, [index, isHovered]);

  useEffect(() => {
    if (isHovered) return; // <-- Add this line

    const scrollTimeout = setTimeout(() => {
      const nextIndex = (index + 1) % tracks.length;
      setIndex(nextIndex);
      setPausedTrack(tracks[nextIndex]);
    }, SCROLL_DELAY + PAUSE_DURATION);

    return () => clearTimeout(scrollTimeout);
  }, [index, isHovered]); // <-- Also include isHovered in deps

  const scrollToIndex = (targetIndex) => {
    setIndex(targetIndex);
    setPausedTrack(tracks[targetIndex]);

    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        top: (middleOffset + targetIndex - 2) * ICON_HEIGHT,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <div className="container flex w-full max-w-6xl h-[500px] overflow-hidden mx-auto relative px-4 scrollbar-hide">
      {/* Left: Smooth Scrolling Icons */}
      <div className="w-1/3 h-full overflow-y-auto relative scrollbar-hide">
        <motion.div
          className="flex flex-col will-change-transform"
          animate={{ y: -(index - 2) * ICON_HEIGHT }}
          transition={{
            ease: [0.33, 1, 0.68, 1], // clean ease
            duration: 0.6, // fast and sharp
          }}
        >
          {loopedTracks.map((track, i) => {
            const isActive = i % tracks.length === index;
            return (
              <motion.div
                key={`${track.title}-${i}`}
                className="flex items-center justify-center gap-8 will-change-transform cursor-pointer scrollbar-hide"
                style={{ height: ICON_HEIGHT }}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  zIndex: isActive ? 10 : 1,
                  scale: isActive ? 1.06 : 0.74,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  mass: 0.2,
                }}
                onClick={() => {
                  const clickedIndex = i % tracks.length;
                  setIndex(clickedIndex);
                  setPausedTrack(tracks[clickedIndex]);
                }}
              >
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-44 h-24 object-cover rounded-xl shadow-md border border-slate-400 transition-transform duration-500 will-change-transform backface-hidden"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Right: Info Panel */}
      <div className="w-92 h-full pl-6 flex items-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pausedTrack.title}
            initial={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, scale: 0.97, filter: "blur(8px)" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white border shadow-xl rounded-2xl p-6 max-w-4xl cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h2 className="text-3xl font-bold mb-1 text-green-400 flex items-center gap-2">
              <Sparkle className="fill-green-400" />
              {pausedTrack.title}
            </h2>
            <h3 className="text-xl text-gray-600 font-semibold mb-3">
              {pausedTrack.subtitle}
            </h3>
            <p className="text-md text-gray-800 leading-relaxed">
              {pausedTrack.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollingTracks;
