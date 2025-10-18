import { View, SafeAreaView} from 'react-native';
import screenComponent from './style'
import { ScreenProps } from './type';

const Screen: React.FC<ScreenProps> = ({children}) => {
    return (
        <SafeAreaView style={screenComponent.container} >
            <View style={screenComponent.content} >
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Screen;
