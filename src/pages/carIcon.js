import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

class CarIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.carIcon}>
          <Text style={styles.carIconText}>{this.props.order.items.length}</Text>
        </View>
        <Icon name='ios-cart' size={30} onPress={() => this.props.navigation.navigate('Car')}></Icon>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 6
  },
  carIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    zIndex: 2000
  },
  carIconText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => {
  const { order } = state;

  return { order };
}

export default connect(mapStateToProps)(CarIcon)
