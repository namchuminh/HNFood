import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, Intro, Login, Register, Home, Search, Category, Details, Profile, Password} from '../screens';


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
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Password" component={Password} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator