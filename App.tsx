import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/presentation/context/AuthContext';
import AppNavigator from './src/presentation/navigation/AppNavigation';
import 'react-native-gesture-handler';
import { FontLoader } from './src/assets/fonts/fontLoader';

export default function App() {
    return (
        <FontLoader>
            <NavigationContainer independent={true}>
                <AuthProvider>
                    <AppNavigator />
                </AuthProvider>
            </NavigationContainer>
        </FontLoader>
    );
};
