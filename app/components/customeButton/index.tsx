import React from 'react';
import {TouchableOpacity} from 'react-native';

interface CustomeButtonProps {
  buttonContainerStyle?: any;
  onPressMethod?: any;
  children: any;
}

const CustomeButton = (props: CustomeButtonProps) => {
  return (
    <TouchableOpacity
      style={props.buttonContainerStyle}
      onPress={()=>props.onPressMethod()}>
      {props.children}
    </TouchableOpacity>
  );
};

export default CustomeButton;
