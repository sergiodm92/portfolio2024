import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 w-full table relative">
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">
            {t("Freelance.title")}
          </h3>

          <p className="text-white/80 max-w-xl mx-auto text-[15px]">
            {t("Freelance.description")}
          </p>

          <div className="relative mt-8">
            <Link
              href="/#contact"
              className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md"
            >
              {t("Freelance.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
