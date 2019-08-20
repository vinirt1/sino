import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Routes from './Routes';

const AppNavigator = createStackNavigator(Routes, {
    initialRouteName: 'BuscaIgrejas'
});

export default createAppContainer(AppNavigator);