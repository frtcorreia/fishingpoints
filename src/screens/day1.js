import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text, Linking } from "react-native";
import * as Location from "expo-location";
import data from "../data/dia1.json";

export function Day1() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location2 = await Location.getCurrentPositionAsync({});
      setLocation(location2);
    })();
  }, []);

  const OpenWEB = (url) => {
    Linking.openURL(url);
    alert("clicou ");
  };

  return (
    <View style={styles.container}>
      <MapView
        mapType="satellite"
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        followsUserLocation
        initialRegion={{
          latitude: 38.310516,
          longitude: -7.411921,
          latitudeDelta: 0.22,
          longitudeDelta: 0.22,
        }}
      >
        {data.map((marker, i) => {
          return (
            <Marker
              key={i}
              coordinate={marker.coordinates}
              pinColor={marker.color}
            >
              <Callout onPress={() => OpenWEB(marker.url)}>
                <View
                  style={{
                    borderColor: marker.color,
                    borderWidth: 2,
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 17 }}>{marker.typeText}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
