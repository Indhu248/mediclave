import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Download, CalendarCheck, MessageSquare, ScrollText } from 'lucide-react';

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
    icon: MessageSquare,
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=17159905583&text=Hello&type=phone_number&app_absent=0'
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
