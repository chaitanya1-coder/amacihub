import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const KeyExportForm = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Select>
        <SelectTrigger className="w-full max-w-sm">
          <SelectValue placeholder="Select keypair to export..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="main">Main Voting Key</SelectItem>
          <SelectItem value="backup">Backup Key</SelectItem>
        </SelectContent>
      </Select>
      <Button className="w-full max-w-sm">Export Public Key</Button>
    </div>
  );
};

export default KeyExportForm;