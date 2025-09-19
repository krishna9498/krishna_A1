import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NowPlaying = ({ song }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: song.image }} style={styles.albumArt} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default NowPlaying;

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", padding: 12, borderRadius: 10, backgroundColor: "#f2f2f2", gap: 12 },
  albumArt: { width: 72, height: 72, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "700" },
  artist: { fontSize: 13, color: "#666", marginTop: 4 },
});
