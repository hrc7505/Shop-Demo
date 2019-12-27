import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import CouponCell from './CouponCell';

export default class CouponList extends Component {
  /**
    * Key extractor for `FlatList`.
    */
  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          key={this.props.numColumns}
          data={this.props.data}
          renderItem={this.renderItem}
          numColumns={this.props.numColumns}
          ListEmptyComponent={this.renderEmptyList}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  renderEmptyList = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>No Data Available</Text>
      </View>
    )
  }

  renderItem = ({ item, index }) => (
    <CouponCell
      item={item}
      numColums={this.props.numColumns}
      onCellPress={this.props.onCellPress}
      index={index}
    />
  );
}