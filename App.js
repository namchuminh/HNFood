import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { Welcome, Intro, Login, Register, Search } from './screens/index.js'
import colors from './constants/colors.js';
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true}
        backgroundColor={colors.primary}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}/>
      <Search/>
    </SafeAreaView>
  )
}

