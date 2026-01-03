
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper' 
import TeamArea from './TeamArea'

export default function Team() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <TeamArea />           
          <FooterOne />         
        </div>
      </div>
    </Wrapper>
  )
}
