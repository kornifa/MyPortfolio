import './Qualification.css'
import { useState } from 'react'

const Qualification = () => {
    const [togglState, setToggleState] = useState(1);

    const toggleTable = (index) => {
        setToggleState(index);
    }
    return (
        <section className='section qualification'>
            <h2 className='section__title'>
                Qualification
            </h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTable(1)} className={togglState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div onClick={() => toggleTable(2)} className={togglState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">


                    <div className={togglState == 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Diplôme en cours de préparation d'un technicien spécialisé en développement digital </h3>
                                <span className="qualification__subtitle"><i class="uil uil-map-marker-alt"></i> Institut Spécialisé de Technologie Appliquée(ISTA) Marrakech</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022-Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>



                        <div className="qualification__data">
                            <div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Baccalauréat en science physique</h3>
                                <span className="qualification__subtitle"> <i class="uil uil-map-marker-alt"></i> Lycée Tasoultante Marrakech</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021-2022
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={togglState == 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">SOCIETE ATAM (Stage)</h3>
                                <span>
                                    Lors de mon stage chez SOCIETE ATAM, j'ai eu l'occasion de développer mes compétences en développement web et en gestion des systèmes informatiques.
                                </span>

                                <span className="qualification__subtitle"><i class="uil uil-map-marker-alt"></i> Marrakech</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>18 juillet 2023 - <br /> 23 août 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>



                        <div className="qualification__data">
                            <div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Cértificat de Association Tawassol pour le Développement de la Technologie (ATDTec)
                                </h3>
                                <span className="qualification__subtitle"> <i class="uil uil-map-marker-alt"></i> Marrakech </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Qualification;