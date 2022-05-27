import React, { useState, useEffect, useCallback, useRef } from "react";
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Image, View, Text } from 'react-native';
import Modal from "../components/Modal";
import Yo from "../components/Yo"
import tw from "twrnc"

export default function ({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [otherParam, setOtherParam] = useState([])
  const [parcs, setParcs] = useState([])
  const [region, setRegion] = useState({
    "latitude": 32.301059896498586,
    "latitudeDelta": 0.10873297010665084,
    "longitude": -9.228742104023695,
    "longitudeDelta": 0.06705556064844131
  });
  const [colorArr, setColorArr] = useState(["green", "pink", "red", "yellow"])


  const getParcs = async () => {
    let res = await fetch("http://192.168.0.172:8000/getParcs", {
      method: 'GET',
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    let data = await res.json()
    setParcs(data)


  }


  const gotoMotoe = (data) => {
    // navigation.navigate('MotoDescription', {
    //   otherParam: data
    // })
    setOtherParam(data)
    setModalVisible(!modalVisible)

  }

  useEffect(() => {

    getParcs()

  }, [])





  return (
    <>
      <MapView
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.map}
        initialRegion={region} //your region data goes here.
        onRegionChangeComplete={(region) => setRegion(region)}
      >

        {parcs && parcs?.map((e, i) =>
          <Marker
            coordinate={e?.position}
            key={i}
            pinColor={colorArr[i]}
            //uses relative file path. 
            onPress={() => gotoMotoe(e.motorcycletype)
            }
          >
            <Image
              source={require("../../assets/scotter.png")}
              style={{ width: 80, height: 70 }}
            />
          </Marker>
        )
        }
      </MapView>

      {modalVisible && <Yo data={otherParam} navigation={navigation} />}
      {/* <Modal navigation={navigation} setModalVisible={setModalVisible} modalVisible={modalVisible} otherParam={otherParam} /> */}
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});