import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react/cjs/react.development'

const Api = () => {
    useEffect(() =>{
        //Call API Method Get
        fetch('http://10.117.52.52/TubesPAM2021-API-PHP/API-PHP/api.php')
        .then(response => response.json())
        .then(json => console.log(json))

        const register = {
            name: "Sipangkar",
            password: "1234"
        }

        //Call API Method Post
        fetch('http://10.117.52.52/TubesPAM2021-API-PHP/API-PHP/api.php',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                body: JSON.stringify(register)
            }
        }) 
        .then(response => response.json())
        .then(json => console.log(json))
        
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call Api</Text>
        </View>
    )
}

export default Api

const styles = StyleSheet.create({
    container:{

    },
    textTitle:{

    }
})
