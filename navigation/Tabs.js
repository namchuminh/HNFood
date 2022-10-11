import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Profile, Search, Cart } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../constants';
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarShowLabel: false,
    }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Search" component={Search} 
        options={{
          tabBarLabel: 'Tìm Kiếm',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Cart" component={Cart} 
        options={{
          tabBarLabel: 'Giỏ Hàng',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-cart" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Cá Nhân',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default Tabs