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
    url: "/assets/docs/GARHOUD-CENTRE-BROUCHER.pdf" 
  }
];

export default downloads_data;
