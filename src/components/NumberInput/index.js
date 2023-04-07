import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NumberInput = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleDecrement}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginRight: 40 }}>-</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{value}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 40 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberInput;
