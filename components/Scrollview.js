import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const mask = require('../assets/icons/mask.png')
const san = require('../assets/icons/sanitize.png')
const dist = require('../assets/icons/distance.png')
const cough = require('../assets/icons/cough.png')

const ScrollItem = () => {
    return (
        <View style={{textAlign:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',fontSize:18, color:'green'}}>Prevention Tips</Text>
       
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.itemsContainer}>
            
            <TouchableOpacity style={styles.wrapper} onPress={() => alert("Ensure a 1-2 meter distance between you and other people always")}>
                <View style={styles.scrollItemsContainer}>
                    <Image style={{ width: 80, height: 80, }} source={dist} />
                </View>
                <Text style={{fontSize:15, fontWeight:'bold', marginTop:5,}}>Social distance</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.wrapper} onPress={() => alert('Always wear your mask when you are in social/group gatherings or in public spaces')}>
                <View style={styles.scrollItemsContainer}>
                    <Image style={{ width: 90, height: 90, }} source={mask} />
                </View>
                <Text style={{fontSize:15, fontWeight:'bold', marginTop:5,}}>Wear mask</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapper} onPress={() => alert('Create a good hygiene enviroment for yourself by always washing your hands and sanitize them as often as you can')}>
                <View style={styles.scrollItemsContainer}>
                    <Image style={{ width: 70, height: 70, }} source={san} />
                </View>
                <Text style={{fontSize:15, fontWeight:'bold', marginTop:5,}}>Sanitize</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.wrapper} onPress={() => alert('Always cough into your elbo or make use of disposable tissue when in pubic')}>
                <View style={styles.scrollItemsContainer}>
                    <Image style={{ width: 90, height: 90, borderRadius:50, }} source={cough} />
                </View>
                <Text style={{fontSize:15, fontWeight:'bold', marginTop:5,}}>Cough in elbow</Text>
            </TouchableOpacity>          
        </ScrollView>
        </View>
    )
}
const Scrollview = () => {
    return (
        <View style={styles.container}>
            <ScrollItem />
        </View>
    )
}

export default Scrollview

const styles = StyleSheet.create({
    itemsContainer: {
    },
    container: {
        flexDirection: 'row',
        height: '39%',
        width: "100%",
        padding: 20,
    },
    scrollItemsContainer: {
        borderWidth: 1,
        width: 100,
        height: 100,
        borderRadius: 70,
        backgroundColor: 'white',
        marginLeft: 20,
        padding: 3,
        alignItems: 'center'
    },
    wrapper:{
        marginTop:15,
        textAlign:'center',
        alignItems:'center', 
    },
})
