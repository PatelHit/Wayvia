import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScannerScreen = () => {
  const [isTorch, setIsTorch] = useState(false);
  let scanner;
  const onSuccess = e => {
    console.log(e.data);
    Alert.alert('Scanned value', e.data + '\nDo you want to scan again?', [
      {text: 'No', style: 'cancel'},
      {text: 'Yes', onPress: () => scanner.reactivate()},
    ]);

    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={
        isTorch
          ? RNCamera.Constants.FlashMode.torch
          : RNCamera.Constants.FlashMode.off
      }
      // reactivate={false}
      ref={node => (scanner = node)}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
          on your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => setIsTorch(!isTorch)}>
          <Text style={styles.buttonText}>Flash Light</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScannerScreen;
