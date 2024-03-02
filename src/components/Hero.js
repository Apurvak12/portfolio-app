
import { Container,Button,Image} from "react-bootstrap";
import hero from '../images/2022_ani_cartoon_27-removebg-preview.png'
const Hero=()=>{
    return(
        <>
            <Container className="container1"> 
            <div className="text-white content">
                <h1>Hi, I'm Apurva</h1>
                <p>I am a full-stack developer passionate about crafting dynamic and user-centric web applications. Welcome to my portfolio, where I showcase my journey, skills, and projects.</p>
                <Button >
                <a href="mailto:kulkarniapurva132@gmail.com" className="text-white btn">Contact me</a>
                </Button>{' '}
                 </div>
                <img src={hero}  className="hero1 "/>
           
           </Container>
         
        </>
    );

}
export default Hero;