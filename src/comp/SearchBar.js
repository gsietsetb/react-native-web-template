import C from 'consistencss';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fonts, isSmall, vColors, vImgs, vSizes} from '../design/vStyles';
import {searchInputs} from '../utils/mock';
import {trans} from '../utils/translations';
import {Tab} from './Cards';
import {InputDropdown} from './Wrapper';

export const SearchBar = ({
  icon = '🔍',
  text,
  onPress = () => {},
  onPressFilter,
  tabs,
  currentTab = 0,
  placeholder = 'Encuentra clínicas y especialistas',
}) => {
  const [currTab, setCurrTab] = useState(currentTab);
  const questions = currTab === 1 ? searchInputs.slice(0, 2) : searchInputs;
  return (
    <View>
      <View style={[C.h24]}>
        <FlatList
          data={tabs}
          extraData={currTab}
          style={[C.pt12]}
          horizontal
          renderItem={({item, index}) => (
            <Tab
              {...item}
              onSet={tab => setCurrTab(tab)}
              index={index}
              selected={currTab === index}
            />
          )}
        />
      </View>

      <TouchableOpacity
        onPress={onPress}
        style={[
          C.radius25,
          C.my6,
          C.bgWhite,
          isSmall ? [C.mr6] : [/*percWidth(respS ? 0.9 : 0.8),*/ C.maxw270],
          C.row,
          C.flex,
          C.itemsCenter,
          C.justifyBetween,
          C.pl3,
        ]}>
        {isSmall ? (
          <View style={[C.row, C.flex, C.p5, C.itemsCenter]}>
            <Image
              source={vImgs.lupa}
              style={[vSizes.box, C.mx2, C.tintPrimaryBlue]}
            />
            <TextInput
              style={[C.flex, fonts.textBold]}
              placeholderTextColor={vColors.black}
              placeholder={'Encontrar ' + tabs[currTab].title}
            />
          </View>
        ) : (
          <>
            {questions.map(
              (props, index) =>
                !(
                  index === 2 && currTab === 1
                ) /**Visita Online es index 1*/ && (
                  <InputDropdown
                    onPress={onPress}
                    {...props}
                    last={index === questions.length - 1}
                  />
                ),
            )}
            {!isSmall && (
              <LinearGradient
                colors={[vColors.primaryBlue, vColors.primaryGreen]}
                style={[C.row, C.itemsCenter, C.p4, C.px6, C.radius10, C.mx3]}
                useAngle
                angle={90}>
                <Image
                  source={vImgs.lupa}
                  style={[vSizes.box, C.mx2, C.tintWhite]}
                />
                <Text style={[fonts.body1, C.textWhite]}>
                  {trans('Buscar')}
                </Text>
              </LinearGradient>
            )}
          </>
        )}

        {/*{!isSmall && (
      <LinearGradient
        colors={[vColors.primaryBlue, vColors.primaryGreen]}
        style={[C.row, C.p2, C.itemsCenter, C.p4, C.radius10, C.mx3]}
        useAngle
        angle={90}>
        <Image source={vImgs.lupa} style={[vSizes.wrap, C.mx2, C.tintWhite]} />
        <Text style={[fonts.body1, C.textWhite]}>{trans('Buscar')} </Text>
      </LinearGradient>
    )}
*/}
        {/*<Text onPress={onPressIcon}>{icon}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={vColors.primaryBlue}
      style={[C.ml2, C.flex]}
    />*/}
      </TouchableOpacity>
    </View>
  );
};
