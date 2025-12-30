"use client";

import { Fade } from "react-awesome-reveal";
import {  Github, Send, Briefcase } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#0b0b0d] text-gray-300 py-10 px-6 md:px-20 border-t border-gray-800">
      <Fade direction="up" triggerOnce>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Chap tomon — loyiha haqida qisqa info */}
          <div>
            <h3 className="text-xl font-bold text-green-500 mb-2">
              Super Ofitsiyant
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              {t("desc")}
            </p>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex items-center justify-center gap-5">
            {/* Telegram */}
            <a
              href="https://t.me/rb_code"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Telegram"
            >
              <Send size={22} />
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~01fbeaec979400acd1?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Upwork"
            >
              <Briefcase size={22} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/r-bcode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            {/* Instagram */}
            {/* <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a> */}

            {/* Facebook */}
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a> */}
          </div>
        </div>

        {/* Pastki qator */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Super Ofitsiyant. {t("rights")}</p>
          <p className="mt-2">
            {t("developedBy")}{" "}
            <Link
              href="https://butcher4.uz"
              target="_blank"
              className="text-green-500 font-semibold hover:underline"
            >
              Rahmatillo
            </Link>{" "}
            💻
          </p>
        </div>
      </Fade>
    </footer>
  );
}
