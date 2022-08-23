import React, { Component } from "react";
import ShoeList from "./ShoeList";
import ShoeDetail from "./ShoeDetail";
import EcommerceHeader from "./Components/EcommerceHeader";

export default class ShoeShopRedux extends Component {
  handleGetShoeDetail = (shoe) => {
    this.setState({
      currentShoe: shoe,
    });
  };

  handleAddToCart = (shoe) => {
    // cartItem : {product: {}, quantity}
    // cart: [cartItem, cartItem]
    let cloneCart = [...this.state.cart];
    let findIdx = this.state.cart.findIndex((item) => item.id === shoe.id);
    findIdx < 0
      ? cloneCart.push({ ...shoe, quantity: 1 })
      : cloneCart[findIdx].quantity++;
    this.setState({
      cart: cloneCart,
    });
  };

  handleRemoveFromCart = (shoeId) => {
    let cloneCart = [...this.state.cart];
    let findIdx = this.state.cart.findIndex((shoe) => shoe.id === shoeId);
    if (findIdx >= 0) {
      cloneCart.splice(findIdx, 1);
    }
    this.setState({
      cart: cloneCart,
    });
  };

  render() {
    return (
      <>
        {/* <header>
          <EcommerceHeader
            cartData={this.state.cart}
            handleRemoveFromCart={this.handleRemoveFromCart}
          ></EcommerceHeader>
        </header> */}
        <main>
          <div className="shoe-list py-5">
            {/* <Cart></Cart> */}
            <ShoeList
            // handleGetShoeDetail={this.handleGetShoeDetail}
            // handleAddToCart={this.handleAddToCart}
            ></ShoeList>
            {/* <ShoeDetail shoeData={this.state.currentShoe}></ShoeDetail> */}
          </div>
        </main>
      </>
    );
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (shoe) => {
//       dispatch(increMentAction(value));
//     },
//     deleteFromCart: (value = 1) => {
//       dispatch(decreMentAction(value));
//     },
//   };
// };
