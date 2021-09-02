import C, {boxShadow} from 'consistencss';
import {Dimensions, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export const bgColor = (color = vColors.primaryBlue) => ({
  backgroundColor: color,
});
export const bordColor = (color = vColors.primaryBlue, width = 1) => ({
  borderColor: color,
  borderWidth: width,
});

export const textColor = color => ({color: color});
export const tintColor = color => ({tintColor: color});
export const maxWidth = (perc = 1) => ({maxWidth: deviceWidth * perc});
export const percWidth = (perc = 1) => ({width: deviceWidth * perc});
export const percHeight = (perc = 1) => ({height: deviceHeight * perc});

export const DESKTOP_HUGE = 1440;
export const DESKTOP = 1024;
export const TABLET = 768;
export const MOBILE = 375;

/**Responsiveness*/
export const isWeb = Platform.OS === 'web';
export const isTabl = isTablet();

export const respL = isWeb && deviceWidth >= DESKTOP_HUGE; //Gegant => container 1200 (300)
export const respM =
  isWeb && deviceWidth > DESKTOP && deviceWidth < DESKTOP_HUGE; // Margin 32 (8)
export const respS = isWeb && deviceWidth > TABLET && deviceWidth < DESKTOP; //Tablet   => Margin 28 (7)
export const respXS = isWeb && deviceWidth < TABLET && deviceWidth > MOBILE; //Tablet   => Margin 28 (7)
export const respMob = isWeb && deviceWidth < MOBILE; //Mobile M  // Margin 24 (6)

export const isSmall = isWeb && deviceWidth < TABLET;
export const isBig = isTabl; //|| (isWeb && deviceWidth > 450);
export const isLarge = isTabl || (isWeb && deviceWidth > 600);
export const isWide = isTabl || (isWeb && deviceWidth > 450);
export const isNarrow = isWeb && deviceWidth < 380;
export const isPhoneBrowser = isWeb && deviceWidth < 480;
export const isIOS = Platform.OS === 'ios';

/**Most important wrapper container*/
export const respWrap = [
  percWidth(),
  respL ? C.w300 : respM ? C.px8 : respS ? C.px7 : C.px6,
  isSmall && [percWidth(), C.px6],
  /*{width: deviceWidth * (isWide ? 0.7 : 0.8)]}*/
];

/**Most important container*/
export const respWidth = [respS ? C.maxw180 : maxWidth(0.7)];

/**Colors*/
export const vColors = {
  primaryBlue: '#6377e0',
  primaryGreen: '#33e8c7',
  white: '#ffffff',
  whiteTwo: '#fafafa',
  whiteFive: '#f5f5f5',
  whiteThree: '#e7e7e7',
  whiteFour: '#e5e5e5',
  greyish: '#b6b6b6',
  greyishBrown: '#585858',
  black: '#000000',
  softPink: '#faa6ae',
  salmon: '#F28372',
  greenishTeal: '#32c6a2',
};

/**Shadows*/
export const vShadow = {
  highlightSel: boxShadow(12, 0, 10, 24, vColors.primaryBlue, 0.12),
  highlight: boxShadow(12, 0, 10, 24, vColors.whiteThree, 0.2),
  regular: boxShadow(12, 0, 10, 10, vColors.whiteThree, 0.2),
};

export const topRadius = (rad = 20) => ({
  borderTopLeftRadius: rad,
  borderTopRightRadius: rad,
});
export const onTop = (over = true) => ({
  zIndex: over ? 40 : -40,
});
export const botRadius = (rad = 20) => ({
  borderBottomLeftRadius: rad,
  borderBottomRightRadius: rad,
});
export const leftRadius = (rad = 20) => ({
  borderBottomLeftRadius: rad,
  borderTopStartRadius: rad,
});
export const leftCorner = (rad = 20) => [
  {
    borderBottomLeftRadius: rad,
    borderBottomRightRadius: rad,
    borderTopStartRadius: rad,
  },
];

export const vSizes = {
  dot: [C.w2, C.h2],
  bubble: [C.w3, C.h3],
  box: [C.w5, C.h5],
  icon: [C.w6, C.h6],
  emoji: [C.w7, C.h7],
  sm: [C.w8, C.h8],
  input: [C.w10, C.h10],
  card: [C.w80, C.h80],
  cardBig: [C.w92, C.h66],
  cardHuge: [C.w120, C.h120],
  cardHero: [C.w160, C.h190],
  med: [C.w12, C.h12],
  lg: [C.w15, C.h15],
  xl: [C.w24, C.h24],
  emojiSm: C.font5,
  emojiLg: C.font7,
  logo: isWide ? [C.w37, C.h37] : [C.w20, C.h20],
};

export const cardWrapper = [C.radius2, C.bgWhite];

const titleFont = 'Baloo2'; //isWeb ? 'Baloo2 script' : 'Baloo2-Medium';

export const fonts = {
  mainTitle: {
    fontFamily: titleFont,
    fontSize: 36,
    fontWeight: '500',
    lineHeight: 43.2,
  },
  heroTitle: {
    fontFamily: titleFont,
    fontSize: isSmall ? 28 : 48,
    lineHeight: isSmall ? 38 : 58,
    fontWeight: '500',
  },
  cta1: {
    fontFamily: titleFont,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
  title1: {
    fontFamily: titleFont,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  highlight: {
    fontFamily: 'Karla',
    fontSize: 20,
  },
  textBold: {
    fontFamily: 'Karla',
    fontSize: 16,
    fontWeight: 'bold',
  },
  body1: {
    fontFamily: 'Karla',
    fontSize: 16,
    lineHeight: 22.4,
  },
  subtitle: {
    fontFamily: 'Karla',
    fontSize: 14,
    lineHeight: 19.6,
  },
  littleText: {
    fontFamily: 'Karla',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 14,
  },
};

export const links = {
  instagram: 'https://www.instagram.com/veteasy_es/',
  liknedn: 'https://www.linkedin.com/company/vetisy/',
};
export const docs = {
  legal:
    'https://drive.google.com/file/d/1OkJkQ0WXxKbnMNgs_kBGCNiUWQkLBw2Y/view?usp=sharing',
  privacy:
    'https://drive.google.com/file/d/1-2QLOivAlhYMQ0HJfHab-FFAevEcd5c9/view?usp=sharing',
  cookies:
    'https://drive.google.com/file/d/1x4S8CxIDGEDSmzJ9cRatSCRtRRcq5xCh/view?usp=sharing',
};
export const vImgs = {
  logo: {uri: 'https://i.imgur.com/3gePDeM.png'},
  logoWhite: {uri: 'https://imgur.com/00ynP4U.png'},
  woman: {uri: 'https://imgur.com/AO9KiTx.png'},
  pin: {uri: 'https://imgur.com/YFyLGnu.png'},
  online: {uri: 'https://imgur.com/zlqgtVm.png'},
  home: {uri: 'https://imgur.com/ygYYTIm.png'},
  plus: {uri: 'https://imgur.com/kdo6dEv.png'},
  lupa: {uri: 'https://imgur.com/rXGEoLN.png'},
  heartEmpty: {uri: 'https://imgur.com/qp8Ghsm.png'},
  heartFull: {uri: 'https://imgur.com/9jx8ez4.png'},
  filters: {uri: 'https://imgur.com/wRJrHTv.png'},
  apple: {uri: 'https://imgur.com/hMfGr2o.png'},
  facebook: {uri: 'https://imgur.com/N9DKc8s.png'},
  google: {uri: 'https://imgur.com/E78QIV5.png'},
  email: {uri: 'https://imgur.com/URvCjeV.png'},
  camera: {uri: 'https://imgur.com/FpOEvl4.png'},
  calendar: {uri: 'https://imgur.com/C6a13n8.png'},
  dollar: {uri: 'https://imgur.com/3xzijze.png'},
  animalPhotos: {uri: 'https://imgur.com/YHEAwPN.png'},
  clinicVisit: {uri: 'https://imgur.com/G0APlxA.png'},
  onlineVisit: {uri: 'https://imgur.com/SBE1dT4.png'},
  homeVisit: {uri: 'https://imgur.com/j46ETM4.png'},
  tickVerification: {uri: 'https://imgur.com/Pm9sSIJ.png'},
  vetsRounds: {uri: 'https://imgur.com/qM0fQMI.png'},
  vetMan: {uri: 'https://imgur.com/5v3mi3l.png'},
  vetManGroupedDesktop: {uri: 'https://imgur.com/SvmMrs0.png'},
  vetManGroupedMobile: {uri: 'https://imgur.com/OeRNxyO.png'},
  bubbles: {uri: 'https://imgur.com/hVNDYXD.png'},
  face1: {uri: 'https://imgur.com/yP0xYLL.png'},
  face2: {uri: 'https://imgur.com/EHEWmaY.png'},
  face3: {uri: 'https://imgur.com/cWoQkNU.png'},
  face4: {uri: 'https://imgur.com/jFpItUQ.png'},
  face5: {uri: 'https://imgur.com/B2uVx2C.png'},
  SchedulePurple: {uri: 'https://imgur.com/spKcG5w.png'},
  upperFile: {uri: 'https://imgur.com/lorT04z.png'},
  middleFile: {uri: 'https://imgur.com/eoBWOns.png'},
  aboveFile: {uri: 'https://https://imgur.com/1l8E81H.png'},
  leftRightImage: {uri: 'https://imgur.com/NlOfsY7.png'},
  rightLeftImage: {uri: 'https://imgur.com/vUKQFHF.png'},
  mobileMock: {uri: 'https://imgur.com/NKt8pG9.png'},
  greenTick: {uri: 'https://imgur.com/Scm9rqi.png'},
  greenInstagram: {uri: 'https://imgur.com/Nf1pX8X.png'},
  greenFacebook: {uri: 'https://imgur.com/b3p46EG.png'},
  greenLinkedIn: {uri: 'https://imgur.com/9qCuLfL.png'},
  chicaVetPerro: {uri: 'https://imgur.com/d7LvhfJ.png'},
  avatarPlus: {uri: 'https://imgur.com/0LmuS5f.png'},
  medal: {uri: 'https://imgur.com/l1eew00.png'},
  clock: {uri: 'https://imgur.com/MAYBLh2.png'},
  calendarAndFile: {uri: 'https://imgur.com/2UUZ4gU.png'},
  clientsOpinions: {uri: 'https://imgur.com/a8deutk.png'},
  girlDogCameraOnline: {uri: 'https://imgur.com/XBCJbO0.png'},
  profileAriadna: {uri: 'https://imgur.com/aFtcYhE.png'},
  contactaLaia: {uri: 'https://imgur.com/K5UpQBF.png'},
  phone: {uri: 'https://imgur.com/F52AdJH.png'},
  quoteAriadna: {uri: 'https://imgur.com/2i3K4He.png'},
  whatsApp: {uri: 'https://imgur.com/6r8FKoc.png'},
  modalImage: {uri: 'https://imgur.com/IJES5T1.png'},
  chevronRight: {uri: 'https://imgur.com/Q2fepA5.png'},
  close: {uri: 'https://imgur.com/NiN2NZL.png'},
  mockupFind: {uri: 'https://imgur.com/ic2WAcw.png'},
  chevronLeft: {uri: 'https://imgur.com/QTl0XrN.png'},
  video: {uri: 'https://imgur.com/zlqgtVm.png'},

  back: require('./assets/Icon/chevron-left.png'),
  bell: require('./assets/Icon/bell.png'),
  chat: require('./assets/Icon/message-square.png'),
  chevronDown: require('./assets/Icon/Path.png'),
  send: require('./assets/Icon/send.png'),
  profile: require('./assets/Icon/user.png'),
  onb1: require('./assets/onboarding/1.png'),
  onb2: require('./assets/onboarding/2.png'),
};
