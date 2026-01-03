
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServiceArea from "./ServiceArea";
import FaqHomeOne from "../homes/home-1/FaqHomeOne";
import TestimonialHomeOne from "../homes/home-1/TestimonialHomeOne";
import ServiceTabs from "./ServiceTabs";



export default function Service() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          <ServiceArea />
          <ServiceTabs />
          <FaqHomeOne />
          <TestimonialHomeOne />           
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
