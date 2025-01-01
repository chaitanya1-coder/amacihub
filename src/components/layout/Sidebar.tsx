import React from 'react';
import { Layout, Key, MessageSquare, Clock } from 'lucide-react';
import NavItem from '@/components/layout/NavItem';
import SidebarFooter from './SidebarFooter';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="w-64 p-4 flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">A-MACI Manager</h1>
      </div>
      
      <nav className="space-y-1 flex-1">
        <NavItem icon={Layout} label="Dashboard" id="dashboard" activePage={activePage} setActivePage={setActivePage} />
        <NavItem icon={Key} label="Key Management" id="keys" activePage={activePage} setActivePage={setActivePage} />
        <NavItem icon={MessageSquare} label="Message Signing" id="signing" activePage={activePage} setActivePage={setActivePage} />
        <NavItem icon={Clock} label="Activity Log" id="activity" activePage={activePage} setActivePage={setActivePage} />
      </nav>

      <SidebarFooter />
    </div>
  );
};

export default Sidebar;