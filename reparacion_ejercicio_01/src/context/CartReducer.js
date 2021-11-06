
/*
export const TotalPagar = (listcart) => {
    return listcart.reduce(total, product) => total + product.quian
}
*/
export const CartReducer = (state, action) =>{
    switch(action.type){

        case 'DECREMENTAR':{
            const productDelete = state.listcart.find(product => product.id === action.payload);

            return productDelete.quantity > 1 
            ? 

            {
                ...state,
                cart: state.listcart.map(product =>
                    product.id === action.payload
                    ?   {...product, quantity: product.quantity-1}
                    : product
                )
            }
        
            :{
                ...state,
                cart: state.listcart.filter(product => product.id !== action.payload)
            }
        }

        case 'ADD':
            const newProduct = action.payload;
            const cartContainProduct = state.listcart.find(
                product => product.id === newProduct.id
            )

            return cartContainProduct
            ?{
                ...state,
                listcart: state.listcart.map( product =>
                    product.id === newProduct.id
                    ?   {...product, quantity: product.quantity+1}
                    :   product
                )
            }
            :{ 
                ...state,
                listcart: [
                    ...state.listcart,
                    {...action.payload, quantity: 1}
                ]
            }

        case 'CLEAR':{

        }

        case 'BUY':{

        }

        default:
            return state;
    }
}

/*
const newProduct = action.payload;
            const cartContainProduct = state.listcart.find(
                product => product.id === newProduct.id
            )

            return cartContainProduct
            ?{
                ...state,
                listcart: state.listcart.map( product =>
                    product.id === newProduct.id
                    ?   {...product, quantity: product.quantity+1}
                    :   product
                )
            }
            :{ 
                ...state,
                clistcart: [
                    ...state.listcart,
                    {...action.payload, quantity: 1}
                ]
            }
*/