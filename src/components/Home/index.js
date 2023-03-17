import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="HomeContainer">
    <Header />
    <div className="HomeImageContainer">
      <img
        className="MobileHomeImage"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="DesktopHomeImage"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
