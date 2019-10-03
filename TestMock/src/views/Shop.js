import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Search from 'react-native-search-box';
import ModalDropdown from 'react-native-modal-dropdown';

import { CouponList } from '../components/coupons';
import Header from '../components/common/Header';
import colors from '../configs/colors';
import assets from '../assets/assets';

/**
 * Using `ViewType` as an enum to change view type of the items.
 */
const ViewType = {
  ThreeTiles: 3,
  TwoTiles: 2,
  List: 1,
};;

export default class Shop extends Component {
  state = {
    selectedViewType: ViewType.TwoTiles,
    selectedPickerItem: null,
  };

  pickerItems = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  couponList = [
    {
      companyName: "Cycle Gear",
      icon: assets.cycleGear,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "All Posters.com",
      icon: assets.allPostersCom,
      lbsPerDollar: "50 lbs./$",
      totalLBS: "20 LBS",
    },
    {
      companyName: "The Autoburn imports",
      icon: assets.theAutoburnImports,
      lbsPerDollar: "90 lbs./$",
      totalLBS: "5 LBS.",
    },
    {
      companyName: "Booking.com",
      icon: assets.bookingCom,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "Chemical Guys",
      icon: assets.chemicalGuys,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "Oscard",
      icon: assets.oscard,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "fedex",
      icon: assets.fedEx,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "Bird",
      icon: assets.bird,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "T-Shirt Club",
      icon: assets.smallBird,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "Rolex",
      icon: assets.rolex,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "Cat",
      icon: assets.cat,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "Round Dot",
      icon: assets.roundDot,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "Sprint",
      icon: assets.sprint,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "APEC",
      icon: assets.apec,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
    {
      companyName: "aPlan",
      icon: assets.aPlan,
      lbsPerDollar: "80 lbs./$",
      totalLBS: "10 LBS.",
    },
  ];

  filteredCoupons = this.couponList;

  render() {
    return (
      <View style={{ backgroundColor: colors.themeColor, flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Header
            onUserIconPress={this.navigateToConstructionScreen}
          />
          <Search
            backgroundColor={colors.lightGray}
            onChangeText={this.onSearch}
            onCancel={this.showAllData}
            titleCancelColor={colors.lightBlack}

          />
          <View style={styles.pageBody}>
            <View style={styles.filterBar}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <ModalDropdown
                  style={styles.pickerStyle}
                  options={this.pickerItems}
                  dropdownStyle={styles.dropdownStyle}
                  dropdownTextStyle={styles.dropdownTextStyle}
                  textStyle={styles.textStyle}
                  dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                  defaultValue="Please select item"
                />
                <View style={styles.iconView} >
                  <Image source={assets.dropdownArrow} style={{ width: 10, height: 10 }} />
                </View>
              </View>
              <View style={styles.viewType}>
                {Object.keys(ViewType).map((key, i) => this.renderViewTypeBtn(ViewType[key], i))}
              </View>
            </View>
            <CouponList
              data={this.filteredCoupons}
              numColumns={this.state.selectedViewType}
              onCellPress={this.navigateToConstructionScreen}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }

  navigateToConstructionScreen = () => {
    this.props.navigation.navigate("UnderConstruction", { showbackBtn: true });
  }

  renderViewTypeBtn = (type, i) => {
    let image;
    switch (type) {
      case ViewType.ThreeTiles:
        image = assets.threeTilesIconWhite;
        break;

      case ViewType.TwoTiles:
        image = assets.twoTilesIconBlue;
        break;

      case ViewType.List:
      default:
        image = assets.listIconWhite;
        break;
    }

    return (
      <TouchableOpacity onPress={() => this.onPressViewType(type)} key={i}>
        <Image
          source={image}
          style={[
            styles.viewTypeImg,
            type === ViewType.List && { marginRight: 0 },
            this.state.selectedViewType === type && { tintColor: colors.themeColor },
          ]}
        />
      </TouchableOpacity>
    );
  }

  onPressViewType = (type) => {
    this.setState({ selectedViewType: type });
  }
  handlePickerValueChange = (value, index) => {
    this.setState({ selectedPickerItem: value });
  }

  // Important: You must return a Promise
  onSearch = (searchText) => {
    return new Promise((resolve, reject) => {
      if (searchText.trim().length > 0) {
        this.filteredCoupons = this.couponList.filter((item) => {
          return item.companyName.toLowerCase().startsWith(searchText.toLowerCase());
        });
      } else {
        this.filteredCoupons = this.couponList;
      }
      this.forceUpdate();
      resolve();
    });
  }

  showAllData = () => {
    return new Promise((resolve, reject) => {
      this.filteredCoupons = this.couponList;
      this.forceUpdate();
      resolve();
    });
  }
}

const styles = StyleSheet.create({
  pageBody: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: colors.white
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 7,
    height: 55
  },
  viewType: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  viewTypeImg: {
    marginHorizontal: 7,
    width: 30,
    height: 30,
    tintColor: colors.gray,
    resizeMode: "contain"
  },
  pickerStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.gray,
    justifyContent: "center",
    zIndex: 1,
  },
  dropdownStyle: {
    width: "60%",
    marginTop: 10,
    marginLeft: 0,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: colors.themeColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  textStyle: {
    color: colors.lightBlack,
    fontSize: 15,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 30,
    height: 50,
    marginTop: 8
  },
  dropdownTextStyle: {
    color: colors.lightBlack,
    fontSize: 15,
    marginHorizontal: 10,
  },
  dropdownTextHighlightStyle: {
    color: colors.themeColor
  },
  iconView: {
    width: 20,
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 20,
  },
});
