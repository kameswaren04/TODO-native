import {StyleSheet, Dimensions} from 'react-native';
// const {height, width} = Dimensions.get('window');
import {hp,wp,normalize} from '../../component/screenRatio/size'

const styles = StyleSheet.create({
    container: {
      height: hp(10),
      backgroundColor: '#7d7c7c',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom:normalize(15)
    },
    map: {
      backgroundColor: '#d7e3f5',
      borderWidth:normalize(1),
      borderColor:'skyblue',
      // backgroundGradient: "vertical",
      // backgroundGradientTop: "#9EF9D8",
      // backgroundGradientBottom: "#CAF6BF",
      padding: normalize(10),
      margin: normalize(10),
      borderRadius: normalize(20),
    },
    head:{
     flex:1,
     paddingLeft:normalize(20)
    
    },
    header: {
      fontSize: normalize(25),
      textAlign: 'center',
      color:'white'
      
    },
    text: {
      fontSize: normalize(22),
      color:'black',
      fontWeight:'600',
      marginBottom:normalize(15)
    },
    para:{
      fontSize:normalize(18),
      color:'#0b5999'
  
    },
    map_View: {
      flexDirection: 'row',
      justifyContent:"flex-end",
      marginTop:normalize(15),
      
    },
    edit:{
      tintColor: '#3d403f',
      width:wp(5),
      height:hp(3.5)
  
    },
    delete:{
      tintColor: '#3d403f',
      marginLeft:normalize(10),
      width:wp(5),
      marginRight:normalize(10)
  
    },
    add:{
      marginRight:normalize(10),
      tintColor:'white'
    }
  });

  export default styles;