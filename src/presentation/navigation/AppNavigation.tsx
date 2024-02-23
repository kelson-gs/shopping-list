import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login';
import Home from '../screens/home';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
