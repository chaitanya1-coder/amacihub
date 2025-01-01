import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import MessageSigningForm from '@/components/forms/MessageSigningForm';

const MessageSigning = () => {
  return (
    <div className="max-w-xl mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Sign Message</CardTitle>
        </CardHeader>
        <CardContent>
          <MessageSigningForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageSigning;