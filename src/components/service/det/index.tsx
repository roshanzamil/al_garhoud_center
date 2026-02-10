
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import DetArea from "./DetArea";

export default function Det() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="DET" page="Services" />
          <DetArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
