import { View, Text, Image, TouchableOpacity } from 'react-native';
import loginStyles from './styles';
import Screen from '../../components/Screen';

const Login = () => {
    return (
        <Screen>
            <View style={loginStyles.container}>
                <Image
                    style={loginStyles.image}
                    source={require('../../../assets/images/capa_home.png')}
                    alt='imagem_background'
                    resizeMode='contain'
                />
            </View>

            <Text style={loginStyles.title}>
                Shopping List
            </Text>
            <Text style={loginStyles.subtitle}>
                Faça login para transformar suas idas ao merdao em uma experiência mais fácil e organizada!
            </Text>

            <TouchableOpacity style={loginStyles.button}>
                <Text style={loginStyles.buttonText}>
                    Acessar minha conta
                </Text>
            </TouchableOpacity>
        </Screen>
    );
};

export default Login;
