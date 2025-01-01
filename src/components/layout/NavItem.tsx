import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  id: string;
  activePage: string;
  setActivePage: (page: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, id, activePage, setActivePage }) => (
  <button
    onClick={() => setActivePage(id)}
    className={`flex items-center gap-3 w-full p-3 rounded-lg text-base ${
      activePage === id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export default NavItem;