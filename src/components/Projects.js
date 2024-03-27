import { Container,Card,Button } from "react-bootstrap";
import project from '../images/project.png';
const Project=()=>{
    return(
        <>
        <Container className="container5">
            <h2 className="text-white title">Projects</h2>
        <div >
  <div className="row">
    <div className="col-sm">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project}/>
      <Card.Body>
        <Card.Title className="text-white">Project 1</Card.Title>
        <Card.Text className="text-white">
          Travel Tourist is a cool travel website that's made for everyone who loves adventure.
          Html,css and bootstrap is use to made this website.
        </Card.Text>
       <Button variant="primary">Demo</Button>{ ' '}
         < Button variant="primary">Source</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-sm">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project} />
      <Card.Body>
        <Card.Title className="text-white">Project 2</Card.Title>
        <Card.Text className="text-white">
          Company is a food delivery website that's made for everyone who loves food.
          Html,css and bootstrap is use to made this website.
        </Card.Text>
        <Button variant="primary">Demo</Button> {" "}
       < Button variant="primary">Source</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-sm">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project} />
      <Card.Body>
        <Card.Title className="text-white">Project 3</Card.Title>
        <Card.Text className="text-white">
          My Personal Portfolio you'll find a collection of my work that showcases my skills, creativity,and passion. React.js is use to made this website.
        </Card.Text>
        <Button variant="primary">Demo</Button>{ ' '}
         < Button variant="primary">Source</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>
        </Container>
        </>
    );
}
export default Project;