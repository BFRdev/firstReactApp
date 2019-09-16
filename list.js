import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class List extends React.Component {
  render(){
      return (
    <View style={styles.list}>
     <Text>hello Component</Text>
    </View>
  );
  }
}
//styles 
//container stlye 
const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
});