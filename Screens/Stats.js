import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'



const stats = [
    { label: "Local", value: "Local" },
    { label: "Global", value: "Global" },
];

function Stats() {
    const [statsx, setStatsx] = useState(
        {
            cases: "",
            deaths: "",
            recovered: ""
        }
    )
    const [local, setLocal] = useState(true)
    const [global, setGlobal] = useState(false)
    const [test, settest] = useState('')


    const check = (() => {
        if (test == "Local") {
            setGlobal(true)
            setLocal(false);
            fetch('https://coronavirus-19-api.herokuapp.com/all').then((res => res.json().then((data) => {
                setStatsx(data)
            })))

        }

        if (test == "Global") {
            setLocal(true);
            setGlobal(false)
            fetch('https://coronavirus-19-api.herokuapp.com/countries/south%20africa').then((res => res.json().then((data) => {
                setStatsx(data)
            })))
        }

    })


    let { cases } = statsx;
    let { deaths } = statsx;
    let { active } = statsx;
    let { recovered } = statsx;
    let { critical } = statsx;

    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', top: 50, width: '100%' }}>

                <Text style={styles.header}>Statistics</Text>
                <SwitchSelector
                    options={stats}
                    initial={0}
                    onPress={local => {
                        settest(local)
                        check();
                    }}
                />
            </View>

            {local ?
                <View>
                    <View style={styles.infoContainer}>

                        <View style={styles.mainWrapper}>
                            <Text style={{ color: '#eee', fontSize: 18, fontWeight: 'bold' }}>Cases</Text>
                            <Text style={{ color: '#eee', fontSize: 28, fontWeight: 'bold' }}> {cases}</Text>
                        </View>
                        <View style={styles.mainWrapper1}>
                            <Text style={{ color: '#eee', fontSize: 18, fontWeight: 'bold' }}>Deaths</Text>
                            <Text style={{ color: '#eee', fontSize: 28, fontWeight: 'bold' }}> {deaths}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>

                        <View style={styles.mainWrapper2}>
                            <Text style={{ color: '#eee', fontSize: 18, fontWeight: 'bold' }}>Recovered</Text>
                            <Text style={{ color: '#eee', fontSize: 20, fontWeight: 'bold' }}> {recovered}</Text>
                        </View>
                        <View style={styles.mainWrapper3}>
                            <Text style={{ color: '#eee', fontSize: 18, fontWeight: 'bold' }}>Active</Text>
                            <Text style={{ color: '#eee', fontSize: 20, fontWeight: 'bold' }}> {active}</Text>
                        </View>
                        <View style={styles.mainWrapper4}>
                            <Text style={{ color: '#eee', fontSize: 18, fontWeight: 'bold' }}>Critical</Text>
                            <Text style={{ color: '#eee', fontSize: 20, fontWeight: 'bold' }} >{critical}</Text>
                        </View>
                    </View>
                </View>
                : <View style={styles.globalStatsContainer}>
                    <View style={styles.globalCases} >
                        <Text style={{ color: '#eee', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Cases</Text>
                        <Text style={{ color: '#eee', fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}> {cases}</Text>
                    </View>
                    <View style={styles.globalDeaths}>
                        <Text style={{ color: '#eee', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Deaths</Text>
                        <Text style={{ color: '#eee', fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}> {deaths}</Text>
                    </View>
                    <View style={styles.globalRecoveries}>
                        <Text style={{ color: '#eee', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Recovered</Text>
                        <Text style={{ color: '#eee', fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}> {recovered}</Text>
                    </View>
                </View>}
        </View>
    )
}

export default Stats

const styles = StyleSheet.create({
    header: {
        fontSize: 35,
        fontWeight: '200',
        marginBottom:20,
    },
    btnContainer: {
        borderWidth: 2,
        width: '50%',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 50,
        borderColor: '#eee'
    },
    locaText: {
        fontSize: 18,
        backgroundColor: 'blue',
        color: '#eee',
        borderRadius: 20,
        width: 100,
        textAlign: 'center'
    },
    locaText1: {
        fontSize: 18,
        color: '#eee',
        textAlign: 'center',
        marginRight: 20,
    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        padding: 10,
    },
    container: {
        justifyContent: 'center',
        padding: 5,
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    mainWrapper: {
        alignItems: 'center',
        width: '47%',
        height: '100%',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'orange',
        paddingTop: 10,
    },
    mainWrapper1: {
        alignItems: 'center',
        width: '47%',
        height: '100%',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'red',
        paddingTop: 10,
    },
    mainWrapper2: {
        alignItems: 'center',
        width: '33%',
        height: '100%',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'green',
        paddingTop: 10,
    },
    mainWrapper3: {
        alignItems: 'center',
        width: '33%',
        height: '100%',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'purple',
        paddingTop: 10,
    },
    mainWrapper4: {
        alignItems: 'center',
        width: '32%',
        height: '100%',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'lightblue',
        paddingTop: 10,
    },
    globalStatsContainer:
    {
        marginTop:20,
        
        width: '100%',
        height: '50%',
        padding: 10,
    },
    globalCases: {
        width: '95%',
        height: '30%',
        backgroundColor: 'orange',
        borderRadius: 20,
        marginBottom: 20,
        marginTop:20,
    },
    globalDeaths: {
        width: '95%',
        height: '30%',
        backgroundColor: 'red',
        borderRadius: 20,
        marginBottom: 20,
    },
    globalRecoveries: {
        width: '95%',
        height: '30%',
        backgroundColor: 'green',
        borderRadius: 20,
        marginBottom: 20,
    },
})
