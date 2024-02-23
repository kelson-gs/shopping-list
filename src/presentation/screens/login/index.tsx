import { View, Text } from 'react-native';
import LoginForm from '../../components/loginComponentes/LoginForm';
import LoginHeader from '../../components/loginComponentes/LoginHeader';
import { LinearGradient } from 'expo-linear-gradient';
import loginStyles from './styles';

const Login = () => {
    return (
        <LinearGradient style={loginStyles.container}  colors={["rgba(27, 160, 96, 0.69)","rgba(70, 222, 149, 0.87)"]} start={{x:1.5, y:0}} end={{x:0 , y:1}}>
            <View>
                <LoginHeader/>
                <LoginForm />
            </View>
        </LinearGradient>
    );
};

export default Login;
