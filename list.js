import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { selectAssetSource } from 'expo-asset/build/AssetSources';

export default class List extends React.Component {
  render(){
    //let item1 = require("./assets/icon.png")
      return (
    <View style={styles.list}>
    {/* item 1 */}
    <Image style={stlyes.Img} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
    <Text>hello Component</Text>
    
     {/* item 2 */}
    <Image style={stlyes.Img} source={{uri: 'https://www.kumoten.com/assets/images/content/JB0073PP_3.jpg'}}/>
    <Text>hello sexy</Text>
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
    fontSize: 30,
    padding: 10,
  },
});

const stlyes = StyleSheet.create({
    Img:{
        width: 400,
        height: 200, 
        resizeMode: 'cover',
        borderRadius: 10,
    }
});