import { ADD_TO_CART, REMOVE_ITEM } from "../actions/actionTypes";

//data to be displayed in home as initial state
const initState = {
  products: [
    {
      id: 1,
      name: "Sledgehammer",
      price: 125.76
    },
    {
      id: 2,
      name: "Axe",
      price: 190.51
    },
    {
      id: 3,
      name: "Bandsaw",
      price: 562.14
    },
    {
      id: 4,
      name: "Chisel",
      price: 13.9
    },
    {
      id: 5,
      name: "Hacksaw",
      price: 19.45
    }
  ],
  addedItems: [],
  total: 0
};

//Reducer function-only place where the state can be modified in redux- pure function
const cartReducer = (state = initState, action) => {
  // If the dispatched action type is add to cart function, then do necessary logic-reduces returns the modified state at ehe end

  if (action.type === ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id);
    let existedItem = state.addedItems.find(item => item.id === action.id);
    if (existedItem) {
      existedItem.quantity += 1;
      existedItem.total += addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      addedItem.total = addedItem.price;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }

  //if dispatched action type is renove item from cart, then do necessary logic-reducer returns the modified state
  if (action.type === REMOVE_ITEM) {
    let removedItem = state.addedItems.find(item => item.id === action.id);
    let new_cart_items = state.addedItems.filter(item => item.id !== action.id);
    let newTotal = state.total - removedItem.price;
    return {
      ...state,
      addedItems: new_cart_items,
      total: newTotal
    };
  }

  return state;
};

export default cartReducer;
