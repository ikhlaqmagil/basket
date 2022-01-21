const initialState = {
    products: [],
  };
  
  export default function basketReducer(state = initialState, action) {
      console.log({state});
    switch (action.type) {
      case "ADD_PRODUCT_TO_BASKET":
  return {
          ...state,
          products: [...state.products, action.payload]
        };
      case "REMOVE_PRODUCT_FROM_BASKET":
        return state;
      default:
        return state;
    }
  }
  