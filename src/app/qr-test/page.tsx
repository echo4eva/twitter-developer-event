"use client"
import React from 'react';
import QRCodeGenerator from '@/components/QRCodeGenerator';

const MyPage: React.FC = () => {
  const handleQRCodeGenerated = (dataUrl: string) => {
    console.log('QR code generated:', dataUrl);
  };

  const handleQRCodeError = (error: Error) => {
    console.error('Error generating QR code:', error);
  };

  return (
    <div>
      <h1>My Page</h1>
      <QRCodeGenerator
        link="https://www.example.com"
        size={300}
        backgroundColor="#f0f0f0"
        foregroundColor="#333333"
        errorCorrectionLevel="M"
        onGenerated={handleQRCodeGenerated}
        onError={handleQRCodeError}
      />
    </div>
  );
};

export default MyPage;