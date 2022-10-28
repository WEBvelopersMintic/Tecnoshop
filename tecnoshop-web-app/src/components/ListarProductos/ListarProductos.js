import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function ListarProductos(){
    return (
        <Container>
            <Row><h1>Lista Productos</h1></Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Mouse Gamer</Card.Title>
                            <Card.Text>
                                Mouse Gamer de alta eficiencia y es RGB.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Mouse Gamer</Card.Title>
                            <Card.Text>
                                Mouse Gamer de alta eficiencia y es RGB.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Mouse Gamer</Card.Title>
                            <Card.Text>
                                Mouse Gamer de alta eficiencia y es RGB.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ListarProductos;