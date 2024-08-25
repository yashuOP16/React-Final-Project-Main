const initialState = {
    allproducts: [],
    product: null,
    isEdit : false
};

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADDPRODUCTS':
           
            return {
                ...state,
                allproducts: action.payload,
            };
            case 'EDITPRODUCT':
               
                const editSinglerec = state.allproducts.find(
                    (product) => product.id === action.payload 
                );
    
                return {
                    ...state,
                    product: editSinglerec,
                    
                };

        case "UPDATEPRODUCT":
            return{
                ...state,
                product:action.payload,
                isEdit : false,
            }


        default:
            return state;
    }
}

export default reducer;