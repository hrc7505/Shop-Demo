import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import colors from '../../configs/colors';
import assets from '../../assets/assets';
import fonts from '../../assets/fonts/fonts';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.leftPartContainer}>
                    <View style={styles.leftPart}>
                        <Text style={styles.leftText}>589,497 LBS CAPTURED</Text>
                    </View>
                </View>
                <Text style={styles.centerText}>SHOP</Text>
                <TouchableOpacity onPress={this.props.onUserIconPress} style={{ flex: 2, alignItems: "flex-end" }}>
                    <View style={styles.rightPart}>
                        <Image source={assets.userIcon} style={styles.userIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.themeColor,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
    },
    leftPartContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 2,
    },
    leftPart: {
        paddingHorizontal: 5,
        paddingVertical: 2.5,
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.lightBlue,
        borderRadius: 6,
        justifyContent: "center",
    },
    leftText: {
        color: colors.white,
        fontSize: 13,
        fontFamily: fonts.Oswald,
    },
    centerText: {
        color: colors.white,
        fontSize: 20,
        marginLeft: 25,
        flex: 1,
        fontFamily: fonts.OswaldMedium,

    },
    userIcon: {
        minWidth: 25,
        minHeight: 25
    }
});
