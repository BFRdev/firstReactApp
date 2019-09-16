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
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#34a1eb',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

