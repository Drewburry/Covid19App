import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import Scrollview from '../components/Scrollview'

const bgImage = require('../assets/icons/virus.jpg')
const med = require('../assets/icons/medicine.png')
const sa = require('../assets/icons/sa3.png')
const Home = () => {
    return (
        <ImageBackground style={styles.backgroudImage} >
            <View style={styles.topContainer}>

                <View style={styles.TitleDropdownContainer}>
                    <Text style={styles.title} >COVID-19</Text>
                    <View style={styles.dropdownContainer}>
                        <Image style={styles.dropImg1} source={sa} />
                        <View style={styles.dropDownText}>
                            <Text>South Africa</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.text1}>Are you feeling sick?</Text>
                <Text style={styles.text2}>If you feel sick with any covid-19 symptoms. please call or sms us immediatly for help</Text>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={()=>{Linking.openURL('tel:0800029999');}}>
                        <Text style={styles.btnText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL(`sms:0800029999` );}}>
                        <Text style={styles.btnText1}>SMS</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Scrollview />
            <View style={styles.selfTest}>
                <TouchableOpacity onPress={() => {Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/coronavirus-self-checker.html')}}>                  
                     <Image style={{width:50, height:50, marginTop:10,}} source={med}/>
                </TouchableOpacity >
                <View style={{marginLeft:20,}}>
                    <Text style={styles.selfTestText}>Self Testing</Text>
                    <Text style={styles.selfTestText2}>Follow these steps to self test at home  </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Home

const styles = StyleSheet.create({
    backgroudImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    topContainer: {
        width: '100%',
        backgroundColor: '#297F87',
        height: '38%',
        borderWidth: 1,
        borderColor: '#eee',
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 20,
    },
    TitleDropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: "3%",
    },
    title: {
        fontSize: 25,
        color: '#eee'
    },
    dropdownContainer: {
        width: '42%',
        height: 35,
        borderWidth: 1,
        borderColor:'#eee',
        backgroundColor: '#eee',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        borderRadius: 50,
    },
    dropDownText: {
        fontWeight: 'bold',
    },

    dropImg1: {
        width: 30,
        height: 25,
        position: 'relative',
        marginLeft: 5,
    },
    text1: {
        fontSize: 18,
        color: "#eee",
        marginBottom: 5,
    },
    text2: {
        color: '#eee',
        fontWeight: '100',
        
    },
    btns: {
        padding: 5,
        justifyContent:'space-between',
        flexDirection: 'row',
    },

    btnText: {
        width: 150,
        height: 50,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#eee',
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 20,
        backgroundColor: '#FF2626',
        color: '#eee'
    },
    btnText1: {
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 50,
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 20,
        backgroundColor: 'green',
        color: '#eee'
    },
    selfTest: {
        marginTop:25,
        flexDirection:'row',
        borderWidth: 1,
        height: '25%',
        width: '100%',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'green',
        justifyContent:'space-between',
        padding:20,
    },
    selfTestText: {
        color: '#eee',
        fontSize: 25,
    },
    selfTestText2: {
        color: '#eee',
        fontSize: 15,
        marginRight:'15%',
    },
})
