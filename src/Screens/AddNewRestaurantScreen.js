import React from 'react'
import {View, Text} from 'react-native'
import {Input, Button} from 'react-native-elements'

export default function AddNewRestaurantScreen() {
    const NewRestaurant = {
        address: '420 TownCenter Road',
        name: 'Tap 42',
        numRatings: 4,
        PhotoUrl:
            'https://bocacenter.com/wp-content/uploads/2015/12/infomain-tap-42.jpg',
        rating: 3.75,
    }
    constsendNewRestaurantInfo = () => {
        fetcch('path', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(NewRestaurant),
        })
    }
    return (
        <>
            <View>
                <Text> this is add new restaurants screen</Text>
                <Input placeholder="Restaurant Name" 
                spellCheck
                onChangeText={text => console.log(text)}
                />
                <Input placeholder='Address'/>
                <Input placeholder="Photo" keyboardType='url'/>
                <Input
                    placeholder='Rating'
                    keyboardType='numeric'
                    maxLength='1'
                />  
                <Button title="Create new restaurant"/>
            </View>
        </>
    )
}