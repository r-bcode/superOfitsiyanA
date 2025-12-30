"use client";
import { Fade } from "react-awesome-reveal";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="bg-[#0b0b0d] py-20 px-6 md:px-20 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Sarlavha */}
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl font-bold mb-4 text-[#4f9eff]">
            {t("title")}
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            {t("desc")}
            <span className="block font-semibold mt-3 text-green-400">
              {t("trial")}
            </span>
          </p>
        </Fade>

        {/* Kontakt tugmalari */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {/* Telegram */}
            <a
              href="https://t.me/rb_code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-[#111113] border border-[#1f1f24] hover:border-[#4f9eff] rounded-2xl py-6 transition-all hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(79,158,255,0.3)]"
            >
              <Send className="text-[#4f9eff] w-7 h-7 mb-2" />
              <p className="text-sm text-gray-400">Telegram</p>
              <p className="font-semibold">@rb_code</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/998959846030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-[#111113] border border-[#1f1f24] hover:border-[#4f9eff] rounded-2xl py-6 transition-all hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(79,158,255,0.3)]"
            >
              <MessageCircle className="text-[#4f9eff] w-7 h-7 mb-2" />
              <p className="text-sm text-gray-400">WhatsApp</p>
              <p className="font-semibold">+998 95 984 60 30</p>
            </a>

            {/* Telefon */}
            <a
              href="tel:+998959846030"
              className="flex flex-col items-center justify-center bg-[#111113] border border-[#1f1f24] hover:border-[#4f9eff] rounded-2xl py-6 transition-all hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(79,158,255,0.3)]"
            >
              <Phone className="text-[#4f9eff] w-7 h-7 mb-2" />
              <p className="text-sm text-gray-400">{t("phone")}</p>
              <p className="font-semibold">+998 95 984 60 30</p>
            </a>

            {/* Email */}
            <a
              href="mailto:rsayfiddinov571@mail.ru"
              className="flex flex-col items-center justify-center bg-[#111113] border border-[#1f1f24] hover:border-[#4f9eff] rounded-2xl py-6 transition-all hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(79,158,255,0.3)]"
            >
              <Mail className="text-[#4f9eff] w-7 h-7 mb-2" />
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold">rsayfiddinov571@mail.ru</p>
            </a>
          </div>
        </Fade>

        {/* Pastki matn */}
        <Fade direction="up" delay={400} triggerOnce>
          <p className="text-gray-400 mt-12 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("footer")}
          </p>
        </Fade>
      </div>
    </section>
  );
}
