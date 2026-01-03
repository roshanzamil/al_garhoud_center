
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
    path: "/service",
    has_submenu: true, 
    sub_menus: [
      { title: "Dubai Health - DHA", path: "/service?tab=dha" },
      { title: "Typing Services", path: "/service?tab=typing" },
      { title: "Amer", path: "/service?tab=amer" },
      { title: "DET", path: "/service?tab=det" },
      { title: "Taw-Jeeh Services", path: "/service?tab=tawjeeh" },
      { title: "Notary Public", path: "/service?tab=notary" },
    ]
  },
  { title: "Leadership", has_submenu: false, path: "/team" },
  { title: "Milestones", has_submenu: false, path: "/milestones" },
  { title: "Gallery", has_submenu: false, path: "/gallery" },
  { title: "Downloads", has_submenu: false, path: "/downloads" },
];


export default menu_data;
