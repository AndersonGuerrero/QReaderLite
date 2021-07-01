import React, { Component } from 'react';

import {StyleSheet, View,Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';


export default class ScanScreen extends Component {

  constructor(){
    super()
    this.state = {}
  }

  onSuccess = (e) => {
    const {navigate} = this.props.navigation;
    navigate('Home', {qrData: e.data})
  }

  render() {
    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1898981134651291/5115113509';
    return (
      <View>
        <QRCodeScanner
          title={'Scan Code'}
          onRead={this.onSuccess}
          cameraStyle={styles.cameraContainer}
          topViewStyle={styles.zeroContainer}
          bottomViewStyle={styles.zeroContainer}
        />
        <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={(e) => {
          console.log(String(e));
        }}>
      </BannerAd>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    divads: {
      backgroundColor: 'blue'
    },
    zeroContainer: {
      height: 0,
      flex: 0,
    },
    cameraContainer: {
      height: Dimensions.get('window').height + 30
    },
  });