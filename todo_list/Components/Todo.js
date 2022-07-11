import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Todo = props => {
  return (
    <View style={[{margin: 8, padding: 8}, styles.item]}>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
  },
});

export default Todo;
