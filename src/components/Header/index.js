import {Link, withRouter} from 'react-router-dom'
import {NavHeader, WebsiteLogo} from './styledComponents'

const Header = () => (
  <NavHeader>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavHeader>
)

export default withRouter(Header)
