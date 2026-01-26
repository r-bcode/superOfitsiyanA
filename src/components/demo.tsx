"use client";
import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DemoSection() {
      const t = useTranslations("Demo");
  return (
    <section
      id="demo"
      className="min-h-[80vh] bg-[#0b0b0d] text-white flex flex-col items-center justify-center px-6 py-16 md:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        🎯 <span className="text-[#4f9eff]">{t('demo')}</span> {t('try')}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Admin panel */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#16161a] p-6 rounded-2xl shadow-lg border border-[#1f1f25]"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#4f9eff]">
            🧑‍💼 {t("adminp")}
          </h3>
          <p className="text-gray-300 mb-2">
            <strong>{t('link')}:</strong>{" "}
            <a
              href="https://so1a.plow.uz/"
              target="_blank"
              className="text-[#4f9eff] underline inline-flex items-center gap-1"
            >
              https://so1a.plow.uz/ <ExternalLink size={16} />
            </a>
          </p>
          <p className="text-gray-300">
            <strong>Login:</strong> Admin <br />
            <strong>Password:</strong> 571632
          </p>
        </motion.div>

        {/* Ofisiant panel */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#16161a] p-6 rounded-2xl shadow-lg border border-[#1f1f25]"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#4f9eff]">
            👨‍🍳 {t('ofisiant')}
          </h3>
          <p className="text-gray-300 mb-2">
            <strong>{t('link')}</strong>{" "}
            <a
              href="https://so.plow.uz/"
              target="_blank"
              className="text-[#4f9eff] underline inline-flex items-center gap-1"
            >
              https://so.plow.uz/ <ExternalLink size={16} />
            </a>
          </p>
          <p className="text-gray-300">
         
            <strong>Password:</strong> 4444
          </p>
        </motion.div>
      </div>

      {/* Ogohlantirish */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 text-yellow-400 bg-[#1a1a1d] p-4 rounded-xl max-w-3xl text-center flex items-center gap-3 border border-yellow-600/30"
      >
        <AlertTriangle size={24} />
        <p>
         {t('warning')}
        </p>
      </motion.div> */}
    </section>
  );
}
