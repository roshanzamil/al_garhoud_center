
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TawjeehArea from "@/components/service/tawjeeh/TawjeehArea";

export default function Tawjeeh() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: "120px" }}>
          <TawjeehArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
