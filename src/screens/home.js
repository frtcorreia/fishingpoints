import * as React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.gradient}>
        <Text style={styles.tituloMenu}>MENU</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Day1")}>
          <View style={styles.botao}>
            <Text style={styles.titulo}>Prova Estrela</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Day2")}>
          <View style={styles.botao}>
            <Text style={styles.titulo}>Prova Alcarrache</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              marginBottom: 15,
              fontWeight: "bold",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Legenda:
          </Text>
          <View style={styles.legenda}>
            <View style={styles.rochas} />
            <Text>Rochas</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.ervas} />
            <Text>Ervas</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.arvores} />
            <Text>Arvores</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.muros} />
            <Text>Muros</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.cabecos} />
            <Text>Cabeços</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.linguasAreia} />
            <Text>Lingua Areia</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.peixolas} />
            <Text>Peixolas</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
//backgroundColor: "linear-gradient(to top, #30cfd0 0%, #330867 100%);",
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  gradient: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    padding: 10,
    width: 200,
    marginTop: 20,
    backgroundColor: "red",
    borderRadius: 8,
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
  tituloMenu: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  legenda: {
    display: "flex",
    flexDirection: "row",
    fontSize: 14,
    marginTop: 12,
    backgroundColor: "#fff",
    width: 200,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
  },
  rochas: {
    backgroundColor: "violet",
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  ervas: {
    backgroundColor: "orange",
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  arvores: {
    backgroundColor: "green",
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  muros: {
    backgroundColor: "tan",
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  cabecos: {
    backgroundColor: "blue",
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  linguasAreia: {
    backgroundColor: "yellow",
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  peixolas: {
    backgroundColor: "red",
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
});
