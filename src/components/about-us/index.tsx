import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import SolutionsArea from "./SolutionsArea";
import OurWorkArea from "./OurWorkArea";
import AboutCta from "./AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
import DividerArea from "@/common/DividerArea";

 

export default function Aboutus() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="About Us" page="About Us" />
          <AboutArea />
          <AboutCounter />
          <DividerArea />
          <OurWorkArea />
          <SolutionsArea />
          <AboutCta />
          <FooterOne />         
        </div>
      </div>
    </Wrapper>
  )
}
