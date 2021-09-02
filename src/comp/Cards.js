import C from 'consistencss';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  bgColor,
  bordColor,
  cardWrapper,
  fonts,
  isSmall,
  isWide,
  respL,
  textColor,
  tintColor,
  vColors,
  vImgs,
  vShadow,
  vSizes,
} from '../design/vStyles';
import {CircWrapper} from './Wrapper';

export const dotWrap = [
  C.radius15,
  bordColor(vColors.primaryBlue),
  vSizes.lg,
  C.itemsCenter,
  C.justifyCenter,
  C.m4,
  {borderStyle: 'dashed'},
];
export const cardWrapStyle = [
  C.itemsCenter,
  C.justifyStart,
  C.radius3,
  bgColor(vColors.white),
  C.mr10,
  C.my5,
  C.p5,
  vShadow.highlightSel,
  isWide ? C.w60 : C.flex,
];

export const VCard = ({
  icon,
  name,
  address,
  city,
  descr,
  children,
  onPress,
  highlight,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      cardWrapStyle,
      bordColor(
        highlight ? vColors.primaryBlue : vColors.whiteThree,
        highlight ? 2 : 1,
      ),
      highlight ? vShadow.highlightSel : vShadow.highlight,
    ]}>
    {children}
  </TouchableOpacity>
);

export const tagWrap = [
  C.itemsCenter,
  C.justifyCenter,
  C.row,
  C.radius2,
  bgColor(vColors.whiteTwo),
  C.mr3,
  C.mb3,
  C.px4,
  C.py2,
];
export const MojiBubble = ({onPress, checked, icon, name}) => (
  <TouchableOpacity onPress={onPress} style={[C.itemsCenter, C.mr5]}>
    <CircWrapper
      bordCol={checked ? vColors.primaryBlue : vColors.whiteThree}
      wrapStyle={[C.bgWhiteTwo]}>
      <Text style={[vSizes.emojiLg]}>{icon}</Text>
    </CircWrapper>
    <Text
      style={[checked ? C.textPrimaryBlue : C.textGreyish, fonts.body1, C.mt2]}>
      {name}
    </Text>
  </TouchableOpacity>
);
export const VCheck = ({
  onPress,
  checked,
  circ,
  outline,
  title,
  text,
  checkCol = vColors.primaryBlue,
  wrapStyle,
}) => {
  const wrap = [C.row, C.itemsCenter, wrapStyle];
  const Content = (
    <>
      <View
        style={[
          outline
            ? tintColor(checkCol)
            : checked
            ? bgColor(checkCol)
            : bordColor(vColors.greyish),
          circ ? C.radius10 : C.radius1,
          C.itemsCenter,
          C.justifyCenter,
          vSizes.icon,
        ]}>
        {checked && (
          <Text style={[outline ? textColor(checkCol) : C.textWhite]}>✓</Text>
        )}
      </View>
      {text && (
        <Text style={[title ? fonts.textBold : fonts.body1, C.ml3]}>
          {text}
        </Text>
      )}
    </>
  );
  return onPress ? (
    <TouchableOpacity style={wrap} onPress={onPress}>
      {Content}
    </TouchableOpacity>
  ) : (
    <View style={wrap}>{Content}</View>
  );
};
export const VTag = ({
  icon,
  name,
  descr,
  children,
  onPress,
  highlight,
  wrapStyle,
  textStyle,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      tagWrap,
      bordColor(
        highlight ? vColors.primaryBlue : vColors.whiteThree,
        highlight ? 2 : 1,
      ),
      highlight ? vShadow.highlightSel : vShadow.highlight,
      wrapStyle,
    ]}>
    {icon && <Text style={[C.mr2, vSizes.emojiSm]}>{icon}</Text>}
    {name && (
      <Text
        style={[highlight && C.textPrimaryBlue, fonts.littleText, textStyle]}>
        {name}
      </Text>
    )}
    {children}
  </TouchableOpacity>
);
export const EmojiCard = ({icon, name, descr, onPress}) => (
  <TouchableOpacity
    onPress={() => onPress({icon, name, descr})}
    style={[cardWrapper, vSizes.lg, C.mr4, C.my2, C.p2, C.itemsCenter]}>
    <View
      style={[
        C.bgWhiteTwo,
        C.radius12,
        C.itemsCenter,
        C.justifyCenter,
        C.mb2,
        vSizes.med,
      ]}>
      <Text style={[C.font8]}>{icon}</Text>
    </View>
    <Text style={[fonts.subtitle, C.textBlack]}>{name}</Text>
  </TouchableOpacity>
);

export const ChatCard = ({img, name, descr, subtitle}) => (
  <TouchableOpacity
    style={[cardWrapper, C.wFull, C.row, C.mr4, C.my2, C.p2, C.itemsCenter]}>
    <ChatBubble img={img} />
    <View style={[C.mx4]}>
      <Text style={[fonts.subtitle, C.textPrimaryBlue]}>{name}</Text>
      <Text style={[fonts.subtitle]}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

export const CardWrapper = ({children, onPress}) => (
  <TouchableOpacity
    style={[
      bordColor(vColors.greyish + '40'),
      /*{maxWidth: deviceWidth * 0.2},*/
      C.maxw25,
      C.m2,
      C.p1,
      C.radius2,
    ]}>
    {children}
  </TouchableOpacity>
);

const socialWrap = [
  fonts.subtitle,
  /*{width: deviceWidth * 0.4},*/
  C.maxwHalf,
  C.my1,
  C.textPrimaryBlue,
];

export const VetCard = ({
  children,
  img,
  name,
  address,
  type,
  locations,
  email,
  city,
  province,
  community,
  phone,
  FACEBOOK,
  INSTAGRAM,
  TWITTER,
  specialities,
  specialists,
}) => (
  <TouchableOpacity
    style={[
      bordColor(vColors.greyish + '40'),
      C.bgWhite,
      C.my2,
      C.mx5,
      C.p4,
      C.radius2,
    ]}>
    <View style={[C.row, C.itemsCenter]}>
      {img ? (
        <ChatBubble img={img} status />
      ) : (
        <CircWrapper>
          <Text style={[vSizes.emojiLg]}>{'🏥'}</Text>
        </CircWrapper>
      )}
      <View style={[C.ml3, C.flex]}>
        <Text style={[fonts.textBold, C.textPrimaryBlue]}>{name}</Text>
        <Text style={[fonts.textBold, C.textGrey]} numberOfLines={2}>
          {type} {specialities?.map(item => item + ' · ')}
        </Text>
        <View style={[C.row, C.itemsCenter]}>
          <Text style={[fonts.textBold]}>
            {(Math.random() * 4 + 1).toFixed(1)}️
          </Text>
          <Text> ⭐ ️</Text>
          <Text style={[fonts.body1, C.textGreyish]}>
            ( {(Math.random() * 162).toFixed(0)}️)
          </Text>
        </View>
        <Text style={[fonts.subtitle, C.textGreyish]}>
          {address}, {province} {city}
        </Text>
      </View>
      <View style={[C.ml2, C.flex]}>
        {phone && (
          <Text numberOfLines={1} style={[socialWrap, C.textBlack]}>
            📞 {'\t'} {phone}️
          </Text>
        )}
        {email && (
          <Text numberOfLines={1} style={[socialWrap]}>
            ✉️{'\t'} {email}️
          </Text>
        )}
        {INSTAGRAM && (
          <Text numberOfLines={1} style={[socialWrap]}>
            📷 {'\t'} {INSTAGRAM}
          </Text>
        )}
        {FACEBOOK && (
          <Text numberOfLines={1} style={[socialWrap]}>
            👤{'\t'} {FACEBOOK}
          </Text>
        )}
        {TWITTER && (
          <Text numberOfLines={1} style={[socialWrap]}>
            🐦{'\t'} {TWITTER}
          </Text>
        )}
      </View>
    </View>
    {/**Locations*/}
    <FlatList data={locations} renderItem={({item, index}) => <View />} />
    {children}
  </TouchableOpacity>
);
export const pillWrapper = [
  C.mr3,
  C.mb3,
  C.radius2,
  C.itemsCenter,
  C.py3,
  C.px4,
  C.row,
  bgColor(vColors.white + '20'),
];

export const Tag = ({text, col = vColors.primaryGreen}) => (
  <Text style={[bgColor(col), C.p1, C.mx1, C.radius1, fonts.littleText]}>
    {text}
  </Text>
);
export const LandingCard = ({
  img,
  icon,
  tag,
  col,
  title,
  descr,
  size = respL ? vSizes.cardBig : vSizes.card,
}) => (
  <View style={[size[0], C.itemsStart, C.mr10]}>
    <Image
      source={img}
      resizeMode={'contain'}
      style={[size, C.selfLeft, respL && C.my10]}
    />
    <View style={[C.row, C.mb5, respL ? C.mt_2 : C.mt_4, C.mr8, C.itemsCenter]}>
      <Image
        source={icon}
        style={[vSizes.box, col ? tintColor(col) : C.tintBlack]}
      />
      <Text style={[fonts.title1, col && textColor(col), C.mx3]}>{title}️</Text>
      {tag && <Tag text={tag} />}
    </View>
    <Text style={[fonts.body1]}>{descr}️</Text>
  </View>
);

export const ClinicSelector = ({img, name}) => (
  <View style={[C.row, C.m4, C.itemsCenter]}>
    <ChatBubble img={img} name={name} horiz />
    <Image source={vImgs.chevronDown} />
  </View>
);

export const ChatBubble = ({
  img,
  name,
  status = true,
  statusMoji,
  rate,
  subtitle,
  horiz = false,
}) => (
  <View style={[horiz && C.row, C.m1, C.itemsCenter]}>
    <View style={[C.radius8, bordColor(vColors.greyish + '40', 2)]}>
      <Image source={{uri: img}} style={[vSizes.med, C.radius6]} />
      {status && (
        <View
          style={[
            C.radius4,
            statusMoji ? vSizes.box : vSizes.bubble,
            C.bgGreenishTeal,
            C.absolute,
            C.left10,
            C.itemsCenter,
            C.justifyCenter,
            C.bottom0,
          ]}>
          {statusMoji && <Text style={[C.font3]}>{statusMoji}</Text>}
        </View>
      )}
    </View>
    {name && (
      <Text numberOfLines={1} style={[fonts.textBold, C.my1, C.alignCenter]}>
        {name}
      </Text>
    )}
    {subtitle && (
      <Text numberOfLines={1} style={[fonts.subtitle]}>
        {subtitle}
      </Text>
    )}
    {rate && (
      <Text style={[fonts.body1, C.textGrey]}>
        {Number(rate).toFixed(1)} ⭐️
      </Text>
    )}
  </View>
);

export const TabSelector = ({current = 0, list, onPress}) => {
  const [curr, setCurr] = useState(current);
  const selWRap = ind =>
    curr === ind && [
      bordColor(vColors.white),
      C.radius25,
      bgColor(vColors.white + '10'),
    ];
  return (
    <View style={[C.row, C.itemsCenter, C.mt12, C.h15]}>
      <FlatList
        data={list}
        extraData={curr}
        horizontal
        renderItem={({item, index}) => {
          const {title, icon, tag, titleShort} = item;
          return (
            <TouchableOpacity
              onPress={() => setCurr(index)}
              style={[
                C.px4,
                C.py3,
                isSmall ? C.mr4 : C.mr7,
                C.row,
                selWRap(index),
              ]}>
              <Image source={icon} style={[vSizes.box, C.mr2, C.tintWhite]} />
              <Text style={[fonts.textBold, C.textWhite]}>
                {isSmall ? titleShort : title}
              </Text>
              {tag && <Tag text={tag} />}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export const Tab = ({title, icon, tag, titleShort, onSet, selected, index}) => (
  <TouchableOpacity
    onPress={() => onSet(index)}
    style={[
      C.px4,
      C.py3,
      isSmall ? C.mr4 : C.mr7,
      C.row,
      selected && [
        bordColor(vColors.white),
        C.radius25,
        bgColor(vColors.white + '10'),
      ],
    ]}>
    <Image source={icon} style={[vSizes.box, C.mr2, C.tintWhite]} />
    <Text style={[fonts.textBold, C.textWhite]}>
      {isSmall ? titleShort : title}
    </Text>
    {tag && <Tag text={tag} />}
  </TouchableOpacity>
);

export const CollapseCard = ({
  icon = '🎥',
  title = 'Banderas',
  tag,
  expand = false,
  children,
}) => {
  const [collapsed, toggleCollapse] = useState(!expand);
  return (
    <VTag highlight={!collapsed} onPress={() => toggleCollapse(!collapsed)}>
      <View style={[C.wFull]}>
        <View style={[C.row, C.itemsCenter]}>
          <View style={[C.row, C.itemsCenter, C.flex]}>
            <Image
              source={icon}
              style={[
                vSizes.box,
                !collapsed ? C.tintPrimaryBlue : C.tintBlack,
                C.mr3,
              ]}
            />
            <Text style={[fonts.body1, !collapsed && C.textPrimaryBlue]}>
              {title}
            </Text>
            {tag && <Tag text={tag} />}
          </View>
          {/*<Image source={vImgs.lupa} style={[vSizes.wrap, C.tintPrimaryBlue]} />*/}
          {/*<VCheck checked={!collapsed} />*/}
          <Switch
            /*tintColor={vColors.primaryBlue}*/
            /*thumbColor={vColors.primaryBlue}*/
            /*trackColor={vColors.greyishBrown}*/
            tintColor={vColors.primaryBlue}
            onTintColor={vColors.primaryGreen}
            thumbColor={vColors.white}
            trackColor={{true: vColors.greyish, false: vColors.greyish}}
            value={!collapsed}
          />
        </View>
        {collapsed ? <View /> : children}
      </View>
    </VTag>
  );
};
