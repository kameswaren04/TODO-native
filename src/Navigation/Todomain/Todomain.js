import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import React, {useEffect} from 'react';
import {deleteData, storeData} from '../../Redux/reducer';
import {useDispatch, useSelector} from 'react-redux';
import userDetails from '../../component/data';
import styles from './style';



const TodoMain = ({navigation}) => {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.users.data);
  useEffect(() => {
    dispatch(storeData(userDetails));
  }, []);

  const eraseData = id => {
    dispatch(deleteData(id));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.head} >
          <Text style={styles.header}>Todo App</Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Editnote',{
                    id: '',
                    title:'',
                    body: '',
                    
                  })}>
          <Image style={styles.add} source={require('../../Images/add.png')} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{marginBottom: 90}}>
        {Data.map(item => (
          <View key={item.id} style={styles.map}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.para} >{item.body}</Text>
            <View style={styles.map_View}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Editnote', {
                    id: item.id,
                    title: item.title,
                    body: item.body,

                  })
                }>
                <Image
                  style={styles.edit}
                  source={require('../../Images/edit.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => eraseData(item.id)}>
                <Image
                  style={styles.delete}
                  source={require('../../Images/delete.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoMain;


