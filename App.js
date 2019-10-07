import React from 'react';
import { StyleSheet, Text, ScrollView, } from 'react-native';
//import component 
import List from './list';


//home page 
export default class Home extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* List component */}
        <List></List>
      </ScrollView>
    );
  }
}

//style and positioning
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#34a1eb',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

