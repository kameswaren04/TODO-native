import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createData} from '../../Redux/reducer';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import styles from './style';






const Newnote = ({navigation}) => {
  const dispatch = useDispatch();
  const newone = useSelector(state => state.users.data.length);
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const newData = () => {
    const payload = {id: newone + 1, title: title, body: body};
    dispatch(createData(payload));
    navigation.navigate('Todomain');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          multiline={true}
          style={styles.textInput}
          value={title}
          onChangeText={item => setTitle(item)}
        />
        <TextInput
          placeholder="Body"
          multiline={true}
          numberOfLines={1}
          maxLength={200}
          style={styles.bodyText}
          value={body}
          onChangeText={item => setBody(item)}
        />
      </View>
      <TouchableOpacity style={styles.press} onPress={() => newData()}>
        <Text style={styles.text}> ADD </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Newnote;


