import React from 'react';
import { ActivityIndicator } from 'react-native';

import colors from '../../configs/colors';

function Spinner() {
  return (
    <ActivityIndicator
      size={size}
      color={color || colors.black}
    />
  );
}

export default Spinner;