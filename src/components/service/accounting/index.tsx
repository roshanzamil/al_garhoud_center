
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AccountingArea from "./AccountingArea";

export default function Accounting() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Accounting Services" page="Services" />
          <AccountingArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
