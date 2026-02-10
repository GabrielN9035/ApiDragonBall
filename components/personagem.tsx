import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Personagem({ item }: any) {
  return (
    <Link href={"/modal/${item.id}"}>
      <View style={styles.card}>
        <View style={style.wrapImg}>
          <Image
            source={{ uri: item.image }}
            contentFit="cover"
            style={s.image}
          />
          <Text>{item.name}</Text>
          <View style={s.imageContainer}></View>
        </View>
      </View>
    </Link>
  );
}

const s = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
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
});
