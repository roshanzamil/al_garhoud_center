import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import GalleryArea from "./GalleryArea";

export default function Gallery() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Our Gallery" page="Gallery" />
          <GalleryArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
