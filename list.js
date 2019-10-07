import React from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';

export default class List extends React.Component {

    constructor(props) {
        super(props)
        //declare animations 
        this.fadeAnimate = new Animated.Value(0);
        this.spinAnimation = new Animated.Value(0);
        this.slide = new Animated.Value(0);
      }

      componentWillMount() {

        //define animated timing for fade 
        Animated.timing(this.fadeAnimate, {
          toValue: 1,
          duration: 2000,
          easing: Easing.back(),
          useNativeDriver: true
        }).start(() => {
    
          //loop for rotating object 
          Animated.loop(Animated.timing(this.spinAnimation, {
            //define duration and enable easing 
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true
          }), { iterations: 2 }).start()
    
          //spring animation fix
          Animated.spring(this.slide, {
            toValue: 90,
            speed: 0,
            bounciness: 10
            // tension: 100,
          }).start();
    
        });
        //define degree of spin 
        this.spin = this.spinAnimation.interpolate({
          inputRange: [0, 1],
          //spin 360 degrees
          outputRange: ['0deg', '360deg']
        })
      }


    render() {
        return (

            <View style={styles.list}>
               
                <Text stlye={textStlye.head}> Why you need a beach house to Hibernate this winter... </Text>
                
                {/* item 1 */}
                <Animated.Image style={[stlyes.Img, { left: this.slide } ]} source={{ uri: 'https://bit.ly/2lYXlv1' }} />
                <Text style={textStlye.stlyeText}>1. Beautiful scenery</Text>

                {/* item 2 */}
                <Animated.Image style={[stlyes.Img, { opacity: this.fadeAnimate }]} source={{ uri: 'https://bit.ly/2kfx5fs' }} />
                <Text style={textStlye.stlyeText}>2.The soft sand</Text>

                {/* item 3 */}
                <Animated.Image style={[stlyes.Img,  { transform: [{ rotate: this.spin }] }]} source={{ uri: 'https://bit.ly/2Fwlj7T' }} />
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