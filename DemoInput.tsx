import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Play, Zap, Globe } from 'lucide-react';

interface DemoInputProps {
  onNext: () => void;
}

const DemoInput: React.FC<DemoInputProps> = ({ onNext }) => {
  const [productTitle, setProductTitle] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  const platformLogos = [
    { 
      id: 'google',
      name: 'Google', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    { 
      id: 'amazon',
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    { 
      id: 'meta',
      name: 'Meta', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    },
    { 
      id: 'walmart',
      name: 'Walmart', 
      logo: '🏪',
    },
    { 
      id: 'shopify',
      name: 'Shop App', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
    },
    { 
      id: 'tiktok',
      name: 'TikTok', 
      logo: '🎵',
    },
    { 
      id: 'bigcommerce',
      name: 'BigCommerce', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/BigCommerce-Logo.png',
    },
    { 
      id: 'ebay',
      name: 'eBay', 
      logo: '🛒',
    }
  ];

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allPlatforms = platformLogos;

  const prefills = [
    {
      title: 'Creatine Monohydrate Powder',
      details: 'Pure creatine monohydrate powder for muscle growth and strength. Supports athletic performance and recovery.',
      defaultPlatforms: ['google', 'amazon', 'meta'],
      riskLevel: 'High'
    },
    {
      title: 'Vitamin C 1000mg Tablets',
      details: 'High-potency vitamin C supplement for immune support. Contains 1000mg of ascorbic acid.',
      defaultPlatforms: ['google', 'amazon'],
      riskLevel: 'Medium'
    }
  ];

  const handlePrefill = (prefill: typeof prefills[0]) => {
    setProductTitle(prefill.title);
    setProductDetails(prefill.details);
    setSelectedPlatforms(prefill.defaultPlatforms);
    // Find the index of the selected prefill
    const index = prefills.findIndex(p => p.title === prefill.title);
    setSelectedProductIndex(index);
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const isFormValid = productTitle && productDetails && selectedPlatforms.length > 0;

  // Auto-select first product and platforms on mount
  React.useEffect(() => {
    if (!productTitle && !productDetails) {
      handlePrefill(prefills[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="flex-1 flex flex-col min-h-0">
        {/* Compact Header */}
        <div className="relative z-10 flex-shrink-0">
          {/* Top Navigation */}
          <div className="flex items-center justify-between p-2">
            <button 
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            <div className="flex items-center space-x-2">
              <img src="/FeedZip-Logo-iconFunnel.png" alt="FunnelZip" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold text-white">FunnelZip</span>
            </div>
          </div>
          
          {/* Demo Header */}
          <div className="text-center py-6 px-4">
            <div className="mb-4">
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                See FunnelZip in Action
              </h1>
              <p className="text-xl text-blue-100 font-semibold mb-4">
                Watch AI detect compliance risks in real-time
              </p>
            </div>
            <p className="text-blue-200 max-w-3xl mx-auto text-lg leading-relaxed">
              Choose a sample product below and watch FunnelZip's AI run 150+ compliance checks across all major platforms
            </p>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</div>
              <div className="w-12 h-1 bg-white/30"></div>
              <div className="w-8 h-8 bg-white/20 text-white/60 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div className="w-12 h-1 bg-white/30"></div>
              <div className="w-8 h-8 bg-white/20 text-white/60 rounded-full flex items-center justify-center text-sm font-bold">3</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 relative z-10 flex flex-col min-h-0 pb-8">
          <div className="max-w-6xl mx-auto flex-1 flex flex-col">
            {/* Step Indicator */}
            <div className="text-center mb-6 flex-shrink-0">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl border border-white/30">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
                Step 1 of 3: Choose Product & Platforms
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-8 flex-shrink-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  AI-Powered Compliance Engine
                </h2>
                <p className="text-lg text-gray-600 font-semibold">
                  150+ real-time checks across all major selling channels
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {prefills.map((prefill, index) => (
                  <button
                    key={index}
                    onClick={() => handlePrefill(prefill)}
                    className={`rounded-3xl p-8 text-left transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                      selectedProductIndex === index
                        ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-500 shadow-2xl ring-4 ring-blue-400/30'
                        : 'bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-purple-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        Sample Product {index + 1}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full font-bold shadow-lg ${
                        prefill.riskLevel === 'High' 
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                          : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                      }`}>
                        {prefill.riskLevel} Risk
                      </span>
                    </div>
                    
                    <h3 className="font-black text-gray-900 mb-3 text-xl">{prefill.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {index === 0 ? (
                        <>
                          Pure creatine monohydrate powder for muscle growth and strength.
                          Supports athletic performance and recovery.
                        </>
                      ) : (
                        <>
                          High-potency vitamin C supplement for immune support.
                          Contains 1000mg of ascorbic acid.
                        </>
                      )}
                    </p>
                    
                    {selectedProductIndex === index && (
                      <div className="flex items-center justify-center mt-6">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center space-x-2 shadow-xl animate-pulse">
                          <CheckCircle className="w-5 h-5" />
                          <span>Selected</span>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-8 flex-shrink-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  Choose Your Platforms
                </h2>
                <p className="text-lg text-gray-600 font-semibold">
                  Select platforms to include in your compliance scan
                </p>
              </div>
              
              {/* Large Platform Selection Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {allPlatforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id)}
                    className={`p-6 rounded-3xl border-2 transition-all duration-300 text-center transform hover:scale-105 hover:shadow-2xl ${
                      selectedPlatforms.includes(platform.id)
                        ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-500 shadow-2xl ring-4 ring-blue-400/30'
                        : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:from-blue-50 hover:to-purple-50'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-xl">
                        {platform.logo.startsWith('http') ? (
                          <img 
                            src={platform.logo} 
                            alt={platform.name}
                            className="h-8 w-auto max-w-[32px]"
                          />
                        ) : (
                          <span className="text-2xl">{platform.logo}</span>
                        )}
                      </div>
                      <h3 className="font-black text-gray-900 text-lg">{platform.name}</h3>
                      {selectedPlatforms.includes(platform.id) && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <div className="text-center flex-shrink-0">
              <button
                onClick={onNext}
                disabled={!isFormValid}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-12 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 flex items-center space-x-4 mx-auto shadow-2xl"
              >
                <Zap className="w-6 h-6" />
                <span>Analyze Compliance</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-blue-200 mt-4 text-lg font-semibold">
                🚀 See real compliance issues detected in seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoInput;