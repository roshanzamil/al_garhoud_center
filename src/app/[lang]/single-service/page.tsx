
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServiceDetailsArea from "@/components/single-service/ServiceDetailsArea";
import VideoHomeOne from "@/components/homes/home-1/VideoHomeOne";
import ServiceInfo from "@/components/single-service/ServiceInfo";
import AboutCta from "@/components/about-us/AboutCta";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function SingleServicePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Services Details" page="Services Details" />
          <ServiceDetailsArea />
          <VideoHomeOne />
          <ServiceInfo />
          <AboutCta />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
