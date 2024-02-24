import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonForm from '../../../../components/ButtonForm';
import loginFormStyle from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleChangeUsername = (value: string) => setUsername(value);
    const handleChangePassword = (value: string) => setPassword(value);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={loginFormStyle.container}>
            <View>
                <TextInput
                    style={loginFormStyle.input}
                    placeholder='seuemail@gmail.com'
                    value={username}
                    onChangeText={handleChangeUsername}
                    placeholderTextColor={'#fff'}
                />
            </View>

            <View style={loginFormStyle.containerInput}>
                <TextInput
                    style={loginFormStyle.inputPassword}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={handleChangePassword}
                    placeholder='********'
                    placeholderTextColor={'#fff'}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icon style={loginFormStyle.icon} name={showPassword ? 'eye-slash' : 'eye'} size={30} color={'#fff'}/>
                </TouchableOpacity>
            </View>
            <Text style={loginFormStyle.TextForgotPassword}>Esqueceu a senha?</Text>

            <ButtonForm/>
            <Text style={loginFormStyle.TextRegister}>Cadastre-se</Text>
        </View>
    );
};

export default LoginForm;
