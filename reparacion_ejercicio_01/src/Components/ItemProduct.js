import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ContextCart } from '../context/ContextCart';
import ListCart from '../pages/ItemCart';

function ItemProduct(props){

    const {id, nombre, marca, precio} = props.product;
    const {addP}  = useContext(ContextCart);

    return(
        <div className="row" id="Color_Row">
            <div className="row">
                <div className ="col">
                    <p>NOMBRE: {nombre}</p>
                </div>
                <div className ="col">
                    <p>MARCA: {marca}</p>
                </div>
            </div>
            <div className="row">
                <div className ="col">
                    <h5>PRECIO ${precio}</h5>
                </div>
            </div>
            <div className="row">
                <div className ="col">
                    <Button id="Color_Text_Button">Detalles</Button>
                </div>
                <div className ="col">
                    <button onClick={()=> addP(props.product)} type="button" className="btn btn-primary" name = {<ListCart id={id} nombre={nombre} marca={marca} precio={precio}  />} >Agregar al carrito</button>
                </div>
            </div>
        </div>
        );

}


export default ItemProduct;