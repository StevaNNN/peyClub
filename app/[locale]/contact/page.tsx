import { resolveLocale } from "@/app/lib/i18n/locale";
import en from "@/app/lib/i18n/en/en";
import sr from "@/app/lib/i18n/sr/sr";
import Text from "@/app/components/Text";
import ContactForm from "@/app/[locale]/contact/ContactForm";

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = resolveLocale(localeParam);
  const t = locale === "sr" ? sr : en;

  return (
    <section className="v-box">
      <div className="section connect-section">
        <div className="connect-section-info v-box">
          <Text htmlElement="h1" fontSize="4xl" fontThickness="bold">
            {t.contactPage.title}
          </Text>
          <Text>{t.contactPage.paragraph}</Text>
        </div>
        <ContactForm t={t} />
      </div>
      <div className="white-space" />
    </section>
  );
}
