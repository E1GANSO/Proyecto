import {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button'


function Products(){

    return(
        <div>
            <Row id="Text_Products">
                <Col>
                    <h1>Store</h1>
                    <p>This is to Store</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Products</h4>
                </Col>
                <Col id="Text_Busqueda">
                    <input type="text" name="Busqueda" id="Input_Text" placeholder="Buscar producto"/ >
                    <Button variant="primary">Buscar</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <br/>
                </Col>
            </Row>
        </div>

    );
{/*
    <button type="submit" className="btn btn-primary"> Agregar Producto </button>
*/}
    
}

export default Products;


