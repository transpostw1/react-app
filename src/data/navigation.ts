import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let authLogin;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    authLogin = true;
  } else {
    authLogin = false;
  }
});

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "App Name",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "City",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Contruction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Country,
    })),
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online Booking",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Real Estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-1-header-2",
    name: "Home - Header 2",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
  },
  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog Single",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Login",
  },
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

const  financeChildrenMenus:NavItemType[] = [
  // {
  //   id: ncNanoId(),
  //   href: "/trade-finance",
  //   name: "Trade Finance",
  // },
  {
    id: ncNanoId(),
    href: "freight-finance",
    name: "Freight Finance",
  }
]

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Ship Schedules",
    // type: "dropdown",
    // children: [
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-1",
    //     name: "Add Listings 1",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-2",
    //     name: "Add Listings 2",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-3",
    //     name: "Add Listings 3",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-4",
    //     name: "Add Listings 4",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-5",
    //     name: "Add Listings 5",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-6",
    //     name: "Add Listings 6",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-7",
    //     name: "Add Listings 7",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-8",
    //     name: "Add Listings 8",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-9",
    //     name: "Add Listings 9",
    //   },
    //   {
    //     id: ncNanoId(),
    //     href: "/add-listing-10",
    //     name: "Add Listings 10",
    //   },
    // ],
  },
  //
  // {
  //   id: ncNanoId(),
  //   href: "https://transpost.co/load-calculator/",
  //   targetBlank: true,
  //   name: "Load Calculator",
  // },

 
  // { id: ncNanoId(), href: "/pay-done", name: "Pay done" },
  //
  // { id: ncNanoId(), href: "/author", name: "Author Page" },
  // { id: ncNanoId(), href: "/account", name: "Account Page" },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  // {
  //   id: ncNanoId(),
  //   href: "/",
  //   name: "Home",
  //   protected: true,
  //   // type: "dropdown",
  //   // children: demoChildMenus,
  //   isNew: true,
  // },

  // {
  //   id: ncNanoId(),
  //   href: "/quotes",
  //   name: "Quotes",
  //   protected: true,
  //   // type: "dropdown",
  //   isNew: true,
  //   // children: [
  //   //   {
  //   //     id: ncNanoId(),
  //   //     href: "/listing-stay",
  //   //     name: "Stay listing",
  //   //     type: "dropdown",
  //   //     children: [
  //   //       { id: ncNanoId(), href: "/listing-stay", name: "Stay page" },
  //   //       {
  //   //         id: ncNanoId(),
  //   //         href: "/listing-stay-map",
  //   //         name: "Stay page (map)",
  //   //       },
  //   //       { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay Detail" },
  //   //     ],
  //   //   },

  //   //   {
  //   //     id: ncNanoId(),
  //   //     href: "/listing-experiences",
  //   //     name: "Experiences listing",
  //   //     type: "dropdown",
  //   //     children: [
  //   //       {
  //   //         id: ncNanoId(),
  //   //         href: "/listing-experiences",
  //   //         name: "Experiences page",
  //   //       },
  //   //       {
  //   //         id: ncNanoId(),
  //   //         href: "/listing-experiences-map",
  //   //         name: "Experiences page (map)",
  //   //       },
  //   //       {
  //   //         id: ncNanoId(),
  //   //         href: "/listing-experiences-detail",
  //   //         name: "Experiences Detail",
  //   //       },
  //   //     ],
  //   //   },

  //   //   //
  //   //   {
  //   //     id: ncNanoId(),
  //   //     href: "/listing-car",
  //   //     name: "Cars listing",
  //   //     type: "dropdown",
  //   //     children: [
  //   //       { id: ncNanoId(), href: "/listing-car", name: "Cars page" },
  //   //       { id: ncNanoId(), href: "/listing-car-map", name: "Cars page (map)" },
  //   //       { id: ncNanoId(), href: "/listing-car-detail", name: "Car Detail" },
  //   //     ],
  //   //   },

  //   //   //
  //   //   {
  //   //     id: ncNanoId(),
  //   //     href: "/listing-real-estate",
  //   //     name: "Real Estate Listings",
  //   //     isNew: true,
  //   //     type: "dropdown",
  //   //     children: [
  //   //       {
  //   //         id: ncNanoId(),
  //   //         href: "/listing-real-estate",
  //   //         name: "Real Estate Listings",
  //   //         isNew: true,
  //   //       },
  //   //       {
  //   //         id: ncNanoId(),
  //   //         href: "/listing-real-estate-map",
  //   //         name: "Real Estate Maps",
  //   //         isNew: true,
  //   //       },
  //   //     ],
  //   //   },
  //   //   //
  //   //   {
  //   //     id: ncNanoId(),
  //   //     href: "/listing-flights",
  //   //     name: "Flights listing",
  //   //     isNew: true,
  //   //   },
  //   // ],
  // },
  // {
  //   id: ncNanoId(),
  //   href: "#",
  //   name: "Warehouse & Distribution",
  //   protected: true,
  //   // type: "dropdown",
  //   // children: otherPageChildMenus,
  // },
  {
    id: ncNanoId(),
    href: "/custom-clearance",
    name: "Custom Clearance",
    protected: true,
    // type: "dropdown",
    // children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Cargo Insuarance",
    protected: true,
    // type: "dropdown",
    // children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/warehousing",
    name: "Warehousing",
    // type: "dropdown",
    protected: true,
    // children: templatesChildrenMenus,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Finances",
    type: "dropdown",
    protected: true,
    children: financeChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: "#",
    name: "Tools",
    type: "dropdown",
    protected: true,
    children: templatesChildrenMenus,
  },
    {
    id: ncNanoId(),
    href: "https://calendly.com/masoodahmed-1",
    targetBlank: true,
    protected: true,
    name: "Talk to us",
    className: "text-white bg-neutral-700"
  },
  
  // {
  //   id: ncNanoId(),
  //   href: "/user/bookings",
  //   name: "Dashboard",
  //   protected: authLogin,
  //   // type: "dropdown",
  //   // children: otherPageChildMenus,
  // },
  // {
  //   id: ncNanoId(),
  //   href: "/user/bookings",
  //   name: "Warehouse & Distribution",
  //   protected: authLogin,
  //   // type: "dropdown",
  //   // children: otherPageChildMenus,
  // },

  // {
  //   id: ncNanoId(),
  //   href: "/about",
  //   name: "About Us",
  //   protected: true,
  //   // type: "dropdown",
  //   // children: otherPageChildMenus,
  // },
  // {
  //   id: ncNanoId(),
  //   href: "https://transpost.co/blog/",
  //   targetBlank: true,
  //   protected: true,
  //   name: "Blog",
  // },
  // {
  //   id: ncNanoId(),
  //   href: "https://transpost.co/blog/",
  //   targetBlank: true,
  //   protected: true,

  //   name: "Blog",
  // },
];
