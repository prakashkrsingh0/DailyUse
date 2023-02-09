import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Whatsapp from '../screens/whatsApp/index';
import Todolist from '../screens/todoList/index';
import Youtube from '../screens/youtube/index';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import I18n from '../localization/i18n';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodolistIcon from '../assets/icons/todolist.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import WhatsappIcon from '../assets/icons/whatappIcon.svg';
import {color} from '../theme';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const YouTubeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Youtube" component={Youtube} />
    </Stack.Navigator>
  );
};

const WhatsappStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Whatsapp" component={Whatsapp} />
    </Stack.Navigator>
  );
};

const TodolistStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Todolist" component={Todolist} />
    </Stack.Navigator>
  );
};

const MyTabBar = ({state, descriptors, navigation}: any) => {
  const getIcon = (currentIndex: number, iconColor: boolean) => {
    switch (currentIndex) {
      case 1:
        return (
          <View style={localStyle.iconAndNameContainer}>
            <View
              style={{
                marginBottom: verticalScale(11),
              }}>
              <YoutubeIcon
                fill={iconColor ? '#F61C0D' : color.Fiord}
                height={22}
                width={22}
              />
            </View>
            <Text
              style={[
                localStyle.iconName,
                {
                  color: iconColor ? '#F61C0D' : color.Fiord,
                },
              ]}>
              Youtube
            </Text>
          </View>
        );
      case 2:
        return (
          <View style={localStyle.iconAndNameContainer}>
            <View
              style={{
                marginBottom: verticalScale(11),
              }}>
              <TodolistIcon
                fill={iconColor ? color.VKonTakte : color.Fiord}
                height={22}
                width={22}
              />
            </View>
            <Text
              style={[
                localStyle.iconName,
                {
                  color: iconColor ? color.VKonTakte : color.Fiord,
                },
              ]}>
              To-do List
            </Text>
          </View>
        );
      default:
        return (
          <View style={localStyle.iconAndNameContainer}>
            <View
              style={{
                marginBottom: verticalScale(11),
              }}>
              <WhatsappIcon
                fill={iconColor ? color.WhatAppBGColor : color.Fiord}
                height={22}
                width={22}
              />
            </View>
            <Text
              style={[
                localStyle.iconName,
                {
                  color: iconColor ? color.WhatAppBGColor : color.Fiord,
                },
              ]}>
              What's app
            </Text>
          </View>
        );
    }
  };

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: verticalScale(72),
        justifyContent: 'space-evenly',
        backgroundColor: color.White,
      }}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={`nav${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: scale(80),
              height: verticalScale(70),
            }}>
            {getIcon(index, isFocused)}
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        headerShown: false,
        tabBarBackground: () => (
          <View/>
        ),
      }}>
      <Tab.Screen name="WhatsappStack" component={WhatsappStack} />
      <Tab.Screen name="YouTubeStack" component={YouTubeStack} />
      <Tab.Screen name="TodolistStack" component={TodolistStack} />
    </Tab.Navigator>
  );
};

const localStyle = StyleSheet.create({
  iconAndNameContainer: {
    height: verticalScale(48),
    alignItems: 'center',
  },
  iconName: {
    fontSize: 10,
    lineHeight: 12,
  },
});
export default BottomTab;
