
import LoginScreen from './../screens/Login/LoginScreen';
import WelcomeScreen from './../Welcome';
import ChooseLangScreen from './../screens/Login/ChooseLang';
import HomeScreen from './../screens/Home/HomeScreen';
import BillScreen from './../screens/Bill/BillScreen';
import ProfileScreen from './../screens/Profile/ProfileScreen';
import ChatScreen from './../screens/Chat/ChatScreen';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import {Animated,Easing} from 'react-native';


import {colors} from './../themes/theme';

const SlideFromRight = (index,position,width) => {
    const translateX = position.interpolate({
        inputRange: [index-1,index],
        outputRange: [width, 0]
    })

    return { tranform: [{translateX}]}
};

const TransitionConfig = () => {
    return {
        transitionSpec : {
            duration : 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: (sceneProps) => {
            const {layout, position, scene} = sceneProps;
            const width = layout.initWidth;
            const height = layout.initHeight;
            const { index, route } = scene;
            const params = route.params || {};
            const transitions = params.transition || 'default';
            return {
                default: SlideFromRight(index,position,width),
            }[transitions]
        }
    }
}

const WelcomeStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
})

const LoginNavigator = createStackNavigator({
    
    ChooseLangScreen: {
        screen: ChooseLangScreen,
    },
    Login: {
        screen: LoginScreen,
    },
});

const BottomNav = createMaterialBottomTabNavigator(
    {
    Home: { screen: HomeScreen },
    Chat: {screen : ChatScreen},
    Bill: { screen: BillScreen },
    Profile: { screen: ProfileScreen },
   
   
  },
  {
    initialRouteName: 'Home',
    activeColor: colors.MainColor,
    inactiveColor: 'gray',
    barStyle: { backgroundColor: '#FFF' },
    transitionConfig : TransitionConfig
  }
)

const SwitchNav = createSwitchNavigator({
    Welcome : WelcomeStack,
    Login : LoginNavigator,
    Home : BottomNav
})



export default createAppContainer(SwitchNav);
