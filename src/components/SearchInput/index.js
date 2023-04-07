import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEEEEE', borderRadius: 10, width: '100%' }}>
      <Icon name="search" size={20} color="#ccc" style={{ marginHorizontal: 18 }} />
      <TextInput
        placeholder="Search"
        style={{ flex: 1, fontSize: 16, paddingVertical: 10, height: 55 }}
      />
    </View>
  );
};

export default SearchInput;
