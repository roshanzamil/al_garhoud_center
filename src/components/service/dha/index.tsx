
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import DhaArea from "./DhaArea";

export default function Dha() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Dubai Health - DHA" page="Services" />
          <DhaArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
