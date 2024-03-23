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
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <Button variant="dark">Demo</Button>{ ' '}
         < Button variant="dark">Source</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-sm">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project} />
      <Card.Body>
        <Card.Title className="text-white">Project 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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