
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TypingArea from "./TypingArea";

export default function Typing() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Typing Services" page="Services" />
          <TypingArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
