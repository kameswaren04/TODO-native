import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import {hp,wp,normalize} from '../../component/screenRatio/size'

const styles = StyleSheet.create({
  press: {
    
    backgroundColor: '#d7e3f5',
    // backgroundColor: '#97c9f0',
    // marginHorizontal: normalize(140),
    
    alignItems:'center',
    // justifyContent:'center',
    borderRadius: normalize(30),
    marginVertical: normalize(10),
    // paddingTop:normalize(5),
    borderColor:'white',
    borderWidth:normalize(2)
  },
  text: {
    height:hp(8),
    width:wp(30),
    fontSize: normalize(20),
    color: 'black',
    textAlign: 'center',
    paddingTop: normalize(10),
  },
  bodyText: {
    height: hp(20),
    width: wp('95%'),
    borderColor: 'white',
    borderWidth: normalize(2),
    fontSize: normalize(18),
    borderRadius: normalize(35),
    paddingLeft:normalize(10),
    backgroundColor:'#d7e3f5'
  },
  
  textInput: {
    height: hp(10),
    width: wp('95%'),
    borderColor: 'white',
    borderWidth: normalize(2),
    marginBottom: normalize(15),
    fontSize: normalize(20),
    color: 'black',
    borderRadius: normalize(35),
    paddingLeft:normalize(10),
    backgroundColor:'#d7e3f5'
  },
  container: {
    paddingTop: normalize(40),
    paddingHorizontal: normalize(10),
  },
});

export default styles;
