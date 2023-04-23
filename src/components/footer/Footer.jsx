import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Evert</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/evert-barros-327b43161/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://github.com/EvertBarrosT" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>

                    <a href="https://www.instagram.com/evertbarros/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Evert Barros. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer