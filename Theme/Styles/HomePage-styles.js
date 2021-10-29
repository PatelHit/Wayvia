import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainPhoto: {
    padding: 100,
    margin: 10,
    width: 392,
    height: 200,
    borderRadius: 7,
  },
  mainMenu: {
    borderColor: 'black',
    margin: 10,
    //  flex: 1,
  },
  individualMenuButtons: {
    marginBottom: 10,
    borderColor: 'black',
    // borderWidth: 1,
    borderRadius: 7,
    height: 100,
    width: 392,
    backgroundColor: 'orange',
  },
  individualMenuText: {
    marginTop: 35,
    fontSize: 20,
    paddingLeft: 10,
  },
  bottomBanner: {
    borderRadius: 7,
    marginLeft: 4,
    height: 80,
    width: 396,
  },
});

export default styles;
