import { PixelRatio, Dimensions } from 'react-native';

export default {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    themeColor: '#167DF7',
    onePix: 1 / PixelRatio.get(),

    viewContainer: {
        flex: 1,
        backgroundColor: '#F5F5FC',
    },
};