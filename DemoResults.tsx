import React, { useState } from 'react';
import { ArrowLeft, RefreshCw, AlertTriangle, CheckCircle, TrendingUp, Shield, Target, Zap, Info, ChevronDown, ChevronUp, ArrowRight, Eye, FileText, Globe, Users } from 'lucide-react';

interface DemoResultsProps {
  onRestart: () => void;
  onBackToPitchDeck?: () => void;
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

const DemoResults: React.FC<DemoResultsProps> = ({ onRestart, onBackToPitchDeck }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToPitchDeck = () => {
    // This will be passed from the parent component to reset to slide 1
    onRestart();
    // Add a small delay to ensure state is reset, then navigate back
    setTimeout(() => {
      window.history.back();
    }, 100);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const criticalIssues = [
    {
      id: 'fda-violation',
      title: 'FDA Health Claim Violation',
      severity: 'Critical',
      platform: 'All Platforms',
      teaser: 'Contains prohibited phrases: "supports muscle growth", "enhances performance"',
      description: 'Product description contains health claims that require FDA pre-approval. These claims can result in immediate listing removal and legal action.',
      impact: 'Immediate listing suspension, potential legal liability',
      solution: 'Replace with structure/function claims: "supports normal muscle function" or "intended for active individuals"',
      code: `// Current (Prohibited)
"Pure creatine monohydrate powder for muscle growth and strength. 
Supports athletic performance and recovery."

// Compliant Alternative  
"Pure creatine monohydrate powder intended for active individuals. 
Supports normal muscle function during exercise."`
    },
    {
      id: 'meta-policy',
      title: 'Meta Ads Policy Violation',
      severity: 'Critical',
      platform: 'Meta/Facebook',
      teaser: 'Health benefit claims violate Meta advertising policies for supplements',
      description: 'Meta prohibits ads for supplements that make health benefit claims without proper disclaimers and substantiation.',
      impact: 'Ad account suspension, campaign disapproval',
      solution: 'Add required disclaimers and focus on ingredient benefits rather than health outcomes',
      code: `// Add Required Disclaimer
"*This statement has not been evaluated by the FDA. 
This product is not intended to diagnose, treat, cure, or prevent any disease."

// Focus on Ingredients
"Contains 5g of pure creatine monohydrate per serving"`
    },
    {
      id: 'trust-signals',
      title: 'Missing Trust Signals',
      severity: 'High',
      platform: 'All Platforms',
      teaser: 'No third-party certifications, lab testing, or quality badges displayed',
      description: 'Product lacks trust indicators that modern consumers expect, reducing conversion rates and platform ranking.',
      impact: 'Lower conversion rates, reduced organic visibility',
      solution: 'Add certifications, lab testing results, and quality badges',
      code: `// Add Trust Elements
✓ Third-party tested for purity
✓ NSF Certified for Sport
✓ Made in FDA-registered facility
✓ Certificate of Analysis available`
    }
  ];

  const optimizationSummary = {
    titleOptimization: [
      {
        platform: 'Amazon',
        current: 'Creatine Monohydrate Powder (47 chars)',
        optimized: 'Pure Creatine Monohydrate Powder 500g Unflavored (52 chars)',
        status: 'Optimized',
        limit: '200 chars',
        improvement: 'Added key descriptors within limit'
      },
      {
        platform: 'Google Shopping',
        current: 'Creatine Monohydrate Powder (47 chars)',
        optimized: 'Creatine Monohydrate Powder 500g Pure Unflavored (48 chars)',
        status: 'Optimized',
        limit: '150 chars',
        improvement: 'Keyword-optimized for search'
      },
      {
        platform: 'Meta Catalog',
        current: 'Creatine Monohydrate Powder (47 chars)',
        optimized: 'Pure Creatine Powder - 500g Unflavored (38 chars)',
        status: 'Optimized',
        limit: '100 chars',
        improvement: 'Shortened for mobile display'
      }
    ],
    keywordAnalysis: [
      {
        keyword: 'pure creatine',
        opportunity: 'High',
        currentRank: 'Not optimized',
        potential: '+23% CTR improvement',
        searchVolume: '12,000/month',
        competition: 'Medium'
      },
      {
        keyword: 'unflavored creatine',
        opportunity: 'Medium',
        currentRank: 'Not optimized', 
        potential: '+15% CTR improvement',
        searchVolume: '3,400/month',
        competition: 'Low'
      },
      {
        keyword: 'creatine monohydrate 500g',
        opportunity: 'High',
        currentRank: 'Not optimized',
        potential: '+31% CTR improvement', 
        searchVolume: '8,900/month',
        competition: 'Medium'
      }
    ],
    platformRecommendations: [
      {
        platform: 'Amazon',
        icon: '🛒',
        recommendations: [
          'Add A+ Content with ingredient sourcing details',
          'Include "Amazon\'s Choice" optimization keywords',
          'Add bullet points highlighting purity and testing',
          'Optimize for voice search: "Alexa, order creatine"'
        ]
      },
      {
        platform: 'Google Shopping',
        icon: '🔍',
        recommendations: [
          'Add structured data for rich snippets',
          'Optimize for "near me" supplement store searches',
          'Include GTIN/UPC for better product matching',
          'Add seasonal keywords for fitness goals'
        ]
      },
      {
        platform: 'Meta Catalog',
        icon: '📱',
        recommendations: [
          'Create video content showcasing mixing/usage',
          'Add lifestyle imagery for dynamic ads',
          'Optimize for mobile-first browsing',
          'Include user-generated content tags'
        ]
      },
      {
        platform: 'TikTok Shop',
        icon: '🎵',
        recommendations: [
          'Add trending fitness hashtags to description',
          'Create short-form video content hooks',
          'Optimize for Gen Z language and terms',
          'Include "TikTok Made Me Buy It" appeal'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="h-full flex flex-col">
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
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Step 3 of 3: Results & Recommendations
              </div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See what's flagged, why it matters, and exactly how to fix it — including compliant rewrites, trust fixes, and platform-specific SEO.
            </p>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
              <div className="w-12 h-1 bg-blue-600"></div>
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
              <div className="w-12 h-1 bg-green-600"></div>
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Compact Summary Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  🔴
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">3</div>
                <div className="text-gray-700 font-medium">Critical Issues</div>
                <div className="text-sm text-gray-500 mt-1">Require immediate attention</div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  🟡
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-700 font-medium">Optimizations</div>
                <div className="text-sm text-gray-500 mt-1">Performance improvements</div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ✅
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                <div className="text-gray-700 font-medium">Compliance Score</div>
                <div className="text-sm text-gray-500 mt-1">(after applying recommendations)</div>
              </div>
            </div>

            {/* Side by Side Layout - Critical Issues and Optimization Summary */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Critical Issues Section */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div 
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('critical-issues')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      🚨
                      <h3 className="text-lg font-bold text-gray-900">Critical Issues</h3>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                        3 Issues
                      </span>
                    </div>
                    {expandedSections['critical-issues'] ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                  
                  {/* Teaser Content - Always Visible */}
                  {!expandedSections['critical-issues'] && (
                    <div className="mt-3 space-y-2">
                      {criticalIssues.map((issue, index) => (
                        <div key={issue.id} className="flex items-start space-x-2 p-2 bg-red-50 rounded-lg border border-red-200">
                          <div className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-1 mb-1">
                              <h4 className="font-semibold text-red-900 text-sm">{issue.title}</h4>
                              <span className="bg-red-200 text-red-800 px-1 py-0.5 rounded text-xs font-medium">
                                {issue.severity}
                              </span>
                            </div>
                            <p className="text-red-700 text-xs">{issue.teaser}</p>
                          </div>
                        </div>
                      ))}
                      <button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm">
                        <span>View Details & Solutions</span>
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
                
                {expandedSections['critical-issues'] && (
                  <div className="border-t border-gray-200 p-4 space-y-4">
                    {criticalIssues.map((issue, index) => (
                      <div key={issue.id} className="bg-red-50 rounded-xl p-4 border border-red-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-red-900">{issue.title}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-semibold">
                                  {issue.severity}
                                </span>
                                <span className="text-red-700 text-sm">{issue.platform}</span>
                              </div>
                            </div>
                          </div>
                          <Tooltip content="Critical issues can result in immediate listing removal">
                            <Info className="w-4 h-4 text-red-600" />
                          </Tooltip>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-red-900 mb-1 text-sm">Issue Description</h5>
                            <p className="text-red-800 text-sm">{issue.description}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-red-900 mb-1 text-sm">Business Impact</h5>
                            <p className="text-red-800 text-sm">{issue.impact}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-red-900 mb-1 text-sm">Recommended Solution</h5>
                            <p className="text-red-800 mb-2 text-sm">{issue.solution}</p>
                            <div className="bg-white rounded-lg p-3 border border-red-300">
                              <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono">
                                {issue.code}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Platform Optimization Summary */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div 
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('optimization-summary')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-900">Optimizations</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        12 Items
                      </span>
                    </div>
                    {expandedSections['optimization-summary'] ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                  
                  {/* Teaser Content - Always Visible */}
                  {!expandedSections['optimization-summary'] && (
                    <div className="mt-3 space-y-2">
                      <div className="grid grid-cols-1 gap-2">
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                          <div className="text-sm font-semibold text-blue-900 mb-1">Title Optimization</div>
                          <div className="text-xs text-blue-700">Amazon, Google, Meta optimized titles</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <div className="text-sm font-semibold text-green-900 mb-1">Keyword Opportunities</div>
                          <div className="text-xs text-green-700">3 high-impact keywords identified</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                          <div className="text-sm font-semibold text-purple-900 mb-1">Platform Recommendations</div>
                          <div className="text-xs text-purple-700">Custom strategies for each channel</div>
                        </div>
                      </div>
                      <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm">
                        <span>View Detailed Optimizations</span>
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
                
                {expandedSections['optimization-summary'] && (
                  <div className="border-t border-gray-200 p-4 space-y-6">
                    {/* Title Length Optimization */}
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                        <FileText className="w-4 h-4 text-blue-600 mr-2" />
                        Title Length Optimization
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {optimizationSummary.titleOptimization.map((item, index) => (
                          <div key={index} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold text-blue-900 text-sm">{item.platform}</h5>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                                {item.status}
                              </span>
                            </div>
                            <div className="space-y-1 text-xs">
                              <div>
                                <span className="text-gray-600">Current: </span>
                                <span className="text-gray-800">{item.current}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Optimized: </span>
                                <span className="text-blue-800 font-medium">{item.optimized}</span>
                              </div>
                              <div className="text-blue-700 font-medium">{item.improvement}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Keyword Performance Analysis */}
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                        Keyword Performance Analysis
                      </h4>
                      <div className="space-y-2">
                        {optimizationSummary.keywordAnalysis.map((keyword, index) => (
                          <div key={index} className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <div className="grid grid-cols-2 gap-3 items-center text-xs">
                              <div>
                                <div className="font-semibold text-green-900">"{keyword.keyword}"</div>
                                <div className="text-green-700">Volume: {keyword.searchVolume}</div>
                              </div>
                              <div className="text-right">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                  keyword.opportunity === 'High' 
                                    ? 'bg-red-100 text-red-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {keyword.opportunity} Opportunity
                                </span>
                                <div className="font-semibold text-green-700 mt-1">{keyword.potential}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Platform-Specific Recommendations */}
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                        <Globe className="w-4 h-4 text-purple-600 mr-2" />
                        Platform-Specific Recommendations
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {optimizationSummary.platformRecommendations.map((platform, index) => (
                          <div key={index} className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-lg">{platform.icon}</span>
                              <h5 className="font-semibold text-purple-900 text-sm">{platform.platform}</h5>
                            </div>
                            <ul className="space-y-1">
                              {platform.recommendations.slice(0, 2).map((rec, recIndex) => (
                                <li key={recIndex} className="flex items-start space-x-2 text-xs">
                                  <CheckCircle className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-purple-800">{rec}</span>
                                </li>
                              ))}
                              {platform.recommendations.length > 2 && (
                                <li className="text-xs text-purple-600 font-medium">
                                  +{platform.recommendations.length - 2} more recommendations
                                </li>
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  // Show popup instead of direct email
                  const popup = document.createElement('div');
                  popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                  popup.innerHTML = `
                    <div class="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
                      <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to see your own SKUs analyzed?</h3>
                      <p class="text-gray-600 mb-6">Get a free, tailored scan—just enter your email and we'll schedule a personalized assessment.</p>
                      <div class="space-y-4">
                        <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="demo-email" />
                        <button onclick="
                          const email = document.getElementById('demo-email').value;
                          if (email) {
                            window.location.href = '/contact?email=' + encodeURIComponent(email);
                          } else {
                            alert('Please enter your email address');
                          }
                        " class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-colors">Request Demo</button>
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" class="w-full text-gray-500 hover:text-gray-700 transition-colors">Cancel</button>
                      </div>
                    </div>
                  `;
                  document.body.appendChild(popup);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center space-x-3"
              >
                <Shield className="w-6 h-6" />
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={onRestart}
                className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center space-x-3"
              >
                <RefreshCw className="w-6 h-6" />
                <span>Try Another Product</span>
              </button>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Fix These Issues?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Get personalized support from our compliance experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoResults;