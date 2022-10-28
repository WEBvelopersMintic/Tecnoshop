import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CrearProducto.css'

function CrearProductos(){
    return (
        <Container>
            <Row className="mb-3">
                <h1>Crear productos</h1>
            </Row>
            <Row className="justify-content-center">
                <Col xs={5}>
                    <Form className='form-content'>
                        <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="ingrese el nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescripcion">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" placeholder="ingrese la descripción" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPrecio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="ingrese el precio" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formStock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" placeholder="ingrese el valor de stock" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formImagen">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" placeholder="subir imagen" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>

                </Col>
            </Row>

        </Container>
    );
}

export default CrearProductos;