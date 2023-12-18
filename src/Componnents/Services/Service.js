import { useState } from 'react'
import './Service.css'

const Service = () => {
    const [togglState, setToggleState] = useState(0);

    const toggleTable = (index)=>{
        setToggleState(index);
    }
    return (
        <section className="Projects section">
            <h2 className='section__title'>
                Services
            </h2>
            <span className="section__subtitle">What i offer</span>

            <div className='row services__container container'>

                <div className="col-md-4 services__content">

                    <div>
                        <i class="uil uil-web-grid services__icon"></i>
                        <h3 className='services__title'>web <br /> development</h3>
                        <span className='services__button' onClick={()=> toggleTable(1)}>
                            View More <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>

                    <div className={togglState === 1 ? "services__modal active-mode " : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTable(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Web development</h3>
                            <p className='services__modal-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, odio?</p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                         Web page development
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>


                <div className="col-md-4 services__content">

                    <div class="info">
                        <i class="uil uil-edit services__icon"></i>
                        <h3 className='services__title'>web <br /> Designer</h3>
                      
                        <span className='services__button'  onClick={()=> toggleTable(3)}>
                            View More <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>

                    <div className={togglState === 3 ? "services__modal active-mode " : "services__modal"}>
                        <div className='services__modal-content'>
                            <i  onClick={() => toggleTable(0)}  className="uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Visual Designer</h3>
                            <p className='services__modal-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, odio?</p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I creat ux element interface
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design and mockups
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Service