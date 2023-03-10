import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import SocialsList from "shared/SocialsList/SocialsList";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Solutions",
    menus: [
      { href: "/", label: "Ocean Shipments" },
      { href: "#", label: "Cargo Insurance" },
      { href: "#", label: "Trade Finance" },
      { href: "#", label: "Freight Finance" },
    ],
  },
  {
    id: "1",
    title: "Quick Link",
    menus: [
      { href: "/about", label: "About us" },
      { href: "#", label: "Cargo Insurance" },
      { href: "#", label: "Trade Finance" },
      { href: "#", label: "Freight Finance" },
    ],
  },
  {
    id: "2",
    title: "Company",
    menus: [
      { href: "https://transpost.co/", label: "Blog" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Copyright" },
      { href: "#", label: "Help" },
    ],
  },
  {
    id: "4",
    title: "Resources",
    menus: [
      { href: "/contact", label: "Contact us" },
      { href: "#", label: "Terms of service" },
      { href: "#", label: "Privacy Policy" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 inline-block space-y-4">
          {menu.menus.map((item, index) => (
            <li className="hover:translate-x-2 delay-150 transition-all ease-in-out" key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black  dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-24 lg:py-32 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            {/* <SocialsList className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" /> */}
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
