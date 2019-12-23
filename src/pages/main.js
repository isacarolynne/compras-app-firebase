import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import { connect } from 'react-redux';
import { addCustomerName } from '../components/products/actions'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: ""
    }
  }

  validateName = () => {
    if (this.state.customerName.length < 1) {
      Alert.alert("Error", "Digite um nome válido!");

      this.setState({ customerName: "" });
    } else {
      const { customerName } = this.state;

      this.props.addCustomerName(customerName);

      this.props.navigation.navigate('List');

      this.setState({ customerName: "" });
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput style={styles.textInput}
          placeholder='Digite um nome...'
          value={this.state.customerName}
          onChangeText={text => {
            this.setState({ customerName: text });
          }}>
        </TextInput>
        <View>
          <TouchableOpacity onPress={this.validateName}>
            <Text style={styles.textTouchableOpacity}
            >Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  view: {
    display: "flex", 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: "center"
  },
  textInput:{
    marginTop: -30, 
    height: 70, 
    width: "80%", 
    borderWidth: StyleSheet.hairlineWidth, 
    borderRadius: 30, 
    paddingHorizontal: 15, 
    fontWeight: "500", 
    fontSize: 19 
  },
  textTouchableOpacity:{
    backgroundColor: "red", 
    borderRadius: 5, 
    borderWidth: 1, 
    width: 150, 
    height: 40, 
    alignItems: "center", 
    marginTop: 20 ,
    color: "white", 
    fontSize: 19, 
    textAlign:'center',
    paddingTop:5
  }
  
})

const mapDispatchToProps = { addCustomerName }

export default connect(null, mapDispatchToProps)(Main)
