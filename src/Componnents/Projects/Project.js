import './Project.css';
import Project1 from '../../assets/projet1.png'
import Project2 from '../../assets/portfolio (1).png'
import Project3 from '../../assets/projet2.png'

const Project = () => {
    return (
        <section className='Projects section'>
            <h2 className='section__title'>
                Projects
            </h2>
            <span className="section__subtitle">My Projects</span>
            <div className="row">
                <div className="col-md-4">
                    <div class="projects-img">
                        <img src={Project1} alt="" className='aaa'/>
                        <div class="layer">
                            <h3>social media app</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim eligendi corporis, pariatur assumenda aliquid molestias magni sint quidem excepturi?
                            </p>
                            <a href="https://www.google.com/" target="_blank"><i class='bx bx-share bx-flip-horizontal' ></i></a>
                        </div>
                    </div>

                </div>


                <div className="col-md-4 k">
                    <div class="projects-img">
                        <img src={Project2} alt="" />
                        <div class="layer">
                            <h3>social media app</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim eligendi corporis, pariatur assumenda aliquid molestias magni sint quidem excepturi?
                            </p>
                            <a href="http://kornifa.kesug.com/" target="_blank"><i class='bx bx-share bx-flip-horizontal' ></i></a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div class="projects-img">
                        <img src={Project3} alt="" />
                        <div class="layer">
                            <h3>social media app</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim eligendi corporis, pariatur assumenda aliquid molestias magni sint quidem excepturi?
                            </p>
                            <a href="http://cyborg.wuaze.com/" target="_blank">
                                <i class='bx bx-share bx-flip-horizontal' ></i></a>
                        </div>
                    </div>

                </div>

            </div>
            
            <a href="#" className='btn'>See More</a>

        </section>
    )
}

export default Project