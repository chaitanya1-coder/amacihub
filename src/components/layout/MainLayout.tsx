import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Dashboard from '@/components/pages/Dashboard';
import KeyManagement from '@/components/pages/KeyManagement';
import MessageSigning from '@/components/pages/MessageSigning';
import ActivityLog from '@/components/pages/ActivityLog';

const MainLayout = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-white">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 overflow-auto border-l">
        <header className="border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
            </h2>
          </div>
        </header>

        <main className="p-6">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'keys' && <KeyManagement />}
          {activePage === 'signing' && <MessageSigning />}
          {activePage === 'activity' && <ActivityLog />}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;