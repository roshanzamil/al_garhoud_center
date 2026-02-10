
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import NotaryArea from "./NotaryArea";

export default function Notary() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <NotaryArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
