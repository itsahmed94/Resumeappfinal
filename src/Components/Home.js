import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const gotoobjectives = () => {
      Actions.objectives()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {gotoobjectives}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
   )
}
export default Home