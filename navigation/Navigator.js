import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, Intro, Login, Register, Home, Search } from '../screens';


const Stack = createNativeStackNavigator();


function Navigator(props){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator