import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'

import Main from './pages/main'
import List from './pages/list'
import Car from './pages/car'
import CarIcon from './pages/carIcon'

const stackNavigator = createStackNavigator({
  Main, List, Car
},
 
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: 'Compras App',
      headerStyle: {
        backgroundColor: '#ff0000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerRight: (
        <CarIcon navigation={navigation} />
      )
    })
  }
)

let Routes = createAppContainer(stackNavigator)

export default Routes
