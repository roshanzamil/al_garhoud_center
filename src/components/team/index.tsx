
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper' 
import LeadershipArea from './TeamArea'
import Breacrumb from '@/common/Breacrumb'

export default function Leadership() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <Breacrumb title="Leadership" page="Leadership" />
          <LeadershipArea />           
          <FooterOne />         
        </div>
      </div>
    </Wrapper>
  )
}
