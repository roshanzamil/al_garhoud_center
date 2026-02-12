
interface MenuItem {
  title: string;
  path: string;
  has_submenu?: boolean;
  sub_menus?: {
    title: string;
    path: string;
    has_inner_submenu?: boolean;
    noBorder?: boolean;
    sub_menus?: { title: string; path: string; }[];
  }[];
  noBorder?: boolean;
}[];

const menu_data: MenuItem[] = [
  { title: "About Us", has_submenu: false, path: "/about-us" },
  { 
    title: "Services", 
    path: "#",
    has_submenu: true, 
    sub_menus: [
      { title: "Dubai Health - DHA", path: "/service/dha" },
      { title: "Typing Services", path: "/service/typing" },
      { title: "Amer", path: "/service/amer" },
      { title: "DET", path: "https://eservices.dubaided.gov.ae/pages/anon/gsthme.aspx?dedqs=PM671p6QBb0lV1okx2JABgxoLLKXOgPx" },
      { title: "Taw-Jeeh Services", path: "/service/tawjeeh" },
      { title: "Notary Public", path: "/service/notary" },
      { title: "Salem", path: "/service/salem" },
      { title: "Business Setup", path: "/service/business-setup" },
      { title: "Tax Consultancy", path: "/service/tax-consultancy" },
      { title: "Accounting Services", path: "/service/accounting" },
    ]
  },
  { title: "Leadership", has_submenu: false, path: "/team" },
  { title: "Gallery", has_submenu: false, path: "/gallery" },
  { title: "Downloads", has_submenu: false, path: "/downloads" },
];


export default menu_data;
