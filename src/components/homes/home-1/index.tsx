import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeOne from "./HeroHomeOne";
import FeaturesHomeOne from "./FeaturesHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import FaqHomeOne from "./FaqHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import QuoteHomeOne from "./QuoteHomeOne";

export default function HomeOne({ dictionary, lang }: { dictionary: any, lang: string }) {
	return (
		<Wrapper>
			<HeaderOne dictionary={dictionary} lang={lang} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
          <HeroHomeOne dictionary={dictionary.hero} lang={lang} />
          <FeaturesHomeOne />
          <AboutHomeOne />
          <PricingHomeOne />
          <QuoteHomeOne />
          <FaqHomeOne />
          <TestimonialHomeOne />
          <FooterOne />
        </div>
			</div>
		</Wrapper>
	);
}
