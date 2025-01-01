import React from 'react';
import { Copy, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useKeypairStore } from '@/store/keypairStore';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const keypairs = useKeypairStore(state => state.keypairs);
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Key copied to clipboard"
    });
  };

  return (
    <div className="space-y-4">
      {Object.entries(keypairs).length === 0 ? (
        <div className="text-center py-12">
          <Key className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Keypairs Yet</h3>
          <p className="text-gray-500">
            Generate your first keypair in the Key Management section
          </p>
        </div>
      ) : (
        Object.entries(keypairs).map(([name, keypair]) => (
          <div key={keypair.publicKey} className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">{name}</h3>
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
                active
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Public Key
                </label>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <code className="text-sm font-mono break-all">
                    {keypair.publicKey}
                  </code>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 ml-2 flex-shrink-0"
                    onClick={() => handleCopy(keypair.publicKey)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Private Key
                </label>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <code className="text-sm font-mono break-all">
                    {keypair.privateKey}
                  </code>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 ml-2 flex-shrink-0"
                    onClick={() => handleCopy(keypair.privateKey)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;