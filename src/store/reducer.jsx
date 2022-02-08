export const initialState = {
  basket: [],
  user: null,
  loginContent: 'SignInForm',  // show SignInForm, SignUpForm or ForgotPassword
  modalView: false,
  currentProduct: {}
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price * item.numberItems) + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      let idx = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
     
      if (idx >= 0) {
        let newBasket = [...state.basket];
        return {
          ...state,
          basket: newBasket
        };
      } else {
        return {
        ...state,
        basket: [...state.basket, action.item]
      };
      }

      // return {
      //   ...state,
      //   basket: [...state.basket, action.item]
      // };
    case "SET_CURRENT_PRODUCT":
      return {
        ...state,
        currentProduct: action.item
      };
    case "REMOVE_FROM_BASKET":
      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warm(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_LOGIN_CONTENT":
      return {
        ...state,
        loginContent: action.loginContent
      };  
    case "SET_MODAL_VIEW":
      return {
        ...state,
        modalView: action.modalView
      }; 
    default:
      return state;
  }
};
export default reducer;
