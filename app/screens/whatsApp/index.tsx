import React, {useState} from 'react';
import {View, Text, TextInput, Linking, Alert} from 'react-native';
import {color} from '../../theme';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomeButton from '../../components/customeButton';

const Whatsapp = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const onChangeWhatsAppNumber = (value: string) => {
    setMobileNumber(value);
  };

  const onPressWhatsApp = () => {
    if (mobileNumber.length === 10) {
      Linking.openURL(`https://wa.me/+91${mobileNumber}`);
    } else {
      Alert.alert('Alert', 'Please enter correct 10 digit mobile number');
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}>
      <View>
        <Text
          style={{
            fontSize: 55,
            textAlign: 'center',
            color: color.WhatAppBGColor,
          }}>
          What's app
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: color.WhatAppBGColor,
          borderRadius: 10,
          width: scale(200),
          alignSelf: 'center',
          marginTop: verticalScale(80),
        }}>
        <TextInput
          placeholder="Enter Your Phone number?"
          style={{
            textAlign: 'center',
          }}
          maxLength={10}
          onChangeText={value => onChangeWhatsAppNumber(value)}
          keyboardType={'number-pad'}
        />
      </View>

      <CustomeButton
        buttonContainerStyle={{
          paddingVertical: verticalScale(15),
          marginTop: verticalScale(176),
          borderRadius: scale(8),
          alignItems: 'center',
          backgroundColor: color.WhatAppBGColor,
          marginBottom: verticalScale(30),
          width: scale(250),
          alignSelf: 'center',
        }}
        onPressMethod={() => onPressWhatsApp()}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 27,
            color: color.White,
            textAlign: 'center',
          }}>
         {`Message on entered number`}
        </Text>
      </CustomeButton>
    </View>
  );
};

export default Whatsapp;
