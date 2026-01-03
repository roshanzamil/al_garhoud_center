
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import MilestonesArea from "./MilestonesArea";

export default function Milestones() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <MilestonesArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
