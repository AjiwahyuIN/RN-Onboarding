import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar,Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../assets/colors/colors';

const data = [
    {
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../../../assets/images/Onboard1.png'),
    },
    {
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../../../assets/images/Onboard2.png'),
    },
    {
      title: 'Spend more time doing the things you love',
      text: "Get started within five minutes",
      image: require('../../../assets/images/Onboard3.png'),
    },
  ];

const OnBoarding = (props) => {

    const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image}/>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        )
        
    }
    const keyExtractor = (item) => item.title

    renderDoneButton = () => {
        return(
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#A5C8FF','#23286B']} style={styles.doneButtonWrapper}>
                <Text style={styles.doneButtonText}>
                    Done
                </Text>
            </LinearGradient>
                    )
    }
    renderNextButton = () => {
        return(
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        )
    }
    renderPrevButton = () => {
        return(
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        )
    }

    const handleDone = () => {
        props.handleDone()
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            showPrevButton
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            data={data}
            onDone={handleDone}
            />
      </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
slide:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.white
},
image:{
    marginVertical:60
},
textWrapper:{
    marginHorizontal:60
},
title:{
    fontFamily:'OpenSans-Bold',
    fontSize:24,
    textAlign:'center',
    color:COLORS.black
},
text:{
    marginTop:20,
    fontFamily:'OpenSans-SemiBold',
    fontSize:14,
    textAlign:'center',
    color:COLORS.gray
},
rightTextWrapper:{
    width:40,
    height:40,
    marginRight:20,
    alignItems:'center',
    justifyContent:'center'
},
rightText:{
    color:COLORS.blue,
    fontFamily:'Opensans-SemiBold',
    fontSize:14
},
leftTextWrapper:{
    width:40,
    height:40,
    marginLeft:20,
    alignItems:'center',
    justifyContent:'center'
},
leftText:{
    color:COLORS.blue,
    fontFamily:'Opensans-SemiBold',
    fontSize:14
},
dotStyle:{
    backgroundColor:COLORS.blueFaded
},
activeDotStyle:{
    backgroundColor:COLORS.blue
},
doneButtonWrapper:{
    flex:1,
    paddingLeft:35,
    paddingRight:35,
    borderRadius:25,
    marginRight:-60
},
doneButtonText:{
    fontSize:14,
    fontFamily:'Opensans-SemiBold',
    textAlign:'center',
    margin:10,
    color:COLORS.white
},

})
