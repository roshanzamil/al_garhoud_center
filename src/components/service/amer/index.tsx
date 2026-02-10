
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AmerArea from "./AmerArea";

export default function Amer() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Amer" page="Services" />
          <AmerArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
