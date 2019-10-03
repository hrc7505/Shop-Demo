import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../configs/colors';

const UnderConstruction = (props) => (
    <View style={styles.container}>
        <Text style={{ color: colors.white }}>This page is under construction.</Text>
        {
            props.navigation.getParam("showbackBtn") &&
            <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backBtn}>
                <Text style={{ color: colors.white }}>Go back</Text>
            </TouchableOpacity>
        }
    </View>
);

export default UnderConstruction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.themeColor,
    },
    backBtn: {
        borderWidth: 1,
        borderColor: colors.white,
        padding: 10,
        marginTop: 15
    },
});
