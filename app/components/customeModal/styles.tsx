import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {color} from '../../theme';

const styles = StyleSheet.create({
  crossConatiner: {
    backgroundColor: color.AthensGray,
    height: scale(20),
    width: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:scale(5)
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(340),
  },
  modalStyle: {
    backgroundColor: color.White,
    borderTopRightRadius: scale(8),
    borderTopLeftRadius: scale(8),
    paddingTop: verticalScale(10),
  },
});

export default styles;
