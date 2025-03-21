import "./Hero.css"
import abc from "../../assets/Vectarytexture.png"
function Hero() {
    return (
        <div className="hero">
            <div className="left">
                <h1>Create Desgin that is <hr /> out-of-this world.</h1>
                <p className="para">Get access to unlimited courses and design <br/> resources to shoot your design career to the <br/> moon.</p>
                <button className="strt">Get Started</button>
            </div>
            <div className="Right">
                <img src={abc} alt="cartoon" width="60%" ></img>
            </div>

        </div>
    )
}
export default Hero