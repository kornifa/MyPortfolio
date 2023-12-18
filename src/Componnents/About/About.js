import React from 'react'
import photo from '../../assets/photo.png'
import Info from './Info'
import CV from '../../assets/CV.pdf'
import './About.css';
const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section__title'>
                About Me
            </h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container row">
                <div className='col-md-6'>
                    <img src={photo} alt="" className='about__img'/>
                </div>
                <div className='col-md-6 about__data'>
                    <Info />
                    <p className='about__description'>
                    Actuellement en cours de préparation d'un diplôme de Technicien Spécialisé en Développement Digital, je suis passionné par les technologies informatiques et le développement web. Mon objectif est de mettre en pratique mes compétences et de contribuer à des projets innovants dans le domaine du développement digital.
                    </p>
                    <a download="" href={CV} className='button button--flex'>Download CV <i class='bx bxs-cloud-download bx-tada'  ></i></a>
                </div>
            </div>
        </section>
    )
}

export default About