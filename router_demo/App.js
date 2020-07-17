
import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import DiscoverScreen from './js/pages/DiscoverScreen';
import CartScreen from './js/pages/CartScreen';
import MineScreen from './js/pages/MineScreen';
import OrderScreen from './js/pages/OrderScreen';
import SignInScreen from './js/pages/SignInScreen';
import UpdatePhoneScreen from './js/pages/UpdatePhoneScreen';
import UpdatePwdScreen from './js/pages/UpdatePwdScreen';
import UserInfoScreen from './js/pages/UserInfoScreen';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene hideNavBar panHandlers={null}>
        <Tabs
          key="tab"
          activeTintColor="blue"
          inactiveTintColor="#666">
          <Scene
            key="mine"
            component={MineScreen}
            tabBarLabel="个人中心"
            title="个人中心"
            icon={({focused}) => (focused?<Image source={require('./images/user_active.png')} style={{width:24, height:24}}/>:<Image source={require('./images/user.png')} style={{width:24, height:24}}/>)}
          />
          <Scene
            key="pwd"
            component={UpdatePwdScreen}
            tabBarLabel="修改密码"
            title="修改密码"
            icon={({focused}) => (focused?<Image source={require('./images/home_active.png')} style={{width:24, height:24}}/>:<Image source={require('./images/home.png')} style={{width:24, height:24}}/>)}
          />
        </Tabs>
      </Scene>
      <Scene key="cart" component={CartScreen} title="购物车" />
      <Scene key="discover" component={DiscoverScreen} title="发现" />
      <Scene key="order" component={OrderScreen} title="订单" />
      <Scene key="userInfo" component={UserInfoScreen} title="个人信息" />
      <Scene
        key="updatePhone"
        component={UpdatePhoneScreen}
        title="修改手机号"
      />
      <Scene key="signIn" component={SignInScreen} title="登录" />
    </Stack>
  </Router>
);


export default App;