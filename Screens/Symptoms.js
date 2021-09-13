import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
const cold = require('../assets/icons/cold.png')
const cough = require('../assets/icons/cough2.png')
const fever = require('../assets/icons/fever.png')
const Symptoms = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={{ flexDirection: 'row', padding:4,}}>
                    <Text style={styles.header}>Cold</Text>
                    <Image source={cold}  style={{marginRight:50,width:50, height:50}}/>
                </View>
                <Text style={{ fontSize: 18, color: '#eee' }}>The severity of Covid-19 symptoms can range from very mild to servere</Text>
            </View>

            <View style={styles.container2}>
               <View style={{ flexDirection: 'row', padding:4 }}>
                    <Text style={styles.header}>Coughing</Text>
                    <Image source={cough}  style={{marginRight:50, width:50, height:50}}/>
                </View>
                <Text style={{ fontSize: 18, color: '#eee' }}>It appears to spread from person to person amongs those in close contact</Text>
            </View>

            <View style={styles.container3}>
            <View style={{ flexDirection: 'row',padding:4 }}>
                    <Text style={styles.header}>Fever</Text>
                    <Image source={fever}  style={{marginRight:50, width:50, height:50}}/>
           </View>
                <Text style={{ fontSize: 18, color: '#eee' }}>People who are older or have existing chronic medical conditions such as heart or lung disease, are more valnurable than others.</Text>
            </View>

        </View>
    )
}

export default Symptoms

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
    },
    container1: {
        width: '98%',
        height: '30%',
        backgroundColor: 'orange',
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        marginBottom: '5%',
        justifyContent: 'center'
    },
    container2: {
        width: '98%',
        height: '30%',
        backgroundColor: '#368B85',
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        marginBottom: '5%',
        justifyContent: 'center'
    },
    container3: {
        width: '98%',
        height: '30%',
        backgroundColor: '#420516',
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        marginBottom: '5%',
        justifyContent: 'center'
    },
    header: {
        fontSize: 35,
        color: '#eee',
        fontWeight: 'bold'
    },
})
