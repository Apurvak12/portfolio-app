import './Skills.css';
import {Container,Row,Col} from 'react-bootstrap';
import html from '../../images/html-5_5968267.png';
import css from '../../images/css-3_5968242.png';
import javascript from '../../images/js_5968292.png';
import java from '../../images/java_226777.png';
import nodejs from '../../images/node.png';
import mongodb from '../../images/mongodb.png';
const Skills=()=>{
    return(
        <>
        <Container>
        <section className='containers' id='Skills'>
        <h2 className='text-white title'>Skills</h2>
        <Row>
            <Col md={6}>
        <div className='ts'>
        <h3 className='text-white heading1'>Technical Skills</h3>
        <div className='technical-bar'>
            <div className='bar'>
                <div className='text-white info'>
                <img src={html} height={18} weight={18}/> HTML</div>
                <div className='progress-line html'>
                    <span></span>
                </div>
            </div>
            <div className='bar'>
                <div className='text-white info'>
                <img src={css} height={18} weight={18}/> CSS</div>  
                <div className='progress-line css'>
                    <span></span>
                </div>
            </div>
            <div className='bar'>
               <div className='text-white info'>
                <img src={javascript} height={18} weight={18}/> Javascript</div> 
                <div className='progress-line js'>
                    <span></span>
                </div>
            </div>
            <div className='bar'>
                <div className='text-white info'>
                <img src={java} height={18} weight={18}/> Java</div> 
                <div className='progress-line java'>
                    <span></span>
                </div>
            </div>
            <div className='bar'>
                <div className='text-white info'>
                <img src={nodejs} height={18} weight={18}/> Nodejs</div> 
                <div className='progress-line nodejs'>
                    <span></span>
                </div>
            </div>
            <div className='bar'>
                <div className='text-white info'>
                <img src={mongodb} height={18} weight={18}/> Mongodb</div> 
                <div className='progress-line mdb'>
                    <span></span>
                </div>
            </div>
        </div>
        </div>
        </Col>
        <Col md={6}>
        <div className='ps'>
           <h3 className='text-white heading1'>Professional Skills</h3>
           <div className='radial-bars'>
           <div className='radial-bar'>
            <svg x={0} y={0} viewBox='0 0 200 200'>
                <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                <circle className='path path-1' cx={100} cy={100} r={80}></circle>
            </svg>
            <div className='percentage text-white'>70%</div>
            <div className='text-white text'>Creativity</div>
           </div>
             <div className='radial-bar'>
            <svg x={0} y={0} viewBox='0 0 200 200'>
                <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                <circle className='path path-2' cx={100} cy={100} r={80}></circle>
            </svg>
            <div className='percentage text-white'>60%</div>
            <div className='text-white text'>Communication</div>
           </div>
             <div className='radial-bar'>
            <svg x={0} y={0} viewBox='0 0 200 200'>
                <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                <circle className='path path-3' cx={100} cy={100} r={80}></circle>
            </svg>
            <div className='percentage text-white'>50%</div>
            <div className='text-white text'>Problem Solving</div>
           </div>
           </div>
           
        </div>
        </Col>
        </Row>
    </section>
    </Container>
        </>
    );
}
export default Skills;