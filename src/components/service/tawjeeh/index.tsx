
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TawjeehArea from "./TawjeehArea";

export default function Tawjeeh() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Taw-Jeeh Services" page="Services" />
          <TawjeehArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
