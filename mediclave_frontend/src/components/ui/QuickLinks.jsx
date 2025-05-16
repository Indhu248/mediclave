import { Download, CalendarCheck, ScrollText, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.917 1.043 5.589 2.775 7.671L1.246 23.5l3.829-1.529C7.359 23.147 9.673 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.307 0-4.492-.534-6.333-1.516l-3.567 1.427.927-3.367C2.043 16.846 2 14.855 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const links = [
  {
    id: 'email',
    icon: Download,
    label: 'Brochure download',
    href: 'https://techmatics.helixconferences.com/brochure-download/'
  },
  {
    id: 'phone',
    icon: CalendarCheck,
    label: 'schedule',
    href: '/event_schedule'
  },
  {
    id: 'location',
    icon: ScrollText,
    label: 'Submit Abstract',
    href: '/abstract-submission'
  },
  {
    id: 'website',
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=17159905583&text=Hello&type=phone_number&app_absent=0'
  },
  {
    id: 'faq',
    icon: HelpCircle,
    label: 'FAQs',
    href: '/faq'
  }
];

const QuickLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="fixed bottom-12 right-0 z-50 flex flex-col space-y-3">
      {links.map(({ id, icon: Icon, label, href }) => {
        const isActive = hoveredId === id;

        return (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`flex items-center bg-white shadow-md rounded-l-full overflow-hidden transform transition-all duration-300 ${
              isActive ? 'translate-x-0' : 'translate-x-40'
            }`}
          >
            <div className="bg-one text-black p-3 flex items-center justify-center rounded-l-full">
              <Icon className="h-5 w-5" />
            </div>
            <span className="ml-4 pr-4 text-sm font-medium text-gray-800 whitespace-nowrap">
              {label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default QuickLinks;
