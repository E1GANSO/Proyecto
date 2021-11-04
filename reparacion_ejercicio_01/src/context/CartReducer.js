

export const CartReducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENTAR':{
            
        }

        case 'DECREMENTAR':{

        }

        case 'ADD':{
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
        }

        case 'CLEAR':{

        }

        case 'BUY':{

        }

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