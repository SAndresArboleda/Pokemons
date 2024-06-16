import { Link } from "react-router-dom";
import Video from './../../assets/Landing.mp4'
import './landing.css'



const LandingPage = () => {
    return (
        <section id="landing" className="contLanding">
            <div className="land">
                <div className="imagen">
                    <img src="src\assets\pokémon-removebg-preview.png" alt="" />
                </div>
                <div className="video">
                    <video muted controls autoPlay loop id='bgVideo'>
                        <source src={Video} type='video/mp4' />
                    </video>
                <div className="boton">
                    <Link to='/home' className="button" ><button className="botonIngresar">INGRESAR</button></Link>
                <div className="landTexto">
                    Simón Andrés Arboleda Gil
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;
