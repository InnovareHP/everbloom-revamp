import { Menu, X } from "lucide-react";
import React from "react";

const menuItems = [
  { name: "Our Care", href: "#our-care" },
  { name: "Amenities", href: "#amenities" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Promo", href: "#promo" },
  { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/90 block z-20 w-full border-b border-primary/10 backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="/image/everbloom-logo.png"
                alt="EverBloom"
                className="w-32 h-12"
              />
            </div>

            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary block duration-150 font-medium"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`${
                menuState ? "opacity-100 visible" : "opacity-0 invisible"
              } lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-primary/10 transition-all duration-300`}
            >
              <div className="px-6 py-4">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary block duration-150 font-medium py-2"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
