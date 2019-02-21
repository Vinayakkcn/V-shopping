import React, { Component } from "react";
import { connect } from "react-redux";

import { removeItem } from "./actions/cartActions";
import "../styles/cartStyles.scss";

class Cart extends Component {
  
  //On clicking remove button trigger this function
  handleRemove = id => {
    this.props.removeItem(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div key={item.id} className="productCard">
            <div>
              <span>{item.name}</span>
            </div>
            <div>
              <p>{item.price}</p>
            </div>
            <div>
              <span className="span_style">Quantity:{item.quantity}</span>
              <span className="span_style">Total:{item.total.toFixed(2)}</span>
              <button to="/" onClick={() => this.handleRemove(item.id)}>
                <i>Remove Item</i>
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p> Nothing </p>
    );

    return (
      <div className="container">
        <h3>Cart</h3>
        <div>{addedItems}</div>
      </div>
    );
  }
}

//Recieve state as props and use it in the component
const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};
//Recieve the action function as props and dispatch the actiont
const mapDispatchtoProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Cart);
