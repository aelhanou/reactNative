import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import tw from "twrnc"

export default function Logo() {
    return (
        <View style={tw`w-[100%] mr-14 `}>
            <Image  source={require('../../assets/scotter.png')} style={tw`w-[90%]   h-40 `} />
        </View>
    )
}

