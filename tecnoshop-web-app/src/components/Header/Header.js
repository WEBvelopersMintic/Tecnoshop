import Nav from 'react-bootstrap/Nav';
function Header(){

    return(
        <Nav>
            <Nav.Item>
                <Nav.Link href="/admin/crear-productos">Crear productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/admin/lista-productos">Lista de productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/admin/modificar-productos">Modificar productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/admin/lista-ventas">Lista de Ventas</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Header;