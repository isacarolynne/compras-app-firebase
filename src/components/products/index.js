import React, { Component } from "react"
import { View, Text, Image, FlatList, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { connect } from 'react-redux'

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.productView}>
        <FlatList
          data={this.props.products}
          renderItem={({ item }) => <Item product={item} addProduct={this.props.addProduct} removeProduct={this.props.removeProduct} />}
          keyExtractor={item => item.id.toString()}
        >
        </FlatList>
      </View>
    );
  }
}

const Item = ({ product, addProduct, removeProduct }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => addProduct(product)}
        onLongPress={() => removeProduct(product.id)}
      >
        <Image
          resizeMode="contain"
          source={product.image}
          style={styles.productImage}>
        </Image>
        <Text style={styles.productText}>{product.name + "\nR$" + product.price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productView:{
    width: "100%", 
    height: "100%", 
    padding: 10 
  },
  productText: {
    fontSize: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -120,
    paddingLeft: 100,
    paddingVertical: 50,
    left: 20
  },
  productImage: {
    width: 100,
    height: 100
  }
});

const mapStateToProps = (state) => {
  const { customerName } = state;

  return { customerName }
}

export default connect(mapStateToProps)(Products);
