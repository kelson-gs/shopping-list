import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import searchStyles from './styles';
import SearchIcon from '../../../../../assets/icons_svg/homeIcons/searchIcon';

const SearchHome = () => {
  const [search, setSearch] = useState<string>('');

  const handlechangeSearch = (value: string) => setSearch(value)

  return(
    <View style={searchStyles.container}>
      <View style={searchStyles.containerRow}>
        <SearchIcon/>
        <TextInput style={searchStyles.inputSearch} onChangeText={handlechangeSearch} value={search} placeholder='Busque aqui...'/>
      </View>
      
    </View>
  );
}

export default SearchHome;