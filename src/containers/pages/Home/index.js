import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import COLORS from '../../../assets/colors/colors'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>This is home page</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontFamily:'Opensans-SemiBold',
        fontSize:14,
        color:COLORS.blueFaded
    }
})
export default Home
