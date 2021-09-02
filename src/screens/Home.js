import {useNavigation} from '@react-navigation/core';
import C from 'consistencss';
import {observer} from 'mobx-react-lite';

import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {CardWrapper, ChatBubble, VetCard} from '../comp/Cards';
import {SearchBar} from '../comp/SearchBar';
import {CircWrapper, TitleRow, Wrapper} from '../comp/Wrapper';
import {
  bgColor,
  bordColor,
  cardWrapper,
  deviceWidth,
  fonts,
  isWeb,
  vColors,
} from '../design/vStyles';
import {signedIn} from '../routes';
import {trans} from '../utils/translations';

export const Home = observer(() => {
  const [list, setList] = useState(mockUsers);
  const QuickActions = (index, qaItem) => {
    return (
      <TouchableOpacity
        style={[cardWrapper, C.bgSoftPink, C.top2, C.h18, C.justifyCenter]}>
        <Text style={[fonts.textBold, C.alignRight, C.textWhite, C.pr4]}>
          {trans('Eliminar')}
        </Text>
      </TouchableOpacity>
    );
  };
  const addItem = item => setList(prevList => [item, ...prevList]);
  const {navigate} = useNavigation();
  return (
    <Wrapper
      /*title={'Home'}
      icon={'💬'}*/
      colorful
      HeaderChild={
        <View>
          <View style={[C.row, C.itemsCenter, C.py4]}>
            <Text style={[C.textWhite, fonts.textBold, C.mr4]}>👋</Text>
            <Text style={[C.textWhite, fonts.textBold]}>
              {trans('Filtra por tu mascota')}
            </Text>
          </View>

          {/**Add animals*/}
          <FlatList
            horizontal
            style={[{width: deviceWidth * 0.96}]}
            contentContainerStyle={[C.selfStart]}
            ListHeaderComponent={() => (
              <TouchableOpacity
                onPress={() => {}}
                style={[C.itemsCenter, C.maxw16]}>
                <CircWrapper
                  wrapStyle={[
                    bordColor(vColors.white),
                    {borderStyle: 'dashed'},
                  ]}>
                  <Text style={[fonts.title1, C.textWhite]}>+</Text>
                </CircWrapper>
                <Text
                  style={[C.textWhite, fonts.body1, C.alignCenter]}
                  numberOfLines={2}>
                  {trans('Añadir mascota')}
                </Text>
              </TouchableOpacity>
            )}
            data={Object.values(animalGroups.BIG)}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => {}} style={[C.itemsCenter]}>
                <CircWrapper>
                  <Text>{item.icon}</Text>
                </CircWrapper>
                <Text style={[C.textWhite, fonts.body1]}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          {/**SearchBar*/}
          <SearchBar
            onPress={() => navigate(signedIn.VetList.name)}
            placeholder={'Centros veterinarios o especialistas'}
          />

    </Wrapper>
  );
});
