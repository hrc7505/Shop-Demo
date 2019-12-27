import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import assets from '../../assets/assets';
import initialConstants from '../../configs/constants';
import colors from '../../configs/colors';

export default class NavBottom extends Component {
    menuItems = [
        {
            title: "Favourite",
            icon: assets.favourite,
            route: "Favourite",
        },
        {
            title: "Featured",
            icon: assets.featured,
            route: "Featured",
        },
        {
            title: "Coupons",
            icon: assets.coupon,
            route: "Coupons",
        },
        {
            title: "Categories",
            icon: assets.categories,
            route: "Categories",
        },
        {
            title: "More",
            icon: assets.more,
            route: "More",
        },
    ];

    render() {
        return (
            <SafeAreaView style={styles.nav} forceInset={{ bottom: "always" }}>
                {
                    this.menuItems.map((item, i) => {
                        const isSelected = this.props.navigation.state.index === i;
                        return (
                            <TouchableOpacity key={i} onPress={() => this.handleTabNavigation(item.route)}>
                                <View style={[styles.menuItem, { width: initialConstants.deviceX / this.menuItems.length }]}>
                                    <Image source={item.icon} style={[styles.menuItemIcon, isSelected && { tintColor: colors.themeColor }]} />
                                    <Text style={[styles.menuItemText, isSelected && { color: colors.themeColor }]}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </SafeAreaView>
        );
    }

    handleTabNavigation = (route) => {
        this.props.navigation.navigate(route);
    }
}

const styles = StyleSheet.create({
    nav: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: colors.lightBlack,
    },
    menuItem: {
        paddingBottom: 5,
        paddingTop: 15,
        paddingVertical: 10,
        alignItems: "center",
    },
    menuItemText: {
        marginTop: 5,
        color: colors.white,
        fontSize: 12,
    },
    menuItemIcon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        tintColor: colors.white,
    }
});
