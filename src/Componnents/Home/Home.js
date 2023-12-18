import './Home.css'
import Social from './Social'
import photo from '../../assets/photo.png'

const Home = () => (
    <section className="home section" id="home">
        <div className='row'>
            <div className='col-md-1'>
                <Social />
            </div>
            <div className='col-md-4 div__img'>
                <img src={photo} alt="" className='img'/>
            </div>
            <div className='col-md-7'>
                <h1 className='home__title'>
                    Younes Kornifa 👋
                </h1>
                <h3 className='home__subtitle'>
                    Full Stack Web Developer, <br/>Freelancer
                </h3>
                <p className='home__description'>Hi, I'm Younes KORNIFA 👋. Apassionate Full Stack Web Developer based in Marrakech.Maroc</p>
                <a href="#contact" className="button button--flex">
                    Sey Hello  <i class="uil uil-message"></i>
                </a>
            </div>
            
        </div>
    </section>
)

export default Home