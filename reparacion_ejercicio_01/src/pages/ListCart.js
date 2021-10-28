import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from "@restart/ui/esm/Button";

export default function ListCart({id, nombre, marca, precio}){

    const Cart_Inicial = [
        {
            id: "",
            nombre: "",
            marca: "",
            precio: 0
        }
    ];



    const [cart, setCart] = useState(Cart_Inicial);
    


    return(
        <div>
            <h1>Carrito </h1>
            {Cart_Inicial.map(e=>(
            <div className="col"> 
                <Table striped bordered hover variant = "primary">
                    <thead>
                        <tr id="MiTablaPersonalizada">
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>MARCA</th>
                            <th>PRECIO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="MiTablaPersonalizada">
                            <td>{e.id}</td>
                            <td>{e.nombre}</td>
                            <td>{e.marca}</td>
                            <td>{e.precio}</td>
                            <td>  
                                <Button id="Boton_Eliminar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                    </svg> Eliminar
                                </Button>
                            </td>
                    </tr>
                    </tbody>
                </Table>
            </div>))}
        </div>
    );
}