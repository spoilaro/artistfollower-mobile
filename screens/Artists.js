import React, { Component, useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import axios from "axios"


export default function Artists() {

    const [searchText, setSearchText] = useState("")
    const [resText, setResText] = useState("")

    function handleChange(event) {
        setSearchText(event.target.value)
    }

    async function sendSearch() {
        const response = await axios.get({
            url: "http://localhost:5001/api/search",

        })

        console.log(response);
    }

    return (

        <View>
            <TextInput
                style={styles.input}
                placeholder="Type artist name here"
                value={searchText}
                onChange={handleChange}
            />
            <View style={styles.buttonContainer} >

                <Button title="Press Me" onPress={sendSearch} />
            </View>
            <Text></Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#454545",

    },
    input: {
        height: 40,
        margin: 10,
        padding: 5,
        borderWidth: 0.5
    },
    buttonContainer: {
        width: 100,
    }
})