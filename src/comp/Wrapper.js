import { useNavigation } from '@react-navigation/core';
import C from 'consistencss';
import _ from 'lodash';
import moment from 'moment';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bgColor, bordColor, deviceHeight, deviceWidth, docs, fonts, isIOS, isSmall, isWide, links, maxWidth, onTop, percHeight, percWidth, respL, respS, respWidth, respWrap, tintColor, vColors, vImgs, vShadow, vSizes } from '../design/vStyles';
import { headerNav } from '../routes';
import { allAnimals, weekdayNames } from '../utils/mock';
import { trans } from '../utils/translations';
import { Tag, VCheck } from './Cards';
import { VInput, WaitingListMail } from './Form';

export const Header = ({ navigate, current, highlight, whiteLogo }) => (
  <View
    style={[C.row, respWrap, C.mt10, C.itemsCenter, C.justifyBetween, onTop()]}>
    <TouchableOpacity onPress={() => navigate(headerNav[0].name)}>
      <Image
        source={whiteLogo ? vImgs.logoWhite : vImgs.logo}
        resizeMode={'contain'}
        style={[vSizes.xl, C.mr3]}
      />
    </TouchableOpacity>

    <View style={[C.row, C.itemsCenter]}>
      {headerNav.slice(isSmall && 1).map(({ name, title }) => (
        <TouchableOpacity
          onPress={() => navigate(name)}
          style={[
            C.p4,
            C.mx4,
            highlight === name && [C.radius1, bordColor(vColors.white)],
            current === name && [C.radius1, C.bgWhite],
          ]}>
          <Text
            style={[
              fonts.textBold,
              current === name ? C.textPrimaryBlue : C.textWhite,
            ]}>
            {title || name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const footerArea = [
  isSmall
    ? [C.my4, C.selfStart, maxWidth(0.8)]
    : [C.h50, C.justifyBetween, C.mr6],
];
export const Footer = () => (
  <View style={[C.bgPrimaryBlue, C.wFull]}>
    <View
      style={[
        C.py12,
        C.bgPrimaryBlue,
        respL ? [C.maxw300, C.selfCenter] : [C.px10, C.mx10],
        isSmall ? [C.flex, C.mx10] : [C.row],
        C.wFull,
        C.itemsCenter,
        C.justifyBetween,
      ]}>
      {/**Logo*/}
      <View style={footerArea}>
        <Image source={vImgs.logo} resizeMode={'contain'} style={[vSizes.xl]} />
        <Text style={[fonts.subtitle, C.textWhite]}>
          {trans('© VetEasy 2021')}
        </Text>
      </View>

      {/**Contact*/}
      <View
        style={
          footerArea /*[
        C.justifyBetween,
        C.flex,
        isSmall ? C.my4 : C.h50,
        C.mx16,
        C.alignLeft,
        !isSmall && maxWidth(0.4),
      ]*/
        }>
        <View>
          <Text style={[fonts.title1, C.textWhite, C.mb4]}>
            {trans('¡Te avisamos cuando VetEasy esté disponible!')}
          </Text>
          <WaitingListMail />
        </View>

        <View style={[C.row, C.mt10]}>
          <Text
            onPress={() => window.open(docs.cookies, '_blank')}
            style={[fonts.subtitle, C.textWhite]}>
            {trans('Política de cookies')}
          </Text>
          <Text
            style={[fonts.subtitle, C.textWhite, C.mx5]}
            onPress={() => window.open(docs.privacy, '_blank')}>
            {trans('Política de privacidad')}
          </Text>
          <Text
            style={[fonts.subtitle, C.textWhite]}
            onPress={() => window.open(docs.legal, '_blank')}>
            {trans('Aviso legal')}
          </Text>
        </View>
      </View>

      <View
        style={[
          footerArea /*C.justifyStart, isSmall ? [C.my4, respWidth] : C.h50*/,
        ]}>
        <Text style={[fonts.title1, C.textWhite]}>{trans('¡Síguenos!')}</Text>
        <Text
          style={[
            fonts.subtitle,
            C.textWhite,
            C.my5,
            !isSmall && maxWidth(0.16),
          ]}>
          {trans(
            'Información, consejos para tu mascota y... ¡mucho más! ¡Súmate a la família VetEasier!',
          )}
        </Text>
        <View style={[C.row, C.itemsStart]}>
          <TouchableOpacity
            onPress={() => window.open(links.instagram, '_blank')}>
            <Image
              source={vImgs.greenInstagram}
              resizeMode={'contain'}
              style={[vSizes.box, C.mr8]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => window.open(links.liknedn, '_blank')}>
            <Image
              source={vImgs.greenLinkedIn}
              resizeMode={'contain'}
              style={[vSizes.box, C.mr8]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export const VButton = ({
                          title,
                          icon,
                          img,
                          circle = false,
                          colorful = true,
                          full = false,
                          border = vColors.primaryBlue,
                          highlight = true,
                          center = true,
                          wrapStyle,
                          onPress = () => {
                          },
                        }) => {
  const Content = (
    <View style={[C.row, C.itemsCenter]}>
      {icon && <Text style={[C.font8, title && C.mr4]}>{icon}</Text>}
      {img && <Image style={[vSizes.box, title && C.mr4]} source={img} />}
      {title && (
        <Text
          style={[
            fonts.textBold,
            !highlight || colorful ? C.textWhite : C.textPrimaryBlue,
            C.alignCenter,
          ]}>
          {title}
        </Text>
      )}
    </View>
  );
  const wrap = [
    full && C.wFull,
    C.row,
    C.itemsCenter,
    center ? C.justifyCenter : C.justifyStart,
    circle && vSizes.lg,
    vShadow.highlight,
    wrapStyle,
  ];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        wrap,
        C.py3,
        circle ? C.radius16 : C.radius1,
        !highlight && !circle /*? C.px4 :*/ && C.px6,
      ]}>
      {!highlight ? (
        Content
      ) : (
        <LinearGradient
          colors={[vColors.primaryBlue, vColors.primaryGreen]}
          style={[
            C.py3,
            !circle /*? C.px4 :*/ && C.px6,
            circle ? C.radius16 : C.radius1,
          ]}
          useAngle
          angle={90}>
          {Content}
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export const VTabs = ({
                        title,
                        icon,
                        img,
                        tabsName,
                        numTabs = 1,
                        currentTab,
                        circle = false,
                        full = false,
                        border = true,
                        highlight = true,
                        center = true,
                        onPress = () => {
                        },
                      }) => {
  const [currTab, setCurrent] = useState(currentTab);
  const [nTabs, setNTabs] = useState(numTabs);
  return (
    <View style={[C.row, C.itemsCenter, C.my7]}>
      <FlatList
        data={_.range(0, nTabs)}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={
          <TouchableOpacity
            onPress={() => {
              setNTabs(nTabs + 1);
              setCurrent(nTabs);
            }}
            style={[]}>
            <Text style={[fonts.textBold, C.textPrimaryBlue]}>
              {trans('+ Añadir otra clínica')}
            </Text>
          </TouchableOpacity>
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setCurrent(index)} style={[]}>
            <Text
              style={[
                currTab !== index
                  ? [C.textGreyishBrown, fonts.body1]
                  : [C.borderbottom1, fonts.textBold],
                C.mr10,
              ]}>
              {tabsName} {index + 1}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/*{tabs.map((item, index) => (
        <TouchableOpacity onPress={() => setCurrent(index)} style={[]}>
          <Text
            style={[
              fonts.textBold,
              currTab !== index ? C.textPrimaryBlue : C.borderbottom1,
              C.mr10,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}*/}

      {/*<TouchableOpacity
      onPress={onPress}
      style={[
        C.p2,
        C.px3,
        full && C.wFull,
        C.my4,
        C.row,
        C.itemsCenter,
        C.justifyCenter,
        !highlight ? C.bgWhite : C.bgPrimaryBlue,
        C.radius1,
        bordColor(),
        //!highlight ? C.opacity60 : C.opacity100,
        vShadow,
      ]}>
      {icon && <Text style={[C.font8, title && C.mr4]}>{icon}</Text>}
      {img && <Image style={[vSizes.sm]} source={img} />}
      {title && (
        <Text
          style={[
            fonts.textBold,
            highlight ? C.textWhite : C.textPrimaryBlue,
            C.alignCenter,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>*/}
    </View>
  );
};

export const VTab = ({
                       title,
                       icon,
                       img,
                       circle = false,
                       full = false,
                       border = true,
                       highlight = true,
                       center = true,
                       onPress = () => {
                       },
                     }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      C.p2,
      C.px3,
      full && C.wFull,
      C.my4,
      C.row,
      C.itemsCenter,
      C.justifyCenter,
      !highlight ? C.bgWhite : C.bgPrimaryBlue,
      C.radius1,
      bordColor(),
      vShadow,
    ]}>
    {icon && <Text style={[C.font8, title && C.mr4]}>{icon}</Text>}
    {img && <Image style={[vSizes.sm]} source={img} />}
    {title && (
      <Text
        style={[
          fonts.textBold,
          highlight ? C.textWhite : C.textPrimaryBlue,
          C.alignCenter,
        ]}>
        {title}
      </Text>
    )}
  </TouchableOpacity>
);

export const InputDropdown = ({
                                onPress = () => {
                                },
                                label,
                                list,
                                currItem = list?.[0],
                                last = true,
                                placeholder,
                              }) => (
  <View style={[C.itemsCenter, C.row]}>
    <TouchableOpacity
      onPress={onPress}
      style={[
        vShadow,
        C.flex,
        C.radius25,
        C.bgWhite,
        C.p3,
        respS ? C.mx3 : [C.ml6, C.mr15],
      ]}>
      <Text style={[fonts.textBold, C.alignStart, C.mr2]}>{label}</Text>
      <Text style={[fonts.body1, C.textGreyish, C.mt2, C.alignLeft]}>
        {placeholder || currItem.icon + ' ' + currItem.name}
      </Text>
    </TouchableOpacity>
    {!last && (
      <View
        style={[
          bordColor(vColors.whiteThree + '60', 0.4),
          C.h10,
          /*respS ? C.ml2 : C.ml4,*/
          C.selfCenter,
        ]}
      />
    )}
  </View>
);

export const Highlight = ({
                            onPress = () => {
                            },
                            title,
                            col = vColors.primaryBlue,
                            icon,
                            tag,
                            descr,
                          }) => (
  <View style={[C.flex, C.bgWhite, isSmall && [C.my6], C.mr8]}>
    <CircWrapper bordCol={col} icon={icon} />
    <Text style={[C.itemsCenter, fonts.title1, C.my4]}>
      {title}
      {tag && <Tag text={tag} col={vColors.primaryGreen} />}
    </Text>
    <Text style={[fonts.body1, C.alignLeft]}>{descr}</Text>
  </View>
);

export const GroupedBubbles = ({ list, length = isWide ? 3 : 4 }) => (
  <View style={[C.row, C.right_3]}>
    {list.slice(0, length).map(({ icon, img }) =>
      icon ? (
        <CircWrapper
          bordCol={vColors.white}
          wrapStyle={[C.ml_6, C.bgWhiteTwo, C.border1]}>
          <Text style={[vSizes.emojiSm]}>{icon}</Text>
        </CircWrapper>
      ) : (
        <Image
          source={img}
          style={[
            vSizes.lg,
            C.radius10,
            C.ml_6,
            C.bgWhiteTwo,
            bordColor(vColors.white),
          ]}
        />
      ),
    )}
    {list.length > length && (
      <CircWrapper
        bordCol={vColors.white}
        wrapStyle={[C.ml_6, C.bgWhiteTwo, C.border1]}>
        <Text>+{list.length - length}</Text>
      </CircWrapper>
    )}
  </View>
);
export const CircWrapper = ({
                              children,
                              onPress,
                              wrapStyle,
                              icon,
                              iconStyle,
                              size = vSizes.lg,
                              bordCol,
                            }) => {
  const wrap = [
    size,
    C.itemsCenter,
    C.justifyCenter,
    C.radius8,
    bgColor(vColors.white + '20'),
    bordColor(bordCol),
    wrapStyle,
  ];
  const Content = (
    <>
      {children}
      {icon && (
        <Image
          source={icon}
          style={[vSizes.box, iconStyle, bordCol && tintColor(bordCol)]}
        />
      )}
    </>
  );
  return onPress ? (
    <TouchableOpacity onPress={onPress} style={wrap}>
      {Content}
    </TouchableOpacity>
  ) : (
    <View style={[wrap]}>{Content}</View>
  );
};

export const TextWrapper = ({ text, center }) => (
  <View style={[C.m2]}>{text}</View>
);

export const TimeWrapper = ({ time, sel, onPress }) => {
  const [isSel, setSel] = useState(sel);
  return (
    <TouchableOpacity
      onPress={() => {
        setSel(!isSel);
        onPress();
      }}
      style={[
        /*isSel ? C.bgPrimaryBlue : */ C.bgWhiteTwo,
        C.radius1,
        C.m2,
        C.p2,
      ]}>
      {/* <Text>
        {isSel.toString()} {JSON.stringify(time)}
      </Text>*/}
      <Text
        style={[
          fonts.body1,
          C.alignCenter,
          isSel ? C.textPrimaryBlue : C.textGreyish,
        ]}>
        {moment(time, 'hh').format('H:mm')}
      </Text>
    </TouchableOpacity>
  );
};

export const TimeRangeSelector = () => {
  const [is24, set24] = useState(false);
  //const [currDay, setCurrDay] = useState(0);
  /* const [results, setResults] = useState(
    weekdayNames.map(item => ({key: item, show: true})),
  );*/

  return (
    <View style={[C.bgWhite]}>
      <View style={[C.row, C.itemsCenter]}>
        <Text style={[fonts.body1, C.mr4]}>
          {trans(
            'Indica los días y horas que puedes ofrecer el servicio Online',
          )}
        </Text>
        <VCheck
          checked={is24}
          onPress={() => {
            set24(!is24);
          }}
          text={trans('24h?')}
        />
        <VInput
          title={'Duración'}
          placeholder={'60 min'}
          showAllDropdown
          icon={'⏰'}
          list={[15, 30, 45, 60, 75, 90, 120, 180]}
        />
      </View>
      <FlatList
        data={weekdayNames}
        style={[C.my8]}
        horizontal
        extraData={[is24]}
        keyExtractor={(item, index) => item}
        renderItem={({ item, index }) => (
          <DayWrapper
            is24={is24}
            day={item}
            /*onPress={index =>
              setResults(prev => {
                const newResults = {...prev.resul};
                newResults[index].show = !results[index].show;
                return prev;
              })
            }*/
            sel={/*currDay ? index === currDay : item.show */ index < 5}
          />
        )}
      />
    </View>
  );
};

export const DayWrapper = ({ day, onPress, sel = true, is24 }) => {
  const [isSelected, setSel] = useState(sel);
  const renderList = useMemo(
    () => (
      <FlatList
        contentContainerStyle={[{ maxHeight: deviceHeight * 0.5 }]}
        data={_.range(is24 ? 0 : 8, is24 ? 24 : 21)}
        keyExtractor={item => item}
        extraData={isSelected}
        renderItem={({ item, index }) => (
          <TimeWrapper
            onPress={() => {
              setSel(sel);
              /*onPress(index);*/
            }}
            sel={isSelected}
            time={item}
          />
        )}
      />
    ),
    [is24, isSelected, sel],
  );
  return (
    <View
      style={[
        C.justifyCenter,
        C.itemsCenter,
        { width: (deviceWidth * 0.8) / 5 },
      ]}>
      <VCheck
        checked={isSelected}
        onPress={() => setSel(!isSelected)}
        text={day}
      />
      {/*<Text>{isSelected.toString()}</Text>*/}
      {/*{renderList}*/}
      <FlatList
        contentContainerStyle={[{ maxHeight: deviceHeight * 0.5 }]}
        data={_.range(is24 ? 0 : 8, is24 ? 24 : 21)}
        keyExtractor={item => item}
        extraData={isSelected}
        renderItem={({ item, index }) => (
          <TimeWrapper
            onPress={() => {
              setSel(sel);
            }}
            sel={isSelected}
            time={item}
          />
        )}
      />
    </View>
  );
};

const useComponentSize = () => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback(event => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

/***LAYOUT RELATED*/
export const RespRow = ({ children, style }) => (
  <View style={[isSmall ? C.itemsCenter : C.row, respWrap, style]}>
    {children}
  </View>
);

/**Controlled scrollable component*/

export const ControlledScroll = ({
                                   list,
                                   initial = 0,
                                   steps = 4,
                                   renderItem,
                                 }) => {
  const [currItem, setCurrItem] = useState(initial);
  const scrollRef = useRef(null);
  /*useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToIndex({animated: true, index: 0});
    }
  }, [currItem]);*/
  return (
    <View style={[C.row, C.mt4, C.itemsCenter]}>
      {currItem > 0 && (
        <TouchableOpacity
          onPress={() => {
            const nextIndex = currItem - steps < 0 ? 0 : currItem - steps;
            if (scrollRef.current) {
              scrollRef.current.scrollToIndex({
                animated: true,
                index: nextIndex,
              });
              setCurrItem(nextIndex);
            }
          }}>
          <Image
            source={vImgs.chevronLeft}
            style={[vSizes.icon, C.tintPrimaryBlue, C.ml3]}
          />
        </TouchableOpacity>
      )}
      <FlatList
        horizontal
        keyExtractor={item => item.name}
        ref={scrollRef}
        onEndThreshold={0}
        /*onViewableItemsChanged={({index}) => setCurrItem(index)}*/
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={Object.values(allAnimals)}
        contentContainerStyle={[C.flex, percWidth(0.3) /*C.mb20*/]}
        renderItem={({ item, index }) => renderItem({ item, index, currItem })}
      />
      {currItem < list.length - 1 && (
        <TouchableOpacity
          onPress={() => {
            if (scrollRef.current) {
              const nextIndex =
                currItem + steps + 1 > list.length
                  ? list.length - 1
                  : currItem + steps;
              scrollRef.current.scrollToIndex({
                animated: true,
                index: nextIndex,
              });
              setCurrItem(nextIndex);
            }
          }}>
          <Image
            source={vImgs.chevronRight}
            style={[vSizes.icon, C.tintPrimaryBlue, C.ml3]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

/**Dynamic wrapper for */
export const SideContainer = ({
                                children,
                                colBg,
                                img,
                                bgGrad,
                                imgLeft,
                                imgSize = vSizes.cardHuge,
                                imgStyle,
                                imgRatio = 0.5,
                                full = true,
                                smallAbs,
                              }) => {
  const imgWrapper = [C.flex, !imgLeft ? C.itemsEnd : C.itemsStart];

  const contentWrapper = [
    C.flex,
    C.selfCenter,
    C.itemsStart,
    imgLeft ? C.mlQuarter : C.mrQuarter,
    C.py10,
    respWidth,
  ];
  const Img = (
    <Image
      source={img}
      resizeMode={'contain'}
      style={[
        C.flex,
        vSizes.cardHuge,
        C.selfLeft,
        imgStyle,
        onTop(false),
        imgSize,
      ]}
    />
  );
  const Content = isSmall ? (
    <View /*style={[respWidth]}*/>
      <View style={[C.p6, onTop()]}>{children}</View>
      <Image
        source={img}
        resizeMode={'contain'}
        style={[
          C.wFull,
          percHeight(imgRatio),
          smallAbs && [C.opacity30, C.absolute],
          imgStyle,
        ]}
      />
    </View>
  ) : (
    <View style={[respWrap, C.row, C.py10 /*, C.bgYellow*/]}>
      <View style={!imgLeft ? contentWrapper : imgWrapper}>
        {!imgLeft ? children : Img}
      </View>
      <View style={imgLeft ? contentWrapper : imgWrapper}>
        {imgLeft ? children : Img}
      </View>
    </View>
  );
  const wrapStyle = [
    colBg && bgColor(colBg),
    C.my10,
    full && percWidth(),
    C.itemsCenter,
  ];
  return bgGrad ? (
    <LinearGradient colors={bgGrad} style={wrapStyle} useAngle angle={90}>
      {Content}
    </LinearGradient>
  ) : (
    <View style={wrapStyle}>{Content}</View>
  );
};

/**Dynamic wrapper for */
export const SideAbsoluteContainer = ({
                                        children,
                                        colBg,
                                        img,
                                        bgGrad,
                                        imgLeft,
                                        imgRatio = 0.5,
                                        imgStyle,
                                        smallAbs,
                                        isAbs,
                                      }) => {
  const contentWrapper = [C.flex, C.selfCenter, C.itemsStart, C.py10];
  const Img = (
    <Image
      source={img}
      resizeMode={'contain'}
      style={[
        vSizes.cardHero,
        onTop(false),
        isAbs && imgLeft ? C.left20 : C.right20,
        isAbs && C.bottom_20,
        isAbs && C.absolute,
        respS && smallAbs && [C.opacity10, C.absolute],
        isAbs && imgStyle,
        imgLeft ? C.left0 : C.right0,
      ]}
    />
  );
  const Content = isSmall ? (
    <>
      <View style={[C.pl6, C.pt16, C.pb10, onTop(), percWidth()]}>
        {children}
      </View>
      <Image
        source={img}
        resizeMode={'contain'}
        style={[
          C.wFull,
          percHeight(imgRatio),
          smallAbs && [C.opacity10, C.absolute],
          C.bottom10,
          imgStyle,
        ]}
      />
    </>
  ) : (
    <>
      <View style={[respWrap, C.row, C.py4]}>
        <View style={!imgLeft && contentWrapper}>
          {!imgLeft ? children : !isAbs && Img}
        </View>
        <View style={imgLeft && contentWrapper}>
          {imgLeft ? children : !isAbs && Img}
        </View>
      </View>
      {isAbs && Img}
    </>
  );
  const wrapStyle = [
    colBg && bgColor(colBg),
    /*isSmall ? C.my8 : C.my16,*/
    percWidth(),
    C.itemsCenter,
  ];
  return bgGrad ? (
    <LinearGradient colors={bgGrad} style={wrapStyle} useAngle angle={90}>
      {Content}
    </LinearGradient>
  ) : (
    <View style={wrapStyle}>{Content}</View>
  );
};

export const Section = ({ title, sideInfo, dark, children }) => (
  <View style={[respWrap, C.mb20, dark && bgColor(vColors.black + '02')]}>
    <View style={[C.row, C.itemsCenter, C.justifyBetween, C.my5]}>
      {title && <Text style={[fonts.title1]}>{title}</Text>}
      {sideInfo && <Text style={[fonts.body1]}>{sideInfo}</Text>}
    </View>
    {children}
  </View>
);

export const TitleRow = ({ icon, title, center, subtitle }) => (
  <View
    style={[
      C.my2,
      C.mt8,
      C.itemsCenter,
      C.row,
      center ? C.selfCenter : C.selfStart,
    ]}>
    <Text style={[fonts.title1, C.mr2]}>{icon}</Text>
    <Text style={[subtitle ? fonts.textBold : fonts.title1]}>{title}</Text>
  </View>
);

export const Wrapper = ({
                          children,
                          HeaderChild,
                          icon,
                          withBack,
                          bgGradient,
                          colorBg = vColors.white,
                          Extra,
                          title,
                          center = true,
                          headWrap,
                          wrapStyle,
                          round,
                        }) => {
  const { goBack, navigate } = useNavigation();
  /*const MobileTitle = () => (
    <View>
      {withBack && (
        <Image source={vImgs.back} style={[vSizes.sm, C.tintWhite]} />
      )}
      {title && (
        <View style={[C.p1, C.row, C.itemsCenter, C.selfCenter]}>
          {icon && (
            <Text
              style={[
                fonts.mainTitle,
                C.mr4,
                C.alignCenter,
                C.textPrimaryBlue,
              ]}>
              {icon}
            </Text>
          )}
          <Text style={[fonts.mainTitle, C.alignCenter, C.textPrimaryBlue]}>
            {title}
          </Text>
        </View>
      )}
      {HeaderChild}
    </View>
  );*/
  /*const HeadDef = Header ? <Header>{HeaderChild}</Header> : <HeaderContent />;*/
  /*const sortCollected = Object.entries(profile.currHarvest.collected).sort((a, b) => b[1] - a[1]);*/
  return (
    <SafeAreaView
      style={[
        colorBg && bgColor(colorBg),
        C.itemsCenter,
        percWidth(1),
        C.maxwFull,
      ]}
      /*contentContainerStyle={apply(isIOS ? C.pt8 : C.pt4, C.px2, C.m4)}*/
    >
      {bgGradient ? (
        <LinearGradient
          colors={bgGradient}
          style={[
            isIOS && [C.top_12, C.pt12],
            C.row,
            C.itemsCenter,
            C.justifyCenter,
            /*round && botRadius(40),
            C.wFull,*/
            /*C.p4,*/
            C.wFull,
            headWrap,
          ]}
          useAngle
          angle={90}>
          {HeaderChild}
        </LinearGradient>
      ) : (
        <View style={[C.m4]}> {HeaderChild}</View>
      )}

      <ScrollView
        contentContainerStyle={[
          C.itemsCenter,
          /*!bgGradient && C.bgWhiteTwo,
          center ? C.itemsCenter : C.itemsStart,*/
          /*C.px7,
          wrapStyle,
          C.mx4,*/
        ]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
