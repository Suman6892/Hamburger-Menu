import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="NavHeader">
    <div className="NavContent">
      <Link to="/">
        <img
          className="WebsiteLogo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="HamburgerIconButton"
            data-testid="hamburgerIconButton"
            type="button"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="ModalContainer">
            <button
              className="CloseButton"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="NavLinksList">
              <li className="NavLinkItem">
                <Link className="NavLink" to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="NavLinkContent">Home</p>
                </Link>
              </li>
              <li className="NavLinkItem">
                <Link className="NavLink" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="NavLinkContent">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
