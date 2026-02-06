import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function List() {
  const [personagens, setPersonagens] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://dragonball-api.com/api/characters?page=" + page,
      );
      const data = await response.json();
      setPersonagens(data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 0 && page < 7) {
      fetchCharacters();
    }
  }, [page]);

  return (
    <>
      <View style={s.wrap}>
        <Text style={s.titulo}> Lista de Personagens</Text>
        <TextInput
          style={s.input}
          placeholder="Digite o valor"
          keyboardType="numeric"
          value={page.toString()}
          onChangeText={(value) => setPage(+value)}
        />
      </View>

      {loading ? (
        <View style={s.wrapImage}>
          <Image source={require("@/assets/preview.gif")} style={s.loading} />
        </View>
      ) : (
        <FlatList
          data={personagens}
          renderItem={({ item }: any) => {
            return (
              <View style={s.personagem}>
                <Text>{item.name}</Text>
                <Image source={{ uri: item.image }}></Image>
                <Text>{item.ki}</Text>
                <View style={s.imageContainer}>
                  <Image
                    source={{ uri: item.image }}
                    style={s.image}
                    contentFit="cover"
                  ></Image>
                </View>
              </View>
            );
          }}
        />
      )}
    </>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  wrap: {
    flex: 1,
  },
  titulo: {
    fontSize: 32,
    alignSelf: "center",
    textAlign: "center",
  },
  wrapImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    width: 70,
    height: 70,
  },
  imageContainer: {
    width: 220,
    height: 500,
  },
  image: {
    flex: 1,
    width: "auto",
  },
  personagem: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
