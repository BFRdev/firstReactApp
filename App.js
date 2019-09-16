import React from 'react';
import { StyleSheet, Text, ScrollView, } from 'react-native';
import List from './list';


export default class App extends React.Component {
  render(){
      return (
    <ScrollView contentContainerStyle={styles.container}>
     <List></List>
    </ScrollView>
  );
  }
}
//styles 
//container stlye 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//text styles 
// const styleText = StyleSheet.create({
//   text:{
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// }) 
