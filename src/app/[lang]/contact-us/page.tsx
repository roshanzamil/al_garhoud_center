
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ContactArea from "@/components/contact-us/ContactArea";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function ContactUsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ContactArea dictionary={dictionary.contact_us_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
