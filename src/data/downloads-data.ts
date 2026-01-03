interface DownloadItem {
  id: number;
  title: string;
  description: string;
  url: string;
}

const downloads_data: DownloadItem[] = [
  { 
    id: 1, 
    title: "Company Profile", 
    description: "An overview of our mission, vision, and the full range of services we offer.",
    url: "/assets/pdfs/company-profile.pdf" 
  },
  { 
    id: 2, 
    title: "Service Catalog", 
    description: "A detailed catalog of all government services provided at Al Garhoud Center.",
    url: "/assets/pdfs/service-catalog.pdf" 
  },
  { 
    id: 3, 
    title: "Visa Application Guide", 
    description: "A step-by-step guide to help you with your visa application process.",
    url: "/assets/pdfs/visa-guide.pdf" 
  },
  { 
    id: 4, 
    title: "Business Setup Checklist", 
    description: "A handy checklist for entrepreneurs looking to start a business in Dubai.",
    url: "/assets/pdfs/business-checklist.pdf" 
  },
];

export default downloads_data;
