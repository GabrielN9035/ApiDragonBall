import { Image } from "expo-image";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function List() {
  const [personagens, setPersonagens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://dragonball-api.com/api/characters?page=" + page,
      );
      const data = await response.json();
      setPersonagens((prev) => [...prev, ...data.items]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  return (
    <View style={s.screen}>
      {/* Header /}
      <View style={s.header}>
        <Text style={s.titulo}>Dragon Ball</Text>
        <Text style={s.subtitulo}>Personagens</Text>
      </View>

      {/ Input */}
      <TextInput
        style={s.input}
        placeholder="Ir para página..."
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={page.toString()}
        onChangeText={(text) => {
          setPersonagens([]);
          setPage(Number(text));
        }}
      />

      {loading && personagens.length === 0 ? (
        <View style={s.wrapImage}>
          <Image source={require("@/assets/preview.gif")} style={s.loading} />
        </View>
      ) : (
        <FlatList
          data={personagens}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={s.list}
          onEndReached={() => setPage((prev) => prev + 1)}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            loading ? (
              <Image
                source={require("@/assets/preview.gif")}
                style={s.loadingSmall}
              />
            ) : null
          }
          renderItem={({ item }) => (
            <Link href="/modal" asChild>
              <View style={s.card}>
                <Image
                  source={{ uri: item.image }}
                  contentFit="contain"
                  style={s.image}
                />
                <Text style={s.nome}>{item.name}</Text>
              </View>
            </Link>
          )}
        />
      )}
    </View>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },

  header: {
    paddingTop: 48,
    paddingBottom: 20,
    backgroundColor: "#1e272e",
    alignItems: "center",
    marginBottom: 12,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "800",
    color: "#ffa502",
  },

  subtitulo: {
    fontSize: 16,
    color: "#d2dae2",
    marginTop: 4,
  },

  input: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    fontSize: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    width: "92%",
  },

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

  wrapImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loading: {
    width: 120,
    height: 120,
  },

  loadingSmall: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginVertical: 20,
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
