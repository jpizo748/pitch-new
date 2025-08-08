import React, { useEffect, useState } from 'react';
import { Shield, Search, FileText, Globe, TrendingUp, CheckCircle, ArrowRight, Info } from 'lucide-react';

import { ArrowLeft } from 'lucide-react';

interface DemoScanningProps {
  onNext: () => void;
}

// Tooltip Component
const Tooltip: React.FC<{ content: string; children: React.ReactNode }> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

const DemoScanning: React.FC<DemoScanningProps> = ({ onNext }) => {
  const [progress, setProgress] = useState(0);
  const [currentCheckIndex, setCurrentCheckIndex] = useState(0);

  const checks = [
    { 
      text: "FDA, FTC, and DSHEA compliance validation", 
      icon: "⚖️",
      tooltip: "Validates health claims against FDA regulations, FTC advertising guidelines, and Dietary Supplement Health and Education Act requirements"
    },
    { 
      text: "Platform-specific policy checks (Amazon, Google, Meta)", 
      icon: "🛒",
      tooltip: "Ensures your product listings comply with each platform's unique advertising and content policies"
    },
    { 
      text: "AI-readiness and claim integrity analysis", 
      icon: "🧠",
      tooltip: "Optimizes content for AI search engines, voice assistants, and ensures factual accuracy of all product claims"
    },
    { 
      text: "Search optimization and visibility signals", 
      icon: "🔍",
      tooltip: "Analyzes keywords, meta data, and content structure to maximize organic search visibility and ranking"
    },
    { 
      text: "Trust markers and conversion optimization", 
      icon: "✅",
      tooltip: "Identifies opportunities to add certifications, testimonials, and trust signals that boost conversion rates"
    },
    { 
      text: "Revenue risk assessment and prevention", 
      icon: "📉",
      tooltip: "Calculates potential revenue loss from compliance violations and provides prevention strategies"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        // Update current check based on progress
        const checkProgress = Math.floor((newProgress / 100) * checks.length);
        setCurrentCheckIndex(Math.min(checkProgress, checks.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [checks.length]);

  const handleViewResults = () => {
    onNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10">
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
          <div className="flex items-center space-x-2">
            <img src="/FeedZip-Logo-iconFunnel.png" alt="FunnelZip" className="h-8 w-8 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">FunnelZip</span>
          </div>
        </div>
        
        {/* Demo Header */}
        <div className="text-center py-6 px-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive Demo</h1>
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Step 2 of 3: AI Analysis
            </div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch FunnelZip's AI run 150+ real-time checks across compliance, content, and conversion best practices.
          </p>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
            <div className="w-12 h-1 bg-blue-600"></div>
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
            <div className="w-12 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-start justify-center px-4 py-4 relative z-10">
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left Side - Progress Circle */}
              <div className="text-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                  {/* Background circle */}
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100 shadow-inner"></div>
                  
                  {/* Progress circle */}
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-transparent transition-all duration-300 ease-out shadow-lg"
                    style={{
                      background: `conic-gradient(from 0deg, #3b82f6 0deg, #8b5cf6 ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
                      borderRadius: '50%',
                      mask: 'radial-gradient(circle at center, transparent 65%, black 65%)',
                      WebkitMask: 'radial-gradient(circle at center, transparent 65%, black 65%)'
                    }}
                  ></div>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{progress}%</div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">Analyzing</div>
                  </div>
                  
                  {/* Animated scanning icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-5 h-5 text-blue-500 animate-spin" style={{
                      transform: `rotate(${progress * 3.6}deg)`,
                      transformOrigin: `50% ${window.innerWidth < 640 ? '48px' : '64px'}`
                    }}>
                      <Search className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {progress === 100 ? 'Status: ✅ 100% Complete' : 'Running 150+ Compliance Checks'}
                </h3>
                <p className="text-sm text-gray-600">
                  {progress === 100 
                    ? 'Summary: Analysis complete. Found compliance issues and optimization opportunities.'
                    : 'Comprehensive analysis across all critical areas'
                  }
                </p>
              </div>

              {/* Right Side - Check List */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  🔍
                  Scanning Areas
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  {checks.map((check, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-xl transition-all duration-500 ${
                        index < currentCheckIndex 
                          ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                          : index === currentCheckIndex 
                          ? 'bg-purple-50 border border-purple-200 animate-pulse shadow-md' 
                          : 'bg-gray-50 border border-gray-200 opacity-50'
                      }`}
                    >
                      <div className="text-sm sm:text-base flex-shrink-0">
                        {index < currentCheckIndex ? '✅' : index === currentCheckIndex ? check.icon : '⏳'}
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs sm:text-sm font-medium ${
                          index < currentCheckIndex 
                            ? 'text-gray-800' 
                            : index === currentCheckIndex 
                            ? 'text-purple-800' 
                            : 'text-gray-600'
                        }`}>
                          {check.text}
                        </p>
                      </div>
                      <Tooltip content={check.tooltip}>
                        <Info className="w-4 h-4 text-gray-400 hover:text-blue-600 transition-colors flex-shrink-0" />
                      </Tooltip>
                      {index < currentCheckIndex && (
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Analysis Complete - Always visible when progress is 100% */}
            {progress === 100 && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="text-lg sm:text-xl font-bold text-gray-900">Analysis Complete!</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Found compliance issues and optimization opportunities
                </p>
                
                <button
                  onClick={handleViewResults}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3 mx-auto"
                >
                  <span>View Results</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoScanning;