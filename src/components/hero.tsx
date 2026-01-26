"use client";
import { motion } from "framer-motion";
import { Check, Phone, Mail, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Hero() {
  const t = useTranslations("Hero");
  const [showContacts, setShowContacts] = useState(false);

  const handleSmoothScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/998959846030?text=Salom,%20men%20Super%20Ofitsiant%20haqida%20qiziqyapman!%20",
      "_blank"
    );
  };

  const handleTelegram = () => {
    window.open("https://t.me/rb_code", "_blank");
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:rsayfiddinov571mail.ru?subject=Super%20Ofitsiant&body=Salom,%20men%20loyihani%20o‘rnatmoqchiman!";
  };

  const handleCall = () => {
    window.location.href = "tel:+998959846030";
  };

  const features = [
    t("feature1"),
    t("feature3"),
    t("feature6"),
    t("feature8"),
    t("feature2"),
  ];

  return (
    <section className="min-h-[90vh] bg-[#0b0b0d] mt-7 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 overflow-hidden">
      {/* Chap qism */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl space-y-6 mt-10 md:mt-0"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-[#ff4242]">SO</span>{" "}
          <span className="text-[#c2c2c2]">{t("businessPartner")}</span>
        </h1>

        <p className="text-lg text-gray-400">
          <span className="text-[#4f9eff] font-semibold">{t("priceFrom")}</span>{" "}
          {t("description")}
        </p>

        {/* Afzalliklar */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
{features.map((item, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.05 }}
    className="flex items-center gap-2 text-gray-300 "
    id=""
  >
    {/* Endi hamma uchun chek belgisi */}
    <Check size={18} className="text-[#4f9eff]" />

    <span className="flex items-center gap-2">
      {item}
    </span>
  </motion.div>
))}

</div>



        {/* Tugmalar */}
<div className="flex flex-wrap gap-4 pt-6">
  {!showContacts ? (
    <>
      <motion.button
        onClick={() => setShowContacts(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-[#4f9eff] rounded-2xl text-white font-semibold shadow-lg hover:bg-[#62aaff] transition-all"
      >
        {t("install")}
      </motion.button>

      <motion.button
        onClick={() => handleSmoothScroll("#about")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 border border-[#4f9eff] rounded-2xl text-[#4f9eff] font-semibold hover:bg-[#1b1b1f] transition-all"
      >
        {t("whySO")}
      </motion.button>

      {/* 🆕 Demo tugmasi */}
      <motion.button
        onClick={() => handleSmoothScroll("#demo")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 border border-[#10b981] rounded-2xl text-[#10b981] font-semibold hover:bg-[#1b1b1f] transition-all"
      >
        🎯 {t("demo")}
      </motion.button>
    </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 rounded-xl hover:bg-green-600 transition-all"
              >
                <MessageCircle size={18} /> WhatsApp
              </button>

              <button
                onClick={handleTelegram}
                className="flex items-center gap-2 px-4 py-2 bg-[#24A1DE] rounded-xl hover:bg-[#3AB0F7] transition-all"
              >
                <Send size={18} /> Telegram
              </button>

              <button
                onClick={handleEmail}
                className="flex items-center gap-2 px-4 py-2 bg-[#f59e0b] rounded-xl hover:bg-[#fbbf24] transition-all"
              >
                <Mail size={18} /> Email
              </button>

              <button
                onClick={handleCall}
                className="flex items-center gap-2 px-4 py-2 bg-[#10b981] rounded-xl hover:bg-[#34d399] transition-all"
              >
                <Phone size={18} /> Call
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* O‘ng qism - Rasm */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Image
          src="/compyuter.png"
          alt="Super Ofitsiant ekran"
          width={600}
          height={400}
          className="rounded-3xl shadow-[0_0_40px_rgba(79,158,255,0.3)] border border-[#1c1c22]"
        />
      </motion.div>
    </section>
  );
}
