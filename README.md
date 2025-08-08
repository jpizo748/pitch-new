# FunnelZip Demo Components

This folder contains the extracted demo components from the FunnelZip application that you can integrate into your pitch deck site.

## Components

### 1. DemoFlow.tsx
The main orchestrator component that manages the demo flow between the three steps.

**Props:**
- `onBackToHome: () => void` - Callback function to return to the main site

### 2. DemoInput.tsx
The first step of the demo where users select a product and platforms to analyze.

**Features:**
- Pre-filled sample products (Creatine and Vitamin C)
- Platform selection (Google, Amazon, Meta, Walmart, etc.)
- Auto-selection of first product on mount
- Responsive design with gradient backgrounds

**Props:**
- `onNext: () => void` - Callback to proceed to the next step

### 3. DemoScanning.tsx
The second step showing the AI analysis in progress with animated progress circle.

**Features:**
- Animated progress circle (0-100%)
- Real-time check list with tooltips
- Scanning areas with detailed explanations
- Automatic progression to results when complete

**Props:**
- `onNext: () => void` - Callback to proceed to results

### 4. DemoResults.tsx
The final step displaying compliance issues and optimization recommendations.

**Features:**
- Expandable sections for critical issues and optimizations
- Detailed compliance violation explanations
- Platform-specific recommendations
- Code examples for fixes
- Email capture popup for demo requests

**Props:**
- `onRestart: () => void` - Callback to restart the demo
- `onBackToPitchDeck?: () => void` - Optional callback to return to pitch deck

## Integration Notes

### Dependencies Required
Make sure your project has these dependencies:
```json
{
  "lucide-react": "^0.344.0",
  "react": "^18.3.1"
}
```

### Styling
The components use Tailwind CSS classes. Ensure your project has Tailwind configured.

### Assets
The components reference these logo assets:
- `/FeedZip-Logo-iconFunnel.png` - Main FunnelZip logo

### External Images
The components use these external logo URLs:
- Google: `https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg`
- Amazon: `https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg`
- Meta: `https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg`
- Shopify: `https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg`
- BigCommerce: `https://logos-world.net/wp-content/uploads/2021/02/BigCommerce-Logo.png`

### Usage Example

```tsx
import React from 'react';
import DemoFlow from './demo-files/DemoFlow';

function App() {
  const handleBackToHome = () => {
    // Navigate back to your main site
    window.location.href = '/';
  };

  return (
    <div>
      <DemoFlow onBackToHome={handleBackToHome} />
    </div>
  );
}
```

### Customization

You can customize the demo by:
1. Modifying the sample products in `DemoInput.tsx`
2. Adjusting the compliance issues in `DemoResults.tsx`
3. Changing the platform logos and selections
4. Updating the color schemes and branding
5. Modifying the contact/email capture flow

### Mobile Responsiveness

All components are fully responsive and include:
- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized text sizes for different screen sizes