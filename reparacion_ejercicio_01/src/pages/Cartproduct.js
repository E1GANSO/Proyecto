import { useContext } from "react";
import { ContextCart } from "../context/ContextCart"



const Cartproducts= () =>{
    const {ItemCart}  = useContext(ContextCart);

    return(
        <div className="products">
            <div>
                {ItemCart.map((product)=>{
                    <ItemCart key={product.id} product ={product}/>
                })}
            </div>
        </div>
    );
}


export default Cartproducts;
