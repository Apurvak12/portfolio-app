
import { Container,Button,Image} from "react-bootstrap";
import hero from '../images/2022_ani_cartoon_27-removebg-preview.png'
const Hero=()=>{
    return(
        <>
            <Container className="container1"> 
            <div className="text-white content">
                <h1>Hi, I'm Apurva</h1>
                <p>I am full stack Developer</p>
                <Button variant="primary">
                <a href="mailto:myemail@gmail.com" className="text-white">Contact me</a>
                </Button>{' '}
                 </div>
                <img src={hero}  className="hero1 "/>
           
           </Container>
         
        </>
    );

}
export default Hero;