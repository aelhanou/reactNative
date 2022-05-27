import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from "twrnc"




export default function ({ route, navigation }) {

	const { data } = route.params;
	console.log(data);

	return (
		<View style={tw`w-full flex-col items-center justify-center py-10 bg-[#eceef0] `}>
			<View style={tw`h-70   w-full flex justify-center items-center`}>
				<Image style={tw`w-[80%] h-40 `} source={{ uri: "http://192.168.0.172:8000/images/" + data.images[0] }} />
			</View>
			<View style={tw`w-full flex flex-col bg-[#f6f6f6] `}>
				<View style={tw`w-full flex flex-col h-70  justify-around`}>
					<View style={tw`w-full flex flex-row h-40  justify-center `}>
						<View style={tw`w-[80%] flex flex-col justify-around `}>
							<Text style={tw`text-sm opacity-30 font-bold`}>Electric Scotter</Text>
							<View>
								<Text style={tw`text-3xl font-extralight	`}>{data.name}</Text>
								<Text style={tw`text-3xl font-extralight	`}>ES2 Black</Text></View>
							<View style={tw`flex flex-row`} >
								<AntDesign name="star" size={18} color="black" />
								<AntDesign name="star" size={18} color="black" />
								<AntDesign name="star" size={18} color="black" />
								<AntDesign name="star" size={18} color="black" />
							</View>
						</View>
					</View>
					<View style={tw`flex flex-row    w-full h-20      `}>
						<Text style={tw`w-40 `}></Text>
						<View style={tw` w-full bg-black flex flex-row rounded-2xl   items-center mx-auto  `}>
							<Text style={tw` px-16   flex flex-col justify-center text-2xl    text-white`} > {data?.rentPriceMounthly} Mounthly</Text>

						</View>
					</View>
				</View>
				<View style={tw`w-full h-29 flex-row justify-center items-center `}>
					<View style={tw`w-[80%] flex-row justify-around  `}>
						<View style={tw`flex flex-col items-center`}>
							<View style={tw`p-5 mb-2 bg-white rounded-xl`}>
								<FontAwesome name="power-off" size={24} color="black" />
							</View>
							<Text>{data?.batteryCapacity}</Text>
						</View>
						<View style={tw`flex flex-col items-center`}>
							<View style={tw`p-5 mb-2 bg-white rounded-xl`}>
								<MaterialCommunityIcons name="power-plug-off" size={24} color="black" />
							</View>
							<Text>250 W</Text>
						</View>

						<View style={tw`flex flex-col items-center`}>
							<View style={tw`p-5 mb-2 bg-white rounded-xl`}>
								<MaterialCommunityIcons name="speedometer" size={24} color="black" />
							</View>
							<Text>{data?.topSpeed}</Text>
						</View>

						<View style={tw`flex flex-col items-center`}>

							<View style={tw`p-5 mb-2 bg-white rounded-xl`}>
								<MaterialCommunityIcons name="weight-kilogram" size={24} color="black" />
							</View>
							<Text>{data?.Weight}</Text>
						</View>

					</View>
				</View>
			</View>
		</View >

	);
}
