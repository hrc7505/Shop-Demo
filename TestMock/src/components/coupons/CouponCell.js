import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import colors from '../../configs/colors';
import assets from '../../assets/assets';
import initialConstants from '../../configs/constants';
import fonts from '../../assets/fonts/fonts';

export default class CouponCell extends Component {
  favourites = [];

  render() {
    const containerWidth = this.getContainerWidth();
    let imgStyle;
    let textStyle;
    if (this.props.numColums === 3) {
      imgStyle = {
        height: 70,
        resizeMode: 'center',
      };
      textStyle = {
        fontSize: 11,
      };
    }

    const heartAsset = this.favourites.findIndex((index) => index === this.props.index) !== -1 ? assets.heartFilled : assets.heart;

    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onCellPress}>
        <View style={[styles.container, { width: containerWidth }]}>
          <TouchableOpacity style={{ width: 30 }} onPress={this.addToFaviourite}>
            <Image
              source={heartAsset}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <Image source={this.props.item.icon} style={[styles.productLogo, imgStyle]} />
          <View style={{ flexDirection: this.props.numColums === 1 ? "row" : "column", alignSelf: "center", alignItems: "center" }}>
            <Text style={styles.topText}>{this.props.item.lbsPerDollar}</Text>
            <Text style={[styles.bottomText, textStyle]}>{this.props.item.totalLBS}</Text>
          </View>
          <TouchableOpacity style={styles.couponIconContainer}>
            <Image source={assets.coupon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  getContainerWidth = () => {
    const { numColums } = this.props;
    const pageBodyPadding = 10;
    return (initialConstants.deviceX - (pageBodyPadding * 2) - numColums * (margin * 2)) / numColums;
  }

  addToFaviourite = () => {
    const recordIndex = this.favourites.findIndex((index) => index === this.props.index)
    if (recordIndex !== -1) {
      this.favourites.splice(recordIndex, 1);
    } else {
      this.favourites.push(this.props.index);
    }

    this.forceUpdate();
  }
}

const margin = 7;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    width: 175,
    padding: 10,
    margin,
  },
  couponIconContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  topText: {
    textAlign: "center",
    marginVertical: 5,
    marginRight: 10,
  },
  bottomText: {
    textAlign: "center",
    color: colors.green,
    marginVertical: 5,
    fontFamily: fonts.OswaldMedium
  },
  productLogo: {
    width: "100%",
    marginVertical: 10,
    height: 120,
    resizeMode: 'center',
  }
});