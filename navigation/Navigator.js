import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Welcome, Intro, Login, Register, Home, Search, Category, Details, Profile, Password, Cart, Product} from '../screens';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();


function Navigator(props){
    const {token} = useContext(AuthContext)
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {token.access ? (
                    <>
                        <Stack.Screen name="Tabs" component={Tabs} />
                    </>
                    
                ) : (
                    <>
                        <Stack.Screen name="Welcome" component={Welcome}/>
                        <Stack.Screen name="Intro" component={Intro} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator