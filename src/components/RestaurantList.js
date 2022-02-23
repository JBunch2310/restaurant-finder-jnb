import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function RestaurantList() {
    const [restaurants, setRestaurants] = useState();
    useEffect(() => {
        // fetch data from API
        fetch('https://bocacode-intranet-api.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(alert);
    }, []);
    return (
    <View>
    <Text>RestaurantList</Text>
    {!restaurants
    ? <Text> Loading... </Text>
    : restaurants.map(restaurant => {
        return <Text>{restaurant.name}</Text>
    })
    }
    </View>
    )
}

export default RestaurantList;