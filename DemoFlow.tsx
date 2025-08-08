import React, { useState } from 'react';
import DemoInput from './DemoInput';
import DemoScanning from './DemoScanning';
import DemoResults from './DemoResults';
import { ArrowLeft } from 'lucide-react';

interface DemoFlowProps {
  onBackToHome: () => void;
}

const DemoFlow: React.FC<DemoFlowProps> = ({ onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleBackToPitchDeck = () => {
    // Reset to slide 1 and go back to main app
    window.location.href = '/';
  };

  const renderStep = () => {
    console.log('Current step:', currentStep);
    switch (currentStep) {
      case 1:
        return <DemoInput onNext={nextStep} />;
      case 2:
        return <DemoScanning onNext={nextStep} />;
      case 3:
        return <DemoResults onRestart={() => setCurrentStep(1)} onBackToPitchDeck={handleBackToPitchDeck} />;
      default:
        console.log('Default case, returning to step 1');
        return <DemoInput onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Step Content */}
      <div className="w-full">
        {renderStep()}
      </div>
    </div>
  );
};

export default DemoFlow;