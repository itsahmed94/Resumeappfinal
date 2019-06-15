import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
   const gotoexperiance&education= () => {
      Actions.experiance&education()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {gotoexperiance&education}>
         <Text>This is objective</Text>
      </TouchableOpacity>
      <View>

           
      
      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>OBJECTIVE</Text>
      
<Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>To deliver my efforts for my organization when i get the opportunity to work on.It will be a great experiance here to become a part of this Company.{'\n'}{'\n'}{'\n'}</Text>
         
    <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Resume Details"
      />    


     </View>
   )
   
}
export default About