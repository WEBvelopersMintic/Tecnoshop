import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from 'react-bootstrap/Table';
import './ListaVentas.css'

function ListaVentas(){
    return (
        <Container>
            <Row><h1>Lista de ventas</h1></Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Fecha</th>
                        <th>IdVenta</th>
                        <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>01/10/2023</td>
                        <td>0001</td>
                        <td>100000</td>
                        </tr>
                        <tr>
                        <td>02/10/2023</td>
                        <td>0002</td>
                        <td>100000</td>
                        </tr>
                        <tr>
                        <td>03/10/2023</td>
                        <td>0003</td>
                        <td>100000</td>
                        </tr>
                        <tr>
                        <td colSpan={2} className="total">Total</td>
                        <td>300000</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default ListaVentas;