import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { getStoredKeypairs } from '@/lib/amaci/keypair';
import { signVoteMessage } from '@/lib/amaci/message';
import { useToast } from '@/hooks/use-toast';

const MessageSigningForm = () => {
  const [option, setOption] = useState<'yes' | 'no' | ''>('');
  const [amount, setAmount] = useState<number>(0);
  const [selectedKeypair, setSelectedKeypair] = useState('');
  const [keypairs, setKeypairs] = useState<string[]>([]);
  const [signedMessage, setSignedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const stored = getStoredKeypairs();
    setKeypairs(Object.keys(stored));
  }, []);

  const handleSign = async () => {
    if (!option || !selectedKeypair || amount <= 0) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const signed = await signVoteMessage(selectedKeypair, { option, amount });
      if (signed) {
        setSignedMessage(JSON.stringify(signed, null, 2));
        toast({
          title: "Success",
          description: "Message signed successfully"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign message",
        variant: "destructive"
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Vote Option</Label>
        <Select value={option} onValueChange={(value: 'yes' | 'no') => setOption(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select vote option..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Vote Amount</Label>
        <Input 
          type="number" 
          min="0"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
        />
      </div>

      <div className="space-y-2">
        <Label>Select Keypair</Label>
        <Select value={selectedKeypair} onValueChange={setSelectedKeypair}>
          <SelectTrigger>
            <SelectValue placeholder="Select keypair..." />
          </SelectTrigger>
          <SelectContent>
            {keypairs.map(name => (
              <SelectItem key={name} value={name}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button 
        className="w-full"
        onClick={handleSign}
        disabled={isLoading}
      >
        {isLoading ? "Signing..." : "Sign Message"}
      </Button>

      <div className="space-y-2">
        <Label>Signed Message</Label>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-xs font-mono break-all text-gray-600">
            {signedMessage || "No message signed yet..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSigningForm;