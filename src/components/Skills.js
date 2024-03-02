import {Container} from 'react-bootstrap';
import html from '../images/html-5_5968267.png';
import css from '../images/css-3_5968242.png';
import javascript from '../images/js_5968292.png';
import java from '../images/java_226777.png';
import nodejs from '../images/node.png';
import mangodb from '../images/mongodb.png';
const Skills=()=>{
    return(
        <>
        <Container className='skills' id='aboutskills' >
        
            <div className='title'>
                <h1 className='text-white'>Skills</h1>
            </div>
            <div className='divide' >
            <div className='tskills'>
                <h3>Technical skills</h3>
            </div>
            <div className='skillitems'>
                <div className='skillitem'>
                    <div className='skill-info'>
                        <p className='text-white'><img src={html} width={20} height={20} /> Html</p>
                        
                    </div>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                   <div className="progress-bar html">90%</div>
                   </div>    
                </div>
                <div className='skillitem'>
                    <div className='skill-info'>
                        <p className='text-white'><img src={css} width={20} height={20}/> Css</p>
                        
                    </div>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                   <div className="progress-bar css">55%</div>
                   </div>   
                    
                </div>

                <div className='skillitem'>
                    <div className='skill-info'>
                        <p className='text-white'><img src={javascript} width={20} height={20}/> Javascript</p>
                        
                    </div>
                     <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                   <div className="progress-bar js">60%</div>
                   </div>   
                    
                </div>

                <div className='skillitem'>
                    <div className='skill-info'>
                        <p className='text-white'><img src={java} width={20} height={20}/> Java</p>
                       
                    </div>
                   <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                   <div className="progress-bar java">50%</div>
                   </div>   
                </div>
                
                 <div className='skillitem'>
                    <div className='skill-info'>
                        <p className='text-white'><img src={nodejs} width={20} height={20}/> NodeJs</p>
                        
                    </div>
                     <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                   <div className="progress-bar nodejs">60%</div>
                   </div>   
                    
                </div>

                 <div className='skillitem'>
                    <div className='skill-info'>
                        <p className='text-white'><img src={mangodb} width={20} height={20}/> Mongodb</p>
                        
                    </div>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                   <div className="progress-bar mongodb">40%</div>
                   </div>   
                    
                </div>
            </div>
        </div>
        </Container>
        </>
    );
}
export default Skills;