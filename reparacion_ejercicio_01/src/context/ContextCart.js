import { createContext, useReducer } from "react"
import { CartReducer } from "./CartReducer";



const inicialStateCart = {
    listcart: [{id: 0,
            nombre: "",
            marca: "",
            precio: 0,
            quantity: 0}
        ],
    total: 0,
    compra: false
}

const ContextCart = createContext();

export const ContextCartProvider =({children}) =>{

    const [state, dispatch]  = useReducer(CartReducer,inicialStateCart );

    const incrementar = (payload) =>{
        dispatch({type: "INCREMENTAR", payload});
    };
/*
    const decrementar = (payload) =>{
        dispatch({type: "DECREMENTAR", payload});
    };
*/
    const addP = (payload) =>{
        dispatch({type: "ADD", payload});
    };

    const clear =()=>{
        dispatch({type: "CLEAR"})
    };

    const buy = (payload) =>{
        dispatch({type: "BUY", payload});
    };

    const contextValues = {
        incrementar,addP,clear,buy, ...state
    }

    return(
        <ContextCart.Provider value={contextValues}>
            {children}
        </ContextCart.Provider>
    );
}


export default ContextCartProvider;