import { StyleSheet,Dimensions } from "react-native";
import {hp,wp,normalize} from '../../component/screenRatio/size'
// const {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
      paddingVertical:normalize(50),
      paddingHorizontal:normalize(10)
  
    },
    edit: {
      // justifyContent:'center',
      backgroundColor: '#d7e3f5',
      alignItems: 'center',
      height: hp(8),
      width:wp(30),
      paddingTop: normalize(15),
      borderRadius:normalize(30),
      borderColor:'white',
      borderWidth:normalize(1)
      
    },
    editFont:{
      fontSize: normalize(20),
      color:'black'

    },
    title: {
      fontSize:normalize(20),
      fontWeight:'600',
      height: hp(10),
      width: wp('95%'),
      borderColor: 'white',
      borderRadius:normalize(20),
      borderWidth:normalize(1),
      marginBottom: normalize(15),
      padding: normalize(10),
      backgroundColor: '#d7e3f5'
      
    },
    body: {
      fontSize:normalize(18),
      borderRadius:normalize(20),
      height: hp(20),
      width: wp('95%'),
      borderColor: 'white',
      borderWidth: normalize(1),
      padding: normalize(10),
      backgroundColor: '#d7e3f5',
      color:'#0b5999'
    },
    btn:{
      flex:1,
      alignItems:'center',
    }
  });

  export default styles