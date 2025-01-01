import React, { useState } from 'react';
import { Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SidebarFooter = () => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="border-t pt-4 space-y-2">
      <Button 
        variant="ghost" 
        className="w-full justify-start" 
        size="sm"
        onClick={() => setShowLogout(!showLogout)}
      >
        <Settings className="w-5 h-5 mr-3" />
        Settings
      </Button>
      
      {showLogout && (
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" 
          size="sm"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      )}
    </div>
  );
};

export default SidebarFooter;