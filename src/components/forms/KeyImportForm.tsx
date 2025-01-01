import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const KeyImportForm = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Input placeholder="Enter keypair name" className="w-full max-w-sm" />
      <Textarea 
        className="w-full max-w-sm h-24"
        placeholder="Paste private key here..."
      />
      <Button className="w-full max-w-sm">Import Keypair</Button>
    </div>
  );
};

export default KeyImportForm;