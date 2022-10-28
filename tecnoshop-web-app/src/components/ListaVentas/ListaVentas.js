import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from 'react-bootstrap/Table';
import data from './../../api/productos.json'
import './ListaVentas.css'

function ListaVentas(){
    const {ventas} = data;
    console.log("ventas--->", ventas);

    const totalVenta = ventas.reduce((sum, venta) => {
        return sum + venta.valor;
    }, 0);
    return (
        <Container>
            <Row><h1>Lista de ventas</h1></Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Fecha</th>
                        <th>IdVenta</th>
                        <th>Cantidad</th>
                        <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ventas && ventas.length > 0 && ventas.map((venta)=>
                            <tr>
                            <td>{venta.fecha}</td>
                            <td>{venta.IdVenta}</td>
                            <td>{venta.articulos}</td>
                            <td>{venta.valor}</td>
                            </tr>
                            )
                        }
                        <tr>
                        <td colSpan={3} className="total">Total</td>
                        <td>{totalVenta}</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default ListaVentas;