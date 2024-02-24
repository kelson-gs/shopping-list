import { ScrollView } from 'react-native';
import homeStyles from './styles';
import HeaderHome from './components/headerHome';
import SearchHome from './components/searchHome';

const Home = () => {
    return (
      <ScrollView>
        <HeaderHome/>
        <SearchHome/>
      </ScrollView>
    );
};

export default Home;
