import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { eletronics } from "../data";
import Products from "../components/products";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../components/products/actions";

class List extends Component {
  constructor(props) {
    super(props);
  }

  add = product => {
    this.props.addToCart(product)
    alert('Adicionado ao carrinho!')
  }

  remove = id => {
    this.props.removeFromCart(id);
    alert('Produto removido do carrinho!')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Products products={eletronics} addProduct={this.add} removeProduct={this.remove} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

const mapDispatchToProps = { addToCart, removeFromCart }

export default connect(null, mapDispatchToProps)(List)
