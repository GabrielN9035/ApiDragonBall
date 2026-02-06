import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function inicial() {
  function nextPage() {
    router.push("/list");
  }
  return (
    <>
      <View style={s.wrapInicial}>
        <Text style={s.titulo}>
          Consumo da API dos personagens do DragonBall
        </Text>
      </View>
      <View style={s.wrapInicial}>
        <Image
          style={s.img}
          source={require("@/assets/iconDragonBall.webp")}
          alt="iconDragonBall.webp"
        />
      </View>
      <View style={s.wrapInicial}>
        <TouchableOpacity style={s.btn} onPress={nextPage}>
          <Text style={s.btnText}>Visitar personagens</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  wrapInicial: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#e37e0abf",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
    color: "#f19326",
  },
  img: {
    width: "70%",
    height: 250,
  },
  btn: {
    backgroundColor: "#2168c5",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },
});
