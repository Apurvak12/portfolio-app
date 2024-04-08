
import {Container} from 'react-bootstrap';

import email from '../../images/emailIcon.png';
import linkedIn from '../../images/linkedinIcon.png';
import github from '../../images/githubIcon.png';
import './Contact.css';
const Footer=()=>{
    return(
     
        <footer className='container3' id='Contact'>
            {/* <div className='footer'> */}
             <div >
            <h1 className='text-white'>Contact Me</h1>
            <p className='text-white'>Let's work together</p>
              </div>
        <div >
            <ul className='footerItem'>
                <li className='footerItems'>
                    <img src={email} height={30}/>
                    <a href='mailto:kulkarniapurva132@gmail.com' target='blank'> kulkarniapurva132@gmail.com</a>
                </li>
                <li className='footerItems'>
                    <img src={linkedIn} height={30}/>
                    <a href='https://www.linkedin.com/in/apurva-kulkarni-646002238/' target='blank'> Apurva Kulkarni</a>
                </li>
                <li className='footerItems'>
                    <img src={github} height={30}/>
                    <a href='https://github.com/Apurvak12' target='blank'> Apurvak12</a>
                </li>
            </ul>
        </div>
        {/* </div> */}
        </footer>
      
    );
}
export default Footer;