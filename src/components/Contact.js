import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name" className="white-text">Nombre</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email" className="white-text">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message" className="white-text">Mensaje</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Enviar" className="white-text" /></li>
                        <li><input type="reset" value="Empezar" className="white-text"/></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3 className="white-text">Email</h3>
                        <a href="#" className="white-text">juansainz61@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3 className="white-text">Teléfono</h3>
                        <span className="white-text">(+34) 645 09 40 19</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3 className="white-text">Ciudad</h3>
                        <span className="white-text">Cádiz, España</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
