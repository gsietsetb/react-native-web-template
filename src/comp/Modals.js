import C from 'consistencss';
import {observer} from 'mobx-react-lite';

import Modal from 'modal-enhanced-react-native-web';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  botRadius,
  fonts,
  isIOS,
  isSmall,
  onTop,
  percHeight,
  percWidth,
  topRadius,
  vImgs,
  vSizes,
} from '../design/vStyles';

export const VModal = observer(
  ({
    modal,
    visible = false,
    afterClose = () => {},
    isFull,
    icon,
    children,
    contentStyle,
    title,
  }) => {
    const [showModal, setShowModal] = useState(modal ? modal.show : visible);
    const closeModal = () => {
      if (modal) {
        modal.closeModal();
      }
      setShowModal(false);
      afterClose && afterClose();
    };

    const showHeader = title || icon;
    return (
      <Modal
        onDismiss={closeModal}
        onBackButtonPress={closeModal}
        isVisible={showModal}
        visible={showModal}
        transparent /*={!(isIOS && isFull)}*/
        onSwipeComplete={closeModal}
        presentationStyle={(isIOS || isSmall || isFull) && 'pageSheet'}
        onRequestClose={closeModal}
        onBackdropPress={closeModal}>
        <View
          style={[
            C.radius2,
            C.bgWhite,
            percHeight(isFull ? 0.8 : isSmall ? 0.95 : 0.5),
            isSmall
              ? [C.ml_5, C.mb1, C.absolute, C.bottom_6, percWidth()]
              : [C.maxw260, C.selfCenter],
          ]}>
          <View style={[C.px2, topRadius(8), showHeader && C.bgPrimaryBlue]}>
            {/**Header*/}
            {showHeader && (
              <View style={[C.row, C.justifyBetween, C.p4, C.bgPrimaryBlue]}>
                <View style={[C.row, C.itemsCenter]}>
                  {icon && <Image source={icon} style={[vSizes.icon]} />}
                  {title && (
                    <Text style={[C.textWhite, fonts.title1, icon && C.ml3]}>
                      {title}
                    </Text>
                  )}
                </View>
              </View>
            )}
            <TouchableOpacity
              onPress={closeModal}
              style={[
                C.selfEnd,
                onTop(),
                isSmall ? C.m3 : C.m6,
                /*C.bgWhiteTwo,
                C.radius25,*/
              ]}>
              <Image
                source={vImgs.close}
                style={[showHeader && C.tintWhite, vSizes.emoji]}
              />
            </TouchableOpacity>

            <View style={[botRadius(8), C.p8, C.m_2, contentStyle]}>
              {children}
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);
