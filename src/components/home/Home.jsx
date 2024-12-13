import "./home.css"
import Social from './Social'
import Data from "./Data"
import ScrollDown from "./ScrollDown"

const Home = ({ darkMode }) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img">
            <img src="src/assets/euIa.png" alt="Imagem 1" className={`img_pessoal ${darkMode ? "img_Light" : "img_Dark"}`}/>
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home