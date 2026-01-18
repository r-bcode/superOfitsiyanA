'use client';
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import {  Home, DollarSign, Info, MessageCircle } from "lucide-react";
import LanguageSwitcher from "../leangugeS";
import { useTranslations } from "next-intl";
import RBLogo from "../logo";


export default function NavbarB() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");


  const handleSmoothScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // Navbar balandligi (tepada to‘sib qolmasligi uchun)
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsMenuOpen(false); // mobil menyuni yopamiz
    }
  };

  console.log("isMenuOpen:", isMenuOpen);
  

  return (
    <>
   <Navbar
    isBordered
    disableAnimation 
    maxWidth="xl"
    className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r  bg-gray-900/70 backdrop-blur-md 
                border-t border-gray-700/50 shadow-lg"
  >
      {/* Brand */}
      <NavbarBrand className="flex items-center gap-2 cursor-pointer" onClick={() => handleSmoothScroll("#home")}>
       <RBLogo/>
        <p className="font-bold text-lg text-green-400">Super Ofitsiyant</p>
      </NavbarBrand>

      {/* Desktop menu */}
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#home")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("basis")}
          </button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#pricing")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("prices")}
          </button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("about")}
          </button>
        </NavbarItem>
         {/* <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#demo")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("demo")}
          </button>
        </NavbarItem> */}

           <NavbarItem>
          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="text-gray-300 hover:text-green-400 transition-all"
          >
            {t("contact")}
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop language switch */}
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile burger icon */}
      <div className="md:hidden flex items-center gap-2">
        <LanguageSwitcher />

      </div>
   </Navbar>
      {/* Mobile dropdown */}
{/* Bottom Navigation (faqat mobil uchun) */}
<div className="fixed bottom-0 left-0 w-full 
                bg-gray-900/70 backdrop-blur-md 
                border-t border-gray-700/50 
                flex justify-around items-center py-2 
                md:hidden z-50 shadow-inner">
  <button onClick={() => handleSmoothScroll("#home")} className="flex flex-col items-center text-gray-300 hover:text-green-400">
    <Home size={22} />
    <span className="text-xs">{t("basis")}</span>
  </button>
  <button onClick={() => handleSmoothScroll("#pricing")} className="flex flex-col items-center text-gray-300 hover:text-green-400">
    <DollarSign size={22} />
    <span className="text-xs">{t("prices")}</span>
  </button>
  <button onClick={() => handleSmoothScroll("#about")} className="flex flex-col items-center text-gray-300 hover:text-green-400">
    <Info size={22} />
    <span className="text-xs">{t("about")}</span>
  </button>
  <button onClick={() => handleSmoothScroll("#contact")} className="flex flex-col items-center text-gray-300 hover:text-green-400">
    <MessageCircle size={22} />
    <span className="text-xs">{t("contact")}</span>
  </button>
</div>

 
    </>
  );
}
