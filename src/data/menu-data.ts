
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
  {
    title: "Home",
    path: "/",
    has_submenu: false,
  },
  { title: "About Us", has_submenu: false, path: "/about-us" },
  { title: "Services", has_submenu: false, path: "/service" },
  { title: "Leadership", has_submenu: false, path: "/team" },
  { title: "Milestones", has_submenu: false, path: "#" },
  { title: "Gallery", has_submenu: false, path: "#" },
  { title: "Downloads", has_submenu: false, path: "#" },
  { title: "Contact", has_submenu: false, path: "/contact-us" },
];


export default menu_data;
