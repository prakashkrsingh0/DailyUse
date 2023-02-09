import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../theme';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomeButton from '../../components/customeButton';
import Cross from '../../assets/icons/cross.svg';
import CustomeModal from '../../components/customeModal';
import SQlite, {openDatabase} from 'react-native-sqlite-storage';

const Todolist = () => {
  const [itemName, setItemName] = useState<string>('');
  const [list, setList] = useState<any[]>([]);
  const [isEditItemModalOpen, setEditItemModalOpen] = useState(false);
  const [editItemIndex, setEditItemIndex] = useState(-1);
  const [updateItem, setUpdateItem] = useState('');
  const [listTitle, setListTitle] = useState('');
  const [addListTitle, setAddListTitle] = useState('title');
  var db = openDatabase(
    {
      name: 'ToDoDatabase.db',
      location: 'default',
      createFromLocation: '~SQLite.db',
    },
    success => {
      console.log('skndfkjsd', success);
    },
    error => {
      console.log('ERROR: ', error);
    },
  );

  const handleAddItemMethod = (todo: any) => {
    const newTodos = [...list];
    const isItemExist = list.find(o => o === todo);
    if (isItemExist) {
      Alert.alert('alert', 'already save items');
    } else {
      newTodos.push(todo);
      setItemName('');
      setList(newTodos);
    }
  };

  const handleAddTitleMethod = () => {
    setAddListTitle(listTitle);
  };
  const deleteItem = (index: number) => {
    const undateItemList = [...list];
    undateItemList.splice(index, 1);
    setList(undateItemList);
  };
  const saveIntoDb = () => {
    // db.transaction(function (tx) {
    //   tx.executeSql(
    //     'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
    //     [userName, userContact, userAddress],
    //     (tx, results) => {
    //       console.log('Results', results.rowsAffected);
    //       if (results.rowsAffected > 0) {
    //         Alert.alert(
    //           'Success',
    //           'You are Registered Successfully',
    //           [
    //             {
    //               text: 'Ok',
    //               onPress: () => navigation.navigate('HomeScreen'),
    //             },
    //           ],
    //           { cancelable: false }
    //         );
    //       } else {alert('Registration Failed');}
    //     }
    //   );
    // });
  };

  //item:string, index:number

  const updateItemMethod = () => {
    console.log('updateItem : ', updateItem, 'editItemIndex : ', editItemIndex);
    const tempArray = [...list];
    tempArray.splice(editItemIndex, 1);
    tempArray.push(updateItem);
    setList(tempArray);
    setEditItemModalOpen(false);
  };

  const editItem = () => {
    return (
      <CustomeModal
        closeModal={() => setEditItemModalOpen(false)}
        isModalVisible={isEditItemModalOpen}
        ModalFromTop={180}
        heightOfModal={400}
        // key={index}
        modalBackgroundColor={color.VKonTakte}
        animationType={'slide'}>
        <View
          style={{
            paddingHorizontal: scale(15),
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: 35,
                textAlign: 'center',
                color: color.White,
              }}>
              Update Item
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: color.White,
              borderRadius: 10,
              width: scale(220),
              marginTop: verticalScale(20),
            }}>
            <TextInput
              placeholder={list[editItemIndex]}
              placeholderTextColor={color.White}
              // value={list[editItemIndex]}
              style={{
                color: color.White,
              }}
              onChangeText={(value: any) => setUpdateItem(value)}
            />
          </View>
          <CustomeButton
            buttonContainerStyle={{
              paddingVertical: verticalScale(15),
              marginTop: verticalScale(36),
              borderRadius: scale(8),
              alignItems: 'center',
              backgroundColor: color.White,
              marginBottom: verticalScale(30),
              width: scale(150),
              alignSelf: 'center',
            }}
            onPressMethod={() => updateItemMethod()}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 27,
                color: color.VKonTakte,
                textAlign: 'center',
              }}>
              Save
            </Text>
          </CustomeButton>
        </View>
      </CustomeModal>
    );
  };

  return (
    <View
      style={{
        paddingHorizontal: scale(10),
      }}>
      {editItem()}

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View></View>
        <View>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              color: color.VKonTakte,
            }}>
            Todo list
          </Text>
        </View>
        <View></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: verticalScale(20),
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: color.VKonTakte,
            borderRadius: 10,
            width: scale(220),
            height: verticalScale(33),
          }}>
          <TextInput
            placeholder="header List"
            value={listTitle}
            onChangeText={(value: any) => setListTitle(value)}
            style={{
              fontSize: 13,
            }}
          />
        </View>

        <CustomeButton
          buttonContainerStyle={{
            borderRadius: scale(8),
            backgroundColor: color.VKonTakte,
            paddingHorizontal: scale(10),
            height: verticalScale(30),
            paddingVertical: verticalScale(5),
          }}
          onPressMethod={() => handleAddTitleMethod()}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 27,
              color: color.White,
              textAlign: 'center',
            }}>
            list name
          </Text>
        </CustomeButton>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: verticalScale(20),
          height: verticalScale(33),
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: color.VKonTakte,
            borderRadius: 10,
            width: scale(230),
          }}>
          <TextInput
            placeholder="Please Enter your Item with Quantity"
            value={itemName}
            onChangeText={(value: any) => setItemName(value)}
            style={{
              fontSize: 13,
            }}
          />
        </View>

        <CustomeButton
          buttonContainerStyle={{
            borderRadius: scale(8),
            backgroundColor: color.VKonTakte,
            paddingHorizontal: scale(10),
            height: verticalScale(30),
            paddingVertical: verticalScale(5),
          }}
          onPressMethod={() => handleAddItemMethod(itemName)}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 27,
              color: color.White,
              textAlign: 'center',
            }}>
            Add to list
          </Text>
        </CustomeButton>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: verticalScale(10),
        }}>
        <TouchableOpacity
          onPress={() => {
            setList([]);
            setAddListTitle('');
          }}
          style={{
            borderColor: color.VKonTakte,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
          }}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('data get logged in DB')}
          style={{
            borderColor: color.VKonTakte,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            lineHeight: 27,
            color: color.Black,
            marginTop: verticalScale(10),
          }}>
          {addListTitle}
        </Text>
      </View>

      {list.length > 0 ? (
        <FlatList
          data={list}
          contentContainerStyle={{
            borderColor: color.VKonTakte,
            borderWidth: 1,
            borderRadius: scale(5),
            paddingHorizontal: scale(5),
            paddingVertical: verticalScale(10),
          }}
          renderItem={({item, index}) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: verticalScale(2.5),
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setEditItemModalOpen(true);
                      setEditItemIndex(index);
                    }}>
                    <Text>{item}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: color.VKonTakte,
                      width: verticalScale(15),
                      height: verticalScale(15),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: verticalScale(7.5),
                    }}
                    onPress={() => deleteItem(index)}>
                    <Cross
                      fill={color.White}
                      width={verticalScale(8)}
                      height={verticalScale(8)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default Todolist;
