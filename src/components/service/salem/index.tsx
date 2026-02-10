
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SalemArea from "./SalemArea";

export default function Salem() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Salem" page="Services" />
          <SalemArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
