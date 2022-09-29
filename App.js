
import React from 'react'
import TODO from './src/Navigation/Todomain/Todomain'
import Newnote from './src/Navigation/Newnote/Newnote'
import Editnote from './src/Navigation/Edit/Editnote'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Todomain' component={TODO} />
        {/* <Stack.Screen name='Newnote' component={Newnote} /> */}
        <Stack.Screen name='Editnote' component={Editnote} />
      </Stack.Navigator>
      
      
    </NavigationContainer>
  )
}

export default App