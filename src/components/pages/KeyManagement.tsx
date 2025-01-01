import React from 'react';
import { Plus, Upload, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import KeyGenerationForm from '@/components/forms/KeyGenerationForm';
import KeyImportForm from '@/components/forms/KeyImportForm';
import KeyExportForm from '@/components/forms/KeyExportForm';

const KeyManagement = () => {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-lg font-medium">
            <Plus className="w-4 h-4" />
            Generate New Keypair
          </CardTitle>
        </CardHeader>
        <CardContent>
          <KeyGenerationForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-lg font-medium">
            <Upload className="w-4 h-4" />
            Import Keypair
          </CardTitle>
        </CardHeader>
        <CardContent>
          <KeyImportForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-lg font-medium">
            <Download className="w-4 h-4" />
            Export Keypair
          </CardTitle>
        </CardHeader>
        <CardContent>
          <KeyExportForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default KeyManagement;