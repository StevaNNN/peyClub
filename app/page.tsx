import "./styles/main.scss";

import { Suspense } from "react";
import Header from "@/app/components/Header";
import { resolveLocale } from "@/app/lib/i18n/locale";
import en from "@/app/lib/i18n/en/en";
import sr from "@/app/lib/i18n/sr/sr";
import HeroSection from "@/app/sections/hero/HeroSection";
import WhatSection from "@/app/sections/what/WhatSection";
import AISection from "@/app/sections/ai/AISection";
import WhoSection from "@/app/sections/who/WhoSection";
import CustomerSection from "@/app/sections/customer/CustomerSection";
import EstablishmentSection from "@/app/sections/establishment/EstablishmentSection";
import { CounterSection } from "@/app/sections/counter/CounterSection";
import CapabilitiesSection from "@/app/sections/capatabilities/CapatabilitiesSection";
import FooterSection from "@/app/sections/footer/FooterSection";

export default function Home() {
  const locale = resolveLocale();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Suspense>
        <Header locale={locale} t={t} />
      </Suspense>
      <main className="v-box">
        <HeroSection t={t} />
        <WhatSection t={t} />
        <AISection t={t} />
        <WhoSection t={t} />
        <CustomerSection t={t} />
        <EstablishmentSection t={t} />
        <CounterSection t={t} />
        <CapabilitiesSection t={t} />
      </main>
      <FooterSection t={t} />
    </>
  );
}
