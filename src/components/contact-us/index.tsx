
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ContactArea from "./ContactArea";
import GoogleMap from "./GoogleMap";

 

export default function Contactus() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ContactArea />
          <GoogleMap />          
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
