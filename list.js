import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { selectAssetSource } from 'expo-asset/build/AssetSources';

export default class List extends React.Component {
    render() {
        return (

            <View style={styles.list}>
               
                <Text stlye={textStlye.head}> Why you need a beach house to Hibernate this winter... </Text>
                
                {/* item 1 */}
                <Image style={stlyes.Img} source={{ uri: 'https://bit.ly/2lYXlv1' }} />
                <Text style={textStlye.stlyeText}>1. Beautiful scenery</Text>

                {/* item 2 */}
                <Image style={stlyes.Img} source={{ uri: 'https://bit.ly/2kfx5fs' }} />
                <Text style={textStlye.stlyeText}>2.The soft sand</Text>

                {/* item 3 */}
                <Image style={stlyes.Img} source={{ uri: 'https://bit.ly/2Fwlj7T' }} />
                <Text style={textStlye.stlyeText}>3.Wearmth of the sun</Text>

                {/* item 4 */}
                <Image style={stlyes.Img} source={{ uri: 'https://bit.ly/2knp3Bq' }} />
                <Text style={textStlye.stlyeText}>4.The wet and clean water</Text>

                {/* item 5 */}
                <Image style={stlyes.Img} source={{ uri: 'https://bit.ly/2kPMXpp' }} />
                <Text style={textStlye.stlyeText}>5.Fun with firends</Text>

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
        justifyContent: 'space-between',
        fontSize: 30,
        padding: 10,
        fontWeight: "bold",
    },
});
// Image stlye 
const stlyes = StyleSheet.create({
    Img: {
        width: 400,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    }
});
//Header stlye 
const titleStyle = StyleSheet.create({
    head: {
        fontWeight: "bold",
        fontSize: 30,
        margin: 20,

    }
});

//Header stlye 
const textStlye = StyleSheet.create({
    stlyeText: {
        fontSize: 20,
        marginBottom: 10,

    }
});