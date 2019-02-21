import React, { Component } from "react";
import { connect } from "react-redux";

import { addtoCart } from "./actions/cartActions";
import "../styles/cartStyles.scss";

class Home extends Component {
  //add to cart click event handling  
  handleAddtoCart = id => {
    this.props.addtoCart(id);
  };
  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div key={item.id} className="productCard">
          <div>
            <span>{item.name}</span>
          </div>
          <div>
            <p>{item.price}</p>
            <button
              to="/"
              className="button"
              onClick={() => {
                this.handleAddtoCart(item.id);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3>Home</h3>
        <div>{itemList}</div>
      </div>
    );
  }
}

//recieve props from state
const mapStateToProps = state => {
  return {
    items: state.products
  };
};

//recieve action function add to cart and dispatch the action
const mapDispatchToProps = dispatch => {
  return {
    addtoCart: id => {
      dispatch(addtoCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
