import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import Cross from '../../assets/icons/cross.svg';
// import ModalTopBar from '../../assets/icons/modalTopBar.svg';
import {color} from '../../theme';
import styles from './styles';

interface CustomeModalProps {
  isModalVisible: boolean;
  closeModal: any;
  children: React.ReactElement;
  heightOfModal?: number;
  ModalFromTop?: number;
  animationType?: string | 'none';
  modalBackgroundColor?: string;
}

const CustomeModal = (props: CustomeModalProps) => {
  return (
    <Modal
      visible={props.isModalVisible}
      transparent={true}
      animationType={'slide'}>
      <TouchableOpacity
        style={{
          backgroundColor: color.Black_Opacity_02,
          flex: 1,
          paddingTop: verticalScale(90),
        }}
        onPress={props.closeModal}>
        <View
          style={[
            styles.modalStyle,
            {
              height: props.heightOfModal,
              top: props.ModalFromTop,
              backgroundColor: props.modalBackgroundColor,
            },
          ]}>
          <TouchableWithoutFeedback>
            <View style={styles.iconsContainer}>
              <View />
              {/* <ModalTopBar /> */}
              <TouchableOpacity
                onPress={props.closeModal}
                style={styles.crossConatiner}>
                <Cross width={15} height={15} fill = {color.Fiord}/>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>{props.children}</TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomeModal;
