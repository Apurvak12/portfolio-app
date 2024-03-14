import { Container} from "react-bootstrap";
import laptop from '../images/2022_ani_cartoon_28-removebg-preview.png';
import cursor from '../images/cursor_11167523.png';
import sericon from '../images/money-bills_7384163.png'
const About=()=>{
    return(
        <>
        
            <Container className="container2">
              <h2 className="text-white">About</h2>
              <div className="content1">
            <img src={laptop} className="aboutImg" />
            <ul className="aboutItems">
              <li className="aboutItem">
             <img src={cursor} height={40} width={40} className="aimg"/>
             
              <div>
                <h3 className="text-white">Frontend Developer</h3>
                <p className="text-white">I'm a new frontend developer who loves making websites look awesome and work smoothly.</p>
              </div>
               </li>
               <li className="aboutItem">
             <img src={sericon} height={40} width={40} className="aimg"/>
             
              <div className="itemText">
                <h3 className="text-white">Backend Developer</h3>
                <p className="text-white">I'm a new backend developer excited about building strong and reliable computer systems.</p>
              </div>
               </li>
            </ul>
            </div>
         </Container> 
        </>
    );

}
export default About;
