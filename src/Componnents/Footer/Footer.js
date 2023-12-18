import './Footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__container container">
                <h1 className='footer__title'><span>K</span>ornifa</h1>
                <ul className='footer_list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#Portfolio" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className='footer__link'>testimonials</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://web.facebook.com/youness.mk.543" target="_blank" className='icon_footer'>
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/youneskornifa/" target="_blank" className='icon_footer'>
                        <i className="bx bxl-instagram "></i>
                    </a>

                    <a href="#" target="_blank" className='icon_footer'>
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className='footer__copy'>&#169; Crypticalcoder. All right reserved</span>
            </div>
        </section>
    )
}

export default Footer