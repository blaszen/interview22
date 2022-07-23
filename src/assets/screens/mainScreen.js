import { 
  View, 
  Text,
  SafeAreaView, 
  TouchableOpacity, 
  Image ,
  TextInput,
  

    } from 'react-native'
import React from 'react'


const MainScreen = () => {
  return (
    

    <View style={{height:'100%', width:'100%'}}>

    
    <View style={{
      flex:.5, 
  
      justifyContent:'flex-start',
      alignItems:'center' , 
      flexDirection:'row',
      paddingLeft:20,
      }}>
        <View>
        <Image
        
        source={require('../images/menu.png')}
      />
        </View>


        <View>

      <Text style={{paddingLeft:10 , color:'#fff',fontSize:16,fontWeight:'900'}}> INTERVIEW DESIGN</Text>
        </View>
    </View>
     
     
     <View style={{flex:.5,  paddingLeft:35}}>
        
     <Text style={{color:'#fff',fontSize:20,fontWeight:'600'}}>Try {'\n'}Making{'\n'}Same Design</Text>
    
   </View>
<View style={{flex:.5,  paddingLeft:35}}>

     <Text style={{color:'#fff',fontSize:14,fontWeight:'400'}}>We invite you to team next</Text>
</View>
   
  <View style={{  paddingLeft:35,paddingBottom:10}}>
     <Text style={{color:'#fff',fontSize:10,fontWeight:'600',}}>YOU CAN DO THIS FORM- ADD POINTS</Text>
    </View> 
    
        
    
  


 
 
 <View style={{flex:1,  justifyContent:'center',alignItems:'center', }}>
         

 <TextInput
        style={{borderColor:'#fff',paddingLeft: 8, height:42, width:'80%',borderWidth:.6,borderTopLeftRadius:4,borderTopRightRadius:4,borderTopColor:'#fff',borderBottomColor:'#fff'}}
        placeholder="Name"
        keyboardType="numeric"
        placeholderTextColor="#fff"
        />
        <TextInput
        style={{ borderColor:'#fff',paddingLeft: 8, height:42, width:'80%',borderWidth:.5,borderTopColor:'transparent',borderTopWidth:.5,borderBottomColor:'#fff',borderBottomWidth:.5}}
        placeholder="E-mail"
        keyboardType="numeric"
        placeholderTextColor="#fff"
        />
         <TextInput
        style={{borderColor:'#fff',paddingLeft: 8,color:'#fff', height:42, width:'80%',borderWidth:.5,borderTopWidth:.5,borderBottomColor:'transparent',borderTopColor:'#fff'}}
        placeholder="Password"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        />
      
        <TouchableOpacity
        style={{
          width:317,height:41.74,
          backgroundColor: 'rgba(16, 21, 23, 0.75)',
          borderWidth: 1,
          borderColor: 'transparent',
          borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
        flexDirection:'row',
        justifyContent:'center',
        
      }}
        
      >
        <Text style={{
          color:'#fff',
      textAlign:'center',
      paddingTop : 10,
      fontSize:14,
   
      }}>Sign up</Text>
       <Image style={{marginTop:16, marginLeft: 10}} source={require('../images/Icon.png')} />
      </TouchableOpacity>
   
      
        
        
        
        
        
</View>




 
<View style={{flex:1.5, alignItems:'center' }}>
        <Text style={{
          fontSize:10,
          color:'#9B9B9B'
        }}>By clocking on 'Sign Up' I agree to our</Text>
        <Text style={{
          color:'#FFFFFF',
          fontSize:10,
        }}>Terms of service</Text>
      </View>
      


</View>
    
  )
}

export default MainScreen