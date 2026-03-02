import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import BlogArea from "./BlogArea";

 

export default function Blog({ dictionary, lang }: { dictionary: any, lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Our Blog" page="Our Blog" />
          <BlogArea />          
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
