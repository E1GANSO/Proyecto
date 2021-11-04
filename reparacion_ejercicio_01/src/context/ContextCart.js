import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "./CartReducer";



const inicialStateCart = {
    listcart: [],
    total: 0,
    compra: false
}

export const ContextCart = createContext();

export const ContextCartProvider =({children}) =>{

    const [state, dispatch]  = useReducer(CartReducer,inicialStateCart );

    const incrementar = (payload) =>{
        dispatch({type: "INCREMENTAR", payload});
    };

    const decrementar = (payload) =>{
        dispatch({type: "DECREMENTAR", payload});
    };

    const addP = (payload) =>{
        dispatch({type: "ADD", payload});
    };

    const clear =(payload)=>{
        dispatch({type: "CLEAR", payload})
    };

    const buy = (payload) =>{
        dispatch({type: "BUY", payload});
    };

    const contextValues = {
        incrementar,decrementar,addP,clear,buy, ...state
    }

    return(
        <ContextCart.Provider value={contextValues}>
            {children}
        </ContextCart.Provider>
    );

}
