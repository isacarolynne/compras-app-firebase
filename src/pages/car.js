import React, { Component } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Firebase from '../../Firebase';
import { clearOrder, removeFromCart } from '../components/products/actions';

class Car extends Component {
  constructor(props) {
    super(props);
  }

  sendOrder = async () => {
    const { order } = this.props;

    await Firebase.send(order);

    Alert.alert("OK", "Pedido salvo com sucesso!")

    await this.props.clearOrder();

    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <SafeAreaView style={styles.productSafeAreaView}>

        <Text style={styles.productTextFont}>Pedido de <Text style={styles.productTextName}>{this.props.order.customerName}</Text></Text>

        <View style={styles.productViewUm}>
          <FlatList
            data={this.props.order.items}
            renderItem={({ item }) => <Item product={item} removeFromCart={this.props.removeFromCart} />}
            keyExtractor={item => item.id.toString()}
          >
          </FlatList>
        </View>

        <View style={styles.productViewDois}>
          <TouchableOpacity
            style={styles.productTouchableOpacity}
            onPress={() => this.sendOrder()}
          >
            <Text style={styles.productTextTouchableOpacity}>Finalizar</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
  }
}

const Item = ({ product, removeFromCart }) => {
  return (
    <View>
      <TouchableOpacity onLongPress={() => removeFromCart(product.id)}>
        <Image
          resizeMode="contain"
          source={product.image}
          style={styles.productImage}>
        </Image>
        <Text style={styles.productTextUm}>{product.name + "\nR$" + product.price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productSafeAreaView:{
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: 'center'
  },
  productTextUm: {
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
  },
  productTextName:{
    fontWeight: "bold"
  },
  productTextFont:{
    fontSize: 19
  },
  productViewUm:{
    width: "100%", 
    height: "80%", 
    padding: 10 
  },
  productViewDois:{
    justifyContent:'center'
  },
  productTouchableOpacity:{
    backgroundColor: "red", 
    borderRadius: 5, 
    borderWidth: 1, 
    width: 150, 
    height: 40, 
    alignItems: "center", 
    marginTop: 20 
  },
  productTextTouchableOpacity:{
    color: "white", 
    fontSize: 19, 
    marginTop: 5 
  }
});


const mapStateToProps = (state) => {
  const { order } = state;

  return { order }
}

const mapDispatchToProps = { removeFromCart, clearOrder }

export default connect(mapStateToProps, mapDispatchToProps)(Car);
