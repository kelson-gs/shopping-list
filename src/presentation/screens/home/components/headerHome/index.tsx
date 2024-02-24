import { View, Text } from 'react-native';
import HamburguerIcon from '../../../../../assets/icons_svg/homeIcons/hamburguerIcon';
import headerHomeStyle from './styles';

const HeaderHome = () => {
  return(
    <View style={headerHomeStyle.container}>
      <HamburguerIcon/>
      <Text style={headerHomeStyle.textHeader}>Shopping list</Text>
    </View>
  );
}

export default HeaderHome;