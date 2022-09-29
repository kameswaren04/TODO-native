import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createData, editData} from '../../Redux/reducer';
import store from '../../Redux/store';
import styles from './style';

const Editnote = ({route, navigation}) => {
  const newdata = route.params;
  const [title, setTitle] = useState(newdata.title !== '' ? newdata.title : '');
  const [body, setBody] = useState(newdata.body !== '' ? newdata.body : '');
  const [btn,setBtn] = useState(newdata.title !== '' ? true : false);
  const data = useSelector(state => state.users.data);
  const newone = useSelector(state => state.users.data.length);

  const editUser = () => {
    data.map(item => {
      if (item.id === newdata?.id) {
        item.title = title;
        item.body = body;
      }
      return item;
    });

    store.dispatch(editData(data));
    navigation.navigate('Todomain');
  };
  const newData = () => {
    const payload = {id: newone + 1, title: title, body: body};
    store.dispatch(createData(payload));
    navigation.navigate('Todomain');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          multiline={true}
          maxLength={200}
          numberOfLines={1}
          style={styles.title}
          value={title}
          onChangeText={item => setTitle(item)}
        />
        <TextInput
          placeholder="Body"
          multiline={true}
          numberOfLines={1}
          maxLength={200}
          style={styles.body}
          value={body}
          onChangeText={item => setBody(item)}
        />
      </View>
      
      {btn ? (
        <View style={styles.btn} >
        <TouchableOpacity onPress={() => editUser()} style={styles.edit}>
          <Text style={styles.editFont}> Edit </Text>
        </TouchableOpacity>
        </View>
      ): (
        <View style={styles.btn} >
        <TouchableOpacity onPress={() => newData()} style={styles.edit}>
          <Text style={styles.editFont}> Add </Text>
        </TouchableOpacity>
        </View>
        
      )}
    </SafeAreaView>
  );
};

export default Editnote;
