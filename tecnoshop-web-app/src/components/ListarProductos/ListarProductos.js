import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import React,{useState,useEffect} from 'react';
import data from './../../api/productos.json'
import { useLocation } from 'react-router-dom';

function ListarProductos(){
    const {productos} = data;
    const location= useLocation()

    console.log("productos--->", productos);

    const goTo = () => {
        if(location.pathname.includes("admin") ){
            console.log("soy administrador");
        }else{
            console.log("soy cliente");

        }
    }


    return (
        <Container>
            <Row><h1>Lista Productos</h1></Row>
            <Row>
                {
                    productos && productos.length > 0 && productos.map((producto) =>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>
                                    <p>{producto.descripcion}</p>
                                    <p>{producto.precio}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={goTo}>
                                    {
                                        //aqui es un condicional para verificar si es administrador o cliente. El label del boton cambia segun esta funcionalidad
                                        location.pathname.includes("admin") ? 'Modificar' : 'Comprar'
                                    }
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    )
                }
            </Row>
        </Container>
    );
}

export default ListarProductos;