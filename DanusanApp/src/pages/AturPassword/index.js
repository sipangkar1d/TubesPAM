import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AturPassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Text>Atur AturPassword</Text> 
                </View>
            </View>

        </View>
    )
}

export default AturPassword

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#138BFE',
        alignContent: 'center',
        flex: 1
    },
    body:{
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        top: '5%'
    }
})
