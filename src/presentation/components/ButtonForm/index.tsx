import { TouchableHighlight, Text } from 'react-native';
import ButtonFormStyle from './style'
import { useNavigation } from '@react-navigation/native';

const ButtonForm = () => {
    
    const navigation: any = useNavigation();

    const handleLogIn = () => {
        navigation.navigate('Home')
    }

    return (
         <TouchableHighlight style={ButtonFormStyle.Button} underlayColor='#DDDDDD' onPress={handleLogIn} >
            <Text style={ButtonFormStyle.TextButton}>Entrar</Text>
        </TouchableHighlight>
    );
};

export default ButtonForm;