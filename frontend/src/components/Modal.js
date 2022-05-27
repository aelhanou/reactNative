import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc"


const ModalComp = ({ modalVisible, setModalVisible, otherParam, navigation }) => {


    const scotterInfo = (e) => {
        navigation.navigate('MotoDescription', {
            data: e
        })
    }

    return (
        <View style={tw`w-full `}>
            <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >



                    <ScrollView

                        style={tw`absolute z-0 w-full top-90 bg-gray-200  h-80 rounded-xl`}>
                        <TouchableOpacity
                            onPress={(e) => e.stopPropagation()}
                        >
                            <View
                                style={tw`w-full  flex-col items-center justify-center mt-10 `}>

                                {otherParam?.map(e => (

                                    <TouchableOpacity
                                        onPress={() => scotterInfo(e)}
                                        key={e?._id} style={tw` w-[90%] flex-row items-center mb-4 justify-around bg-white h-36 rounded-xl `}>
                                        <View>
                                            <Image style={{ width: 120, height: 70 }} source={{ uri: "http://192.168.0.172:8000/images/" + e?.images[0] }} />
                                        </View>
                                        <View style={tw`flex flex-col `}>
                                            <Text style={tw`mr-4 text-3xl `}>{e.name}</Text>
                                            <Text style={tw`mr-4 text-xl opacity-35`}>{e.rentPriceMounthly}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                                }
                            </View >
                        </TouchableOpacity>
                    </ScrollView>
                    {/* end */}
                    {/* <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable> */}
                </Modal>
            </TouchableOpacity >

            {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default ModalComp;