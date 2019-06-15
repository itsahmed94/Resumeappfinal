import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
   const goTohome = () => {
      Actions.home()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {gotohome}>
         <Text>experiance&education</Text>
      </TouchableOpacity>
       
         
          
          <View>
    
          <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EXPERIENCE:</Text>
          
          <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
          <Text style={{fontWeight:'bold'}}>Teaching:</Text>  {'\n'}
          -One year teaching experiance of graduation in coaching. {'\n'}
    
          {'\n'}
          </Text>
    
            <Button
            onPress={() =>     this.props.navigation.openDrawer('')}
            title="Back"
          />
          </View>


        )