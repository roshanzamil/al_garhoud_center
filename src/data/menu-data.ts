
const menu_data = (lang: string) => [
  { title: "About Us", key: 'about', path: `/${lang}/about-us`, has_submenu: false },
  { 
    title: "Services", 
    key: 'services',
    path: "#",
    has_submenu: true, 
    sub_menus: [
      { title: "Dubai Health - DHA", path: `/${lang}/service/dha` },
      { title: "Typing Services", path: `/${lang}/service/typing` },
      { title: "Amer", path: `/${lang}/service/amer` },
      { title: "DET", path: "https://eservices.dubaided.gov.ae/pages/anon/gsthme.aspx?dedqs=PM671p6QBb0lV1okx2JABgxoLLKXOgPx" },
      { title: "Taw-Jeeh Services", path: `/${lang}/service/tawjeeh` },
      { title: "Notary Public", path: `/${lang}/service/notary` },
      { title: "Salem", path: `/${lang}/service/salem` },
      { title: "Business Setup", path: `/${lang}/service/business-setup` },
      { title: "Tax Consultancy", path: `/${lang}/service/tax-consultancy` },
      { title: "Accounting Services", path: `/${lang}/service/accounting` },
    ]
  },
  { title: "Leadership", key: 'leadership', has_submenu: false, path: `/${lang}/team` },
  { title: "Gallery", key: 'gallery', has_submenu: false, path: `/${lang}/gallery` },
  { title: "Downloads", key: 'downloads', has_submenu: false, path: `/${lang}/downloads` },
];


export default menu_data;
