import logo from "./logo.png";
import bg from "./bg.jpg";
import panelmember1 from "./panelmember1.avif";
import panelmember3 from "./panelmember2.jpg";
import panelmember4 from "./panelmember4.avif";
import mediclave_logo from "./Mediclave_logo.png";
import weblogo from "./weblogo.png";
import whatsapp from './logo-whatsapp.svg'

import {
  HeartPulse,
  Ribbon,
  Venus,
  Droplets,
  Accessibility,
  Dna,
  Baby,
  Brain,
  ShieldOff,
  Hospital,
  Radiation,
  Syringe,
  AlertCircle,
  ScanLine,
  UserCheck,
  Biohazard,
  TestTube,
  Phone,
  Monitor,
  Bone,
  Stethoscope,
  PersonStanding,
} from "lucide-react";

import one from "./partners/one.webp";
import two from "./partners/two.webp";
import three from "./partners/three.webp";
import four from "./partners/four.webp";
import five from "./partners/five.webp";
import six from "./partners/six.webp";
import seven from "./partners/seven.webp";
import eight from "./partners/one.webp";
import nine from "./partners/nine.webp";
import ten from "./partners/ten.webp";

import Alireza from "./panel_members/Alireza.webp";
import Chrysoula from "./orators/Chrysoula-I.jpg";
import Dana from "./panel_members/Dana-York.webp";
import Hassan from "./panel_members/Hassan-El-Tamimi.webp";
import Laura from "./panel_members/LauraSarbu.webp";
import Mihail from "./panel_members/Mihail.webp";
import Mohamed from "./panel_members/Mohamed_Hosni.webp";
import Sobia from "./panel_members/Sobia.webp";
import Wilie from "./panel_members/Willie_Sai_Ho_Chan.webp";

import Abu from "./orators/Mohammed.jpg";
import dr_3 from "./orators/dr.3.jpg";
import joaquin from "./orators/Joaquin.jpg";

import med from "./med.jpg";
import med_logo from "./med_logo.png";

import Cancer from "./tracks/Cancer.jpg";
import EmergencyMedicine from "./tracks/EmergencyMedicine.jpg";
import GeneticDisorders from "./tracks/GeneticDisorders.jpg";
import Gynecology from "./tracks/Gynecology.jpg";
import InfectiousDiseases from "./tracks/InfectiousDiseases.jpg";
import MentalHealth from "./tracks/MentalHealth.jpg";
import NutritionAndMetabolism from "./tracks/NutritionAndMetabolism.jpg";
import Pediatrics from "./tracks/Pediatrics.jpg";
import PublicHealth from "./tracks/PublicHealth.jpg";
import Rheumatology from "./tracks/Rheumatology.jpg";
import TelemedicineDigitalHealth from "./tracks/TelemedicineDigitalHealth.jpg";
import WomenHealthMidwifery from "./tracks/WomenHealthMidwifery.jpg"; // corrected name
import about_img from './about_img.jpg'

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  // Pinterest,
  MessageCircle,
  Rss,
  Download,
  BookOpen,
  Send,
} from "lucide-react";
import { base, link } from "framer-motion/client";

import group_1 from './group.png'

import chrysoula_banner from './orator_banners/chrysoula_banner.jpg'
import joaquin_banner from './orator_banners/joaquin_banner.jpg'
import mohammed_banner from './orator_banners/mohammed_banner.jpg'
import qin_banner from './orator_banners/qin_banner.jpg'

import alireza_banner from './panelm_banners/alireza_banner.jpg'
import dana_banner from './panelm_banners/dana_banner.jpg'
import hassan_banner from './panelm_banners/hassan_banner.jpg'
import laure_banner from './panelm_banners/laure_banner.jpg'
import mihail_banner from './panelm_banners/mihail_banner.jpg'
import mohamed_banner from './panelm_banners/mohamed_banner.jpg'
import sobia_banner from './panelm_banners/sobia_banner.jpg'
import willie_banner from './panelm_banners/willie_banner.jpg'

import silver from './badges/2.png'
import gold from './badges/3.png'
import platinum from './badges/4.png'
import side from './side.gif'
import section_banner from './section_banner.jpg'

export const trackImages = {
  Cancer,
  EmergencyMedicine,
  GeneticDisorders,
  Gynecology,
  InfectiousDiseases,
  MentalHealth,
  NutritionAndMetabolism,
  Pediatrics,
  PublicHealth,
  Rheumatology,
  TelemedicineDigitalHealth,
  WomenHealthMidwifery,
};

export const sticky_links = [
  {
    name: "Brochure",
    icon: Download,
  },
  {
    name: "Upload Abstract",
    icon: Send,
  },
  {
    name: "42098304989",
    icon: Phone,
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/people/Helix-Conference-LLC/61570321457803/",
    icon: <Facebook size={18} />,
  },
  {
    id: 2,
    name: "Twitter (X)",
    url: "https://x.com/i/flow/login?redirect_after_login=%2FHelixconfe69272",
    icon: <Twitter size={18} />,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/helixscientificconferences/",
    icon: <Instagram size={18} />,
  },
  {
    id: 4,
    name: "YouTube",
    url: "https://www.youtube.com/@Helixconferences",
    icon: <Youtube size={18} />,
  },
  // {
  //   id: 5,
  //   name: "WhatsApp",
  //   url: "https://wa.me", // WhatsApp direct link
  //   icon: <MessageCircle size={18} />,
  // },
  {
    id: 6,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/helix-conferences-llc/",
    icon: <Linkedin size={18} />,
  },
  {
    id: 7,
    name: "Redit",
    url: "https://www.reddit.com/user/Sufficient-Cover-471/?rdt=65190",
    icon: <Rss size={18} />, // closest match
  },
  // {
  //   id: 8,
  //   name: "Pinterest",
  //   url: "https://pinterest.com",
  //   icon: <Pinterest size={24} />,
  // },
];

export {
  weblogo,
  logo,
  panelmember1,
  panelmember3,
  panelmember4,
  bg,
  mediclave_logo,
  med_logo,
  group_1,
  silver,
  gold,
  platinum,
  about_img,
  side,
  section_banner,
  whatsapp,
  HeartPulse
};

export const panel_members = [
  {
    name: "Hassan El-Tamimi",
    from: "UAE",
    image: Hassan,
    about: "Founder & Prof.",
    link: "/Hassan-El-Tamimi",
  },
  {
    name: "Mohamed Hosni",
    from: "UK",
    image: Mohamed,
    about: "CEO & Prof.",
    link: "/Mohamed-Hosni",
  },
  {
    name: "Chrysoula I. Liakou",
    from: "Greece",
    image: Chrysoula,
    about: "Founder & Prof.",
    link: "/Chrysoula-I-Liakou",
  },
  {
    name: "Dana York",
    from: "United States",
    image: Dana,
    about: "Founder & Prof.",
    link: "Dana-York",
  },
];

// data/tracks.js

export const tracks = [
  // 🔬 Technology & Innovation
  { name: "AI in Healthcare", icon: Brain }, // AI ↔ Brain/intelligence
  { name: "Telemedicine & Digital Health", icon: Monitor }, // Suggest Monitor if available, else Baby is okay

  // ❤️ Major Specialties
  { name: "Cardiology", icon: HeartPulse },
  { name: "Gynecology", icon: Stethoscope }, // Birth/pregnancy-related, syringe fits better than Venus
  { name: "Pediatrics", icon: Baby },
  { name: "Emergency Medicine", icon: AlertCircle }, // Alert = emergency
  { name: "Oncology", icon: ScanLine }, // Scanning for tumors/cancer
  { name: "Gastroenterology", icon: TestTube }, // Lab/intestinal testing

  // 🧬 Disease & Disorders
  { name: "Genetic Disorder", icon: Dna },
  { name: "Infectious Diseases", icon: Biohazard },
  { name: "Endocrinology", icon: Droplets }, // Hormones, blood/sugar → Droplets
  { name: "Rheumatology", icon: PersonStanding }, // Autoimmune/weakness symbolism

  // 🧠 Mental & Specialized Health
  { name: "Mental Health", icon: Ribbon }, // Emotional care
  { name: "Pain Management", icon: Accessibility }, // Experimentation/management
  { name: "Nutrition and Metabolism", icon: UserCheck }, // Health monitoring
  { name: "Addiction Medicine", icon: Hospital },
  { name: "Geriatrics", icon: UserCheck }, // Corrected spelling from "Gerilatrics"

  // 👩‍⚕️ Public & Women’s Health
  { name: "Women's Health & Midwifery", icon: Venus }, // Could use a more feminine symbol, Venus for observation
  { name: "Public Health", icon: Biohazard },

  // 💉 Immunology
  { name: "Vaccines", icon: Syringe },
];

export const schedule_plan1 = [
  {
    time: "8:00AM - 9:00AM",
    plan: "Breakfast",
  },
  {
    time: "9:00AM - 9:30AM",
    plan: "Registration",
  },
  {
    time: "9:30AM - 9:45AM",
    plan: "Introduction",
  },
  {
    time: "9:45AM - 10:15AM",
    plan: "KeyNote - 1",
    note: "Slot Available",
  },
  {
    time: "10:15AM - 10:45AM",
    plan: "KeyNote - 2",
  },
  {
    time: "10:45AM - 11:15AM",
    plan: "KeyNote - 3",
  },
  {
    time: "11:15AM - 11:30AM",
    plan: "Refreshment",
  },
  {
    time: "11:30AM - 11:50AM",
    plan: "Oral Presentation - 1",
    note: "Slot Available",
  },
  {
    time: "11:50AM - 12:10PM",
    plan: "Oral Presentation - 2",
  },
  {
    time: "12:10PM - 12:30PM",
    plan: "Oral Presentation - 3",
  },
  {
    time: "12:30PM - 12:50PM",
    plan: "Oral Presentation - 4",
  },
  {
    time: "12:50PM - 1:10PM",
    plan: "Oral Presentation - 5",
  },
  {
    time: "1:10PM - 1:30PM",
    plan: "Oral Presentation - 6",
  },
  {
    time: "1:30PM - 2:00PM",
    plan: "LUNCH",
  },
  {
    time: "2:00PM - 2:20PM",
    plan: "Oral Presentation - 7",
  },
  {
    time: "2:20PM - 2:40PM",
    plan: "Oral Presentation - 8",
  },
  {
    time: "2:40PM - 3:00PM",
    plan: "Oral Presentation - 9",
  },
  {
    time: "3:00PM - 3:20PM",
    plan: "Oral Presentation - 10",
    note: "Slot Available",
  },
  {
    time: "3:20PM - 3:40PM",
    plan: "Oral Presentation - 11",
  },
  {
    time: "3:40PM - 4:00PM",
    plan: "Oral Presentation - 12",
  },
  {
    time: "4:00PM - 4:20PM",
    plan: "Refreshment",
  },
  {
    time: "4:20PM - 4:40PM",
    plan: "Oral Presentation - 13",
  },
  {
    time: "4:40PM - 5:00PM",
    plan: "Oral Presentation - 14",
  },
  {
    time: "5:00PM - 5:20PM",
    plan: "Oral Presentation - 15",
  },
  {
    time: "5:20PM - 5:40PM",
    plan: "Oral Presentation - 16",
  },
  {
    time: "5:40PM - 6:00PM",
    plan: "Oral Presentation - 17",
  },
  {
    time: "6:00PM - 6:20PM",
    plan: "Oral Presentation - 18",
  },
];


export const schedule_plan2 = [
  {
    time: "8:00AM - 9:00AM",
    plan: "Liakou",
  },
  {
    time: "9:00AM - 9:30AM",
    plan: "Liakou",
  },
  {
    time: "9:30AM - 9:45AM",
    plan: "Liakou",
  },
  {
    time: "9:45AM - 10:15AM",
    plan: "Liakou",
  },
  {
    time: "10:15AM - 10:45AM",
    plan: "Liakou",
  },
];

export const schedule_plan3 = [
  {
    time: "8:00AM - 9:00AM",
    plan: "Mohamed Hosni",
  },
  {
    time: "9:00AM - 9:30AM",
    plan: "Mohamed Hosni",
  },
  {
    time: "9:30AM - 9:45AM",
    plan: "Mohamed Hosni",
  },
  {
    time: "9:45AM - 10:15AM",
    plan: "Mohamed Hosni",
  },
  {
    time: "10:15AM - 10:45AM",
    plan: "Mohamed Hosni",
  },
];

export const orators = [
  {
    image: Mohamed,
    name: "Prof. Mohamed Hosni",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/mohamed-honsi",
  },
  {
    image: Chrysoula,
    name: "Prof. Chrysoula I. Liakou",
    from: "Greece",
    about: "CEO & Prof.",
    link: "/chrysoula-i",
  },
  {
    image: joaquin,
    name: "Prof. Joaquin Cayon",
    from: "Spain",
    about: "CEO & Prof.",
    link: "/joaquin-cayon",
  },
  {
    image: Abu,
    name: "Prof. Mohammed Abu-Ragheef",
    from: "Sweden",
    about: "CEO & Prof.",
    link: "/mohammed-abu-ragheef",
  },
];

export const venueImages = [
  {
    id: 1,
    src: "https://www.valencia-cityguide.com/images/attractions4/cac-vlc.jpg", // City of Arts and Sciences at Sunset
    alt: "City of Arts and Sciences",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyqPwiciv7OKGRrG1V_BTpFhNGoC51fSJ8A&s", // Historic El Carmen District
    alt: "Valencia Cathedral",
  },
  {
    id: 3,
    src: "https://valencia.lbsfilm.at/content/images/size/w2000/2017/11/LBS_BlogOceano_048.jpg", // Oceanogràfic Aquarium
    alt: "Oceanogràfic",
  },
  {
    id: 4,
    src: "https://cdn.dreampropertiesvalencia.com/2024/12/district-el-carmen-in-valencia.jpg", // El Carmen District
    alt: "El Carmen District",
  },
];

export const PartnerImageList = [
  { id: 1, name: one },
  { id: 2, name: two },
  { id: 3, name: three },
  { id: 4, name: four },
  { id: 5, name: five },
  { id: 6, name: six },
  { id: 7, name: seven },
  { id: 8, name: eight },
  { id: 9, name: nine },
  // { id: 10, name: ten },
];

export const panel_members_data = [
  {
    image: Alireza,
    name: "Alireza Heidari",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/alireza-heidari",
  },
  {
    image: Hassan,
    name: "Hassan El-Tamimi",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/hassan-el-tamimi",
  },
  {
    image: Wilie,
    name: "Willie Sai Ho Chan",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/willie-sai-ho-chan",
  },
  {
    image: Mihail,
    name: "Mihail Lucian Birsa",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/mihail-lucian-birsa",
  },
  {
    image: Laura,
    name: "Laura Gabriela SARBU",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/laura-babriela-sarbu",
  },
  {
    image: Mohamed,
    name: "Mohamed Hosni",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/mohamed-hosni",
  },
  {
    image: Dana,
    name: "Dana York",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/dana-york",
  },
  {
    image: Sobia,
    name: "Sobia Hasan",
    from: "United Kingdom",
    about: "CEO & Prof.",
    link: "/sobia-hasan",
  },
];

export const orators_data = [
  {
    image: dr_3,
    name: "Mohamed Hosni",
    desc: "Mr Mohamed Hosni is a Consultant Obstetrician and Gynaecologist at Imperial College Hopsitals in London, United Kingdom, with over 20 years of experience. He is a very experienced laparoscopic surgeon, with international reputation in minimal access surgery and endometriosis. He has a broad clinical research background and has collaborated with numerous doctors and scientists on different projects in Obstetric and Gynaecologic research. He has presented both Nationally and Internationally, have several peer-reviewed publications in scientific journals. He completed MD, MSc, and he is currently a member of the Royal College of Obstetricians and Gynaecologists. He is a firm believer in a patient-centred approach, personalized on an individual basis. He is entirely dedicated to his profession. He places a significant importance on taking time to listen to each patients’ specific needs and providing them with a thorough explanation of their treatment options.",
    banner: mohamed_banner
    
  },
  {
    image: Chrysoula,
    name: "Chrysoula I. Liakou",
    desc: "Dr. Chrysoula Liakou is an American Board-Certified Internal Medicine Physician with a distinguished academic and professional background. She earned her MD from the University of Ioannina and her PhD from the University of Athens, Greece. Dr. Liakou completed her Internal Medicine internship and residency at the University of Kentucky and a post-doctoral fellowship in Immunology at the University of Texas. Dr. Liakou’s significant contributions to immunology include collaborating with Dr. James P. Allison, the 2018 Nobel Prize Winner in Medicine, during her fellowship. Two of her research papers were cited in his Nobel Prize acceptance speech. Throughout her career, Dr. Liakou has excelled in academia, private hospitals, and the pharmaceutical industry, where she has served as Medical Advisor and Chief Medical Officer. With over a decade of experience, she is renowned for her expertise in healthcare strategy, research development, business transformation, and innovation, always emphasizing a health-centered organizational culture.",
    banner: chrysoula_banner
  },
  {
    image: joaquin,
    name: "Joaquin Cayon",
    desc: "Joaquin Cayon is director of the Research Group on Health Law and Bioethics at IDIVAL, and associate professor of health law at the University of Cantabria, Spain. He is combining his academic activities with the legal advice as head of the Legal Advisory Service at the Health Ministry of the Government of Cantabria. Is also President of the Executive Board of the Ibero-American Health Law Network and was former Vice-President of the European Association of Health Law. Long teaching and research experience with a wide list of publications and oral presentations as a guest lecturer and speaker in different American and European universities. He is also taking part of the advisory board of different law journals. His research activities are focused on different health law topics such as the patient-consumer approach, patients’ rights, healthcare systems, AI in health, health data, medical liability, reproductive technologies, and end-of-life decisions. He has been Principal Investigator of various European research projects funded by the EU and the Council of Europe and has served as an Expert of the Council of Europe in the field of human rights and biomedicine.",
    banner: joaquin_banner
  },
  // {
  //   image: dr_3,
  //   name: 'Dr. Qin',
  //   desc: 'Dr. Qin served as Vice President of Biology at Gensci Biopharma in Changchun, China, from 2016 to 2019 and as CSO of Kexing Biopharma in Shenzhen, China, since 2020. Prior to this, Dr. Qin worked as a Research Fellow at NIH in Bethesda, Maryland, from 1998 to 2002, and as Principal Scientist at Allergan Inc. in Irvine, California, USA, from 2002 to 2015. In 1998, Dr. Qin graduated with a PhD in biochemistry from the School of Medicine at Kobe University and Fukui University in Japan. Having authored 15 INDs, 45 patents, and 55 peer-reviewed publications, Dr. Qin has a demonstrated history of scientific innovation.'
  // },
  {
    image: Abu,
    name: "Dr. Mohammed Abu-Ragheef",
    desc: "Dr. Mohammed Abu-Ragheef as a member of the board of Swedish society of the emergency medicine and a member of pre hospital section of the European society of emergency medicine. Today, he serves at Norrlands University Hospital in the north of Sweden, bringing global insights to local care. Have been working in many other well known hospitals in Sweden.His professional journey is marked by a commitment to education, collaboration, and innovation. Through his involvement in national and European medical societies, Dr. Abu-Ragheef contributes to the development of prehospital and in-hospital emergency systems. His calm, focused approach under pressure has earned him recognition as both a skilled clinician and a leader in the emergency medicine community",
    banner: mohammed_banner
  },
];

//Specific person info------------------------------------------

export const abu_data = {
  image: Abu,
  from:'',
  about: '',
    name: "Dr. Mohammed Abu-Ragheef",
    desc: "Dr. Mohammed Abu-Ragheef as a member of the board of Swedish society of the emergency medicine and a member of pre hospital section of the European society of emergency medicine. Today, he serves at Norrlands University Hospital in the north of Sweden, bringing global insights to local care. Have been working in many other well known hospitals in Sweden.His professional journey is marked by a commitment to education, collaboration, and innovation. Through his involvement in national and European medical societies, Dr. Abu-Ragheef contributes to the development of prehospital and in-hospital emergency systems. His calm, focused approach under pressure has earned him recognition as both a skilled clinician and a leader in the emergency medicine community",
    banner: mohammed_banner
}

export const mohamed_data = {
    image: dr_3,
    name: "Mohamed Hosni",
    desc: "Mr Mohamed Hosni is a Consultant Obstetrician and Gynaecologist at Imperial College Hopsitals in London, United Kingdom, with over 20 years of experience. He is a very experienced laparoscopic surgeon, with international reputation in minimal access surgery and endometriosis. He has a broad clinical research background and has collaborated with numerous doctors and scientists on different projects in Obstetric and Gynaecologic research. He has presented both Nationally and Internationally, have several peer-reviewed publications in scientific journals. He completed MD, MSc, and he is currently a member of the Royal College of Obstetricians and Gynaecologists. He is a firm believer in a patient-centred approach, personalized on an individual basis. He is entirely dedicated to his profession. He places a significant importance on taking time to listen to each patients’ specific needs and providing them with a thorough explanation of their treatment options.",
    banner: mohamed_banner
    
}

export const chrysoula_data = {
    image: Chrysoula,
    name: "Chrysoula I. Liakou",
    desc: "Dr. Chrysoula Liakou is an American Board-Certified Internal Medicine Physician with a distinguished academic and professional background. She earned her MD from the University of Ioannina and her PhD from the University of Athens, Greece. Dr. Liakou completed her Internal Medicine internship and residency at the University of Kentucky and a post-doctoral fellowship in Immunology at the University of Texas. Dr. Liakou’s significant contributions to immunology include collaborating with Dr. James P. Allison, the 2018 Nobel Prize Winner in Medicine, during her fellowship. Two of her research papers were cited in his Nobel Prize acceptance speech. Throughout her career, Dr. Liakou has excelled in academia, private hospitals, and the pharmaceutical industry, where she has served as Medical Advisor and Chief Medical Officer. With over a decade of experience, she is renowned for her expertise in healthcare strategy, research development, business transformation, and innovation, always emphasizing a health-centered organizational culture.",
    banner: chrysoula_banner
}

export const joaquin_data = {
    image: joaquin,
    name: "Joaquin Cayon",
    desc: "Joaquin Cayon is director of the Research Group on Health Law and Bioethics at IDIVAL, and associate professor of health law at the University of Cantabria, Spain. He is combining his academic activities with the legal advice as head of the Legal Advisory Service at the Health Ministry of the Government of Cantabria. Is also President of the Executive Board of the Ibero-American Health Law Network and was former Vice-President of the European Association of Health Law. Long teaching and research experience with a wide list of publications and oral presentations as a guest lecturer and speaker in different American and European universities. He is also taking part of the advisory board of different law journals. His research activities are focused on different health law topics such as the patient-consumer approach, patients’ rights, healthcare systems, AI in health, health data, medical liability, reproductive technologies, and end-of-life decisions. He has been Principal Investigator of various European research projects funded by the EU and the Council of Europe and has served as an Expert of the Council of Europe in the field of human rights and biomedicine.",
    banner: joaquin_banner
  }

export const Hassan_data = {
  name: "Hassan El-Tamimi",
  about: "Professor of Cardiovascular Medicine",
  from: "Mohammed Bin Rashid University & Mediclinic Parkview Hospital, Dubai",
  image: Hassan,
  desc: `Professor El-Tamimi has over 30 years of experience in cardiovascular medicine. He trained and worked in prestigious institutions across the UK and the USA, including Leeds General Infirmary, Hammersmith Hospital, University of Florida, and Michigan State University. Currently, he is a Professor of Cardiovascular Medicine at Mohammed Bin Rashid University and Head of Cardiology at Mediclinic Parkview Hospital Dubai. He has published 165 articles and 5 book chapters and is a fellow of several esteemed medical societies, including the Royal Society of Medicine and the American College of Cardiology.
 `,
 banner: hassan_banner
};

export const Chan_data = {
  name: "Willie Sai Ho Chan",
  about: "Professor & National Representative, EAPPM",
  from: "Taiwan, China",
  image: Wilie,
  desc: `Willie Sai Ho Chan, known as Prof. Chan, grew up in Hong Kong. He holds a Bachelor’s degree (LLB) from China University of Political Science and Law in Beijing and a Doctor of Medicine (MD) from China Medical University in Taiwan. Currently, he works as a Fellow, Professor, and National Representative of the European Association for Predictive, Preventive and Personalized Medicine in Taiwan, China. Prof. Chan’s research focuses on integrating Chinese and Western medicine, and he has authored numerous influential papers in the field of healthcare and regenerative medicine. His contributions span multiple disciplines, including quantum mechanics, genetics, and oncology.`,
  banner: willie_banner
};

export const Mihail_data = {
  name: "Prof. dr. habil. Mihail Lucian Birsa",
  about: "Professor of Chemistry",
  from: "Alexandru Ioan Cuza University, Romania",
  image: Mihail,
  desc: `Dr. Mihail Lucian Birsa is currently a Professor in the Department of Chemistry at the Alexandru Ioan Cuza University of Iasi, Romania. In 2003 he was selected as a member of the Alexander von Humboldt Foundation, working with Professor Henning Hopf in TU Braunschweig – Germany. Since then numerous return fellowships were granted by the Alexander von Humboldt Foundation. He has more than 125 publications in peer-review journals and published +45 books/book chapters (John Wiley &amp; Sons, Thieme etc). Also, is editorial board member in more than 50 journals such as Applied Sciences, Arkivoc, BioChem, Edelweiss Chemical Science Journal, Journal of Medicinal Chemistry and Drug Design, Journal of Fine Chemical Engineering, Modern Approaches in Drug Designing, Pharmaceutical Toxicology.`,
  banner: mihail_banner
};

export const Laura_data = {
  name: "Laura Gabriela SARBU",
  about: "Associate Professor in Chemistry",
  from: "Alexandru Ioan Cuza University, Romania",
  image: Laura,
  desc: `Dr. Laura Gabriela SARBU is currently an Associate Professor in the Department of Chemistry at Alexandru Ioan Cuza University of Iasi, Romania. She received a Ph.D. degree in Organic Chemistry in 2015. During the Ph.D. program she joined several times the Prof. dr. Henning Hopf research team in TU Braunschweig – Germany. She has more than 55 publications in peer-review journals and published 4 books. Also, is editorial board member in 25+ journals such as Advance in Medical and Clinical Research, Annals of Clinical and Laboratory Recerca, Chemical Glycobiology Journal, International Journal Bioorganic and Medicinal Chemistry, Journal of Biomedical Research &amp; Environmental Sciences – Green Chemistry, Journal of Molecular Biology and Drug Design.`,
  banner: laure_banner
};

export const Hosni_data = {
  name: "Mohamed Hosni",
  about: "Consultant Obstetrician and Gynaecologist",
  from: "Imperial College Hospitals, London, UK",
  image: Mohamed,
  desc: `Mr Mohamed Hosni is a Consultant Obstetrician and Gynaecologist at Imperial College Hopsitals in London, United Kingdom, with over 20 years of experience. He is a very experienced laparoscopic surgeon, with international reputation in minimal access surgery and endometriosis. He has a broad clinical research background and has collaborated with numerous doctors and scientists on different projects in Obstetric and Gynaecologic research. He has presented both Nationally and Internationally, have several peer-reviewed publications in scientific journals. He completed MD, MSc, and he is currently a member of the Royal College of Obstetricians and Gynaecologists. He is a firm believer in a patient-centred approach, personalized on an individual basis. He is entirely dedicated to his profession. He places a significant importance on taking time to listen to each patients’ specific needs and providing them with a thorough explanation of their treatment options.`,
  banner: mohamed_banner
};

export const Dana_data = {
  name: "Dana York",
  about: "Educator & Dental Researcher",
  from: "University of New York / Carol Davila University, Romania",
  image: Dana,
  desc: `Dr. Dana York Most recent degree is in Education. It come from the University of New York, from the Academy of Distinguished Educators, in Excellence in Clinical Teaching. PhD is earned in Lasers in Periodontology, preceded by a Master of Science Degree awarded in Biophysics and Bio-Cellular Technology and Doctor in Dental Surgery, from Medical University Carol Davila University, Bucharest, Romania. Prof York served on the Board of Editors of the International Phototherapy Association in Japan, and I she is a  Fellow of Royal Society of Medicine.`,
  banner: dana_banner
};

export const Heidari_data = {
  name: "Prof. Dr. Alireza Heidari",
  about: "Distinguished Professor of Chemistry",
  from: "California South University, USA",
  image: Alireza,
  desc: `Prof. Dr. Alireza Heidari is a Full Distinguished Professor and Academic Tenure of Chemistry at California South University (CSU), Irvine, USA, holding Enrico Fermi Distinguished Chair in Molecular Spectroscopy. He holds double postdocs and extensive expertise in Biophysical Chemistry, Quantum Chemistry, Nanochemistry, and more. With numerous publications, and participation in over 900 international conferences, he has taught at various universities worldwide and authored over 20 books. Currently, he leads the Cancer Research Institute and BioSpectroscopy Core Research Laboratory at CSU.`,
  banner: alireza_banner
};

export const Sobia_data = {
  name: "Sobia Hasan",
  about: "Assistant Professor & Clinical Head",
  from: "Iqra University, Karachi, Pakistan",
  image: Sobia,
  desc: `Dr. Sobia Hasan is an experienced physical therapist with 17 years of expertise in musculoskeletal rehabilitation, sports injury prevention, and movement science. She currently serves as an Assistant Professor and Clinical Head in the Doctor of Physical Therapy program at Iqra University, Karachi.
She holds an MPhil in Physical Therapy from Ziauddin University and is actively pursuing a Ph.D. Her research contributions include publications in national and international journals and presentations at international conferences, where she has been invited as a keynote speaker.`,
banner: sobia_banner
};

export const visit_places = [
  {
    name: "Serranos Towers",
    image:
      "https://images.pexels.com/photos/24906254/pexels-photo-24906254/free-photo-of-medieval-serranos-towers-in-valencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    km: "2.4",
  },
  {
    name: "Valencia Cathedral",
    image:
      "https://images.pexels.com/photos/21287065/pexels-photo-21287065/free-photo-of-basilica-de-la-mare-de-deu-dels-desemparats-and-cathedral-in-valencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    km: "3.6",
  },
  {
    name: "Gulliver park",
    image:
      "https://images.pexels.com/photos/31978874/pexels-photo-31978874/free-photo-of-tranquil-park-scene-with-fountain-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    km: "4.7",
  },
  {
    name: "Oceanogràfic València",
    image:
      "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    km: "6",
  },
  {
    name: "Ciudad de las Artes y las Ciencias",
    image:
      "https://images.pexels.com/photos/6237137/pexels-photo-6237137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    km: "6.5",
  },
];

