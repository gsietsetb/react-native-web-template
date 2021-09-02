import C from 'consistencss';
import _ from 'lodash';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {bordColor, fonts, vColors, vShadow, vSizes} from '../design/vStyles';
import {trans} from '../utils/translations';
import {dotWrap} from './Cards';
import {RespRow, VButton} from './Wrapper';

export const VInput = observer(
  ({
    children,
    title,
    label,
    val,
    placeholder = 'John Smith',
    list,
    filterName,
    showAllDropdown,
    onSetVal = () => {},
    onChoose,
    onAdd,
    icon,
    full = false,
    highlight = true,
    center = true,
    valid = false,
    long,
    ExtraRight,
    wrapStyle,
  }) => {
    const [active, setActive] = useState(false);
    const [focused, setFocused] = useState(false);
    const [currText, setText] = useState('');
    /*const filtered = filterName ? item[filterName] : item;*/

    const results =
      focused && showAllDropdown
        ? list
        : list && (!_.isEmpty(currText) || !showAllDropdown)
        ? list?.filter(item =>
            (filterName ? item[filterName] : item)
              .toString()
              .toLowerCase()
              .includes(currText.toLowerCase()),
          )
        : [];
    const isEmpty = _.isEmpty(val);
    return (
      <View style={[C.mr4, C.flex]}>
        {title && (
          <Text numberOfLines={1} style={[fonts.textBold, C.my4, C.alignLeft]}>
            {title}
          </Text>
        )}
        <TouchableOpacity
          onPress={() => setFocused(true)}
          style={[
            C.px3,
            C.flex,
            C.itemsCenter,
            highlight ? C.bgWhite : C.bgPrimaryBlue,
            /*C.py2,*/
            bordColor(
              valid
                ? vColors.primaryGreen
                : !isEmpty
                ? vColors.primaryBlue
                : !active
                ? vColors.whiteThree
                : vColors.salmon,
              0.5,
            ),
            C.radius2,
            C.row,
            vShadow.regular,
            wrapStyle,
          ]}>
          {icon && <Text style={[C.mr3, vSizes.emojiSm]}>{icon}</Text>}

          <TextInput
            onChangeText={text => {
              setText(text);
              onSetVal(text);
            }}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            style={[C.flex, C.p2, fonts.body1]}
            placeholderTextColor={vColors.greyish}
            onTextInput={() => setActive(true)}
            onResponderRelease={() => setActive(false)}
            numberOfLines={long ? 4 : 1}
            value={currText}
          />
          {focused && onAdd && (
            <TouchableOpacity
              style={[
                C.bgWhite,
                C.py2,
                C.px3,
                bordColor(vColors.whiteThree),
                C.radius1,
                C.ml1,
              ]}>
              <Text style={C.textPrimaryBlue}>{trans('+ Añadir')}</Text>
            </TouchableOpacity>
          )}

          <Text
            style={[
              fonts.textBold,
              !highlight ? C.textWhite : C.textPrimaryBlue,
              C.alignCenter,
            ]}>
            {label}
          </Text>
          {ExtraRight}
        </TouchableOpacity>

        {/**Dropdown Autosuggest*/}
        {focused && list && (
          <FlatList
            style={[C.bgWhite, C.maxhQuarter, C.p4, C.mb2]}
            data={showAllDropdown ? list : results.slice(0, 4)}
            ListHeaderComponent={
              !showAllDropdown && (
                <Text style={[C.textGreyish, fonts.subtitle]}>
                  {results.length} {trans(' clínicas')}
                </Text>
              )
            }
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[
                  C.row,
                  C.itemsCenter,
                  C.py3,
                  C.px4,
                  C.my2,
                  C.radius1,
                  C.bgWhiteTwo,
                ]}
                onPress={() => {
                  setFocused(false);
                  onChoose && onChoose(item);
                  setText(item?.name || item);
                }}>
                <Text
                  numberOfLines={1}
                  style={[fonts.body1, C.textPrimaryBlue]}>
                  {_.capitalize((item?.name || item).toString().toLowerCase())}
                </Text>
                {item.city && (
                  <Text numberOfLines={1} style={[fonts.subtitle, C.ml3]}>
                    {_.capitalize(item.city.toString().toLowerCase())}
                  </Text>
                )}
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  },
);

export const VisitTab = ({}) => {
  return (
    <View>
      {/**Servicios*/}
      <RespRow style={[C.mt5]}>
        <VInput
          title={'Servicios que ofreces'}
          placeholder={'Primera Visita'}
          icon={'🩺️'}
        />
        <VInput title={'Precio'} placeholder={'30€'} icon={'💰'} />
        <VInput
          title={'Duración'}
          placeholder={'60 min'}
          showAllDropdown
          icon={'⏰'}
          list={[15, 30, 45, 60, 75, 90, 120, 180]}
        />
        <TouchableOpacity style={[dotWrap, vSizes.sm, C.selfEnd]}>
          <Text style={[C.textPrimaryBlue, fonts.textBold, vSizes.emojiSm]}>
            +
          </Text>
        </TouchableOpacity>
      </RespRow>

      {/**Time Ranges*/}
      <VInput
        wrapStyle={[C.my5]}
        title={'¿Cuándo ofreces tus servicios en esta clínica? (Opcional)'}
        placeholder={'Lun, Vie 9-18h'}
        icon={'📅'}
        list={['Lunes', 'Martes', 'Miercoles']}
      />
    </View>
  );
};

export const WaitingListMail = ({}) => {
  return (
    <VInput
      wrapStyle={[C.bgWhiteTwo]}
      placeholder={'carlos.perez@gmail.com'}
      ExtraRight={<VButton title={'¡Avísame!'} />}
    />
  );
};
