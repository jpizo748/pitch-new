# FunnelZip Live Site Export

This is a complete export of the current live FunnelZip pitch deck site.

## What's Included

- Complete React/TypeScript application
- All demo components (DemoFlow, DemoInput, DemoScanning, DemoResults)
- Contact and access request forms
- Dashboard component
- Full styling with Tailwind CSS
- All configuration files

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Required Assets

Make sure to copy the FunnelZip logo to your public folder:
- `public/FeedZip-Logo-iconFunnel copy.png`

## Key Components

- **src/App.tsx** - Main application (not included - you'll need to add this)
- **src/components/DemoFlow.tsx** - Main demo orchestrator
- **src/components/demo/** - Individual demo step components
- **src/components/ContactForm.tsx** - Contact form modal
- **src/components/AccessRequestForm.tsx** - Access request form
- **src/Dashboard.tsx** - Dashboard component

## Dependencies

- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.1
- Lucide React 0.344.0
- Vite 5.4.2

## Notes

This export contains all the current files from the live site. You'll need to add the main App.tsx component to complete the application.