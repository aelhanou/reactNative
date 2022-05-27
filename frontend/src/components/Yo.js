import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Image, Text,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import tw from "twrnc"


const Yo = ({ data, navigation }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(data);
    const ref = useRef(null);

    useEffect(() => {
        if (data) {
            setCarouselItems(data)
        }
    }, [data])


    const scotterInfo = (e) => {
        navigation.navigate('MotoDescription', {
            data: e
        })
    }


    const renderItem = useCallback(({ item, index }) => (
        <TouchableOpacity
            onPress={() => scotterInfo(item)}

            key={item?._id} style={tw`absolute top-20  w-[90%]  flex-row items-center mb-4 justify-around bg-white h-36 rounded-xl `}>
            <View>
                <Image style={{ width: 120, height: 70 }} source={{ uri: "http://192.168.0.172:8000/images/" + item?.images[0] }} />
            </View>
            <View style={tw`flex flex-col `}>
                <Text style={tw`mr-4 text-3xl `}>{item.name}</Text>
                <Text style={tw`mr-4 text-xl opacity-35`}>{item.rentPriceMounthly}</Text>
            </View>
        </TouchableOpacity>
    ), []);

    return (
        <View style={tw`absolute -bottom-23 flex-row justify-center  w-full h-82 text-white  rounded-xl `}>

            <Carousel
                layout="default"
                ref={ref}
                data={carouselItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
        </View>
    );
}

export default Yo;