import React, { useCallback, useRef, useState } from 'react';
import { View, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';




export default function ({ navigation }) {


	const exampleItems = [
		{
			title: 'Item 1',
			text: 'Text 1',
		},
		{
			title: 'Item 2',
			text: 'Text 2',
		},
		{
			title: 'Item 3',
			text: 'Text 3',
		},
		{
			title: 'Item 4',
			text: 'Text 4',
		},
		{
			title: 'Item 5',
			text: 'Text 5',
		},
	];
	const [activeIndex, setActiveIndex] = useState(0);
	const [carouselItems, setCarouselItems] = useState(exampleItems);
	const ref = useRef(null);


	const renderItem = useCallback(({ item, index }) => (
		<View
			style={{
				backgroundColor: 'floralwhite',
				borderRadius: 5,
				height: 250,
				padding: 50,
				marginLeft: 25,
				marginRight: 25,
			
			}}
		>
			<Text style={{ fontSize: 30 }}>{item.title}</Text>
			<Text>{item.text}</Text>
		</View>
	), []);

	return (

		<Carousel
			layout="default"
			ref={ref}
			data={carouselItems}
			sliderWidth={300}
			itemWidth={300}
			renderItem={renderItem}
			onSnapToItem={(index) => setActiveIndex(index)}
		/>
	);
}
