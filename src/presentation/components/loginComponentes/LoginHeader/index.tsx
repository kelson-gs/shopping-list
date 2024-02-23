import {View, Text} from 'react-native';
import CarBuy from '../../../../assets/icons_svg';
import loginHeadStyle from './style';

const LoginHeader = () => {
  return(
    <View style={loginHeadStyle.container}>
      <View style={loginHeadStyle.icon}>
        <CarBuy />
      </View>
      <Text style={loginHeadStyle.title}>Shopping list</Text>
    </View>
  );
}

export default LoginHeader;