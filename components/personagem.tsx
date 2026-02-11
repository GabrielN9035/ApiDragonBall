import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Personagem({ item }: any) {
  console.log(item);
  return (
    <Link href={`/modal/${item.id}`} asChild>
      <View style={s.card}>
        <Image
          source={{ uri: item.image }}
          contentFit="contain"
          style={s.image}
        />
        <Text style={s.nome}>{item.name}</Text>
      </View>
    </Link>
  );
}

const s = StyleSheet.create({
  personagem: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
    marginTop: 20,
  },
  imageContainer: {
    width: 350,
    height: 1000,
  },
  card: {},
  cardInfo: {},
  name: {},
  text: {},
  text2: {},
  wrapImg: {},
  nome: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    color: "#2f3542",
  },
  image: {
    width: 200,
    height: 260,
  },
});
