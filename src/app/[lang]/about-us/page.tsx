
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutArea from "@/components/about-us/AboutArea";
import AboutCounter from "@/components/about-us/AboutCounter";
import SolutionsArea from "@/components/about-us/SolutionsArea";
import OurWorkArea from "@/components/about-us/OurWorkArea";
import AboutCta from "@/components/about-us/AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
import DividerArea from "@/common/DividerArea";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function AboutUsPage({
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
          <AboutArea />
          <AboutCounter />
          <DividerArea className="divider-about-us" dividerClass="divider2" />
          <OurWorkArea />
          <SolutionsArea />
          <AboutCta dictionary={dictionary.about_cta} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
