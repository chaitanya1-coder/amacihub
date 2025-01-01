import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { generateKeypair } from '@/lib/amaci/keypair';
import { useKeypairStore } from '@/store/keypairStore';
import { useToast } from '@/hooks/use-toast';

const KeyGenerationForm = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const addKeypair = useKeypairStore(state => state.addKeypair);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!name) {
      toast({
        title: "Error",
        description: "Please enter a keypair name",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const keypair = await generateKeypair(name);
      addKeypair(name, keypair);
      toast({
        title: "Success",
        description: "Keypair generated successfully"
      });
      setName('');
    } catch (error) {
      console.error('Error in handleGenerate:', error);
      toast({
        title: "Error",
        description: (error as Error).message || "Failed to generate keypair",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <Input
        placeholder="Enter keypair name"
        className="w-full max-w-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button 
        className="w-full max-w-sm"
        onClick={handleGenerate}
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Generate Keypair"}
      </Button>
    </div>
  );
};

export default KeyGenerationForm;