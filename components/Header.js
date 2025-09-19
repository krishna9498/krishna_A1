import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const Header = () => {
  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80" }}
      style={styles.header}
      imageStyle={styles.headerImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.greeting}>Good evening</Text>
        <Text style={styles.title}>Music</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: { height: 200, borderRadius: 12, overflow: "hidden", justifyContent: "flex-end" },
  headerImage: { resizeMode: "cover" },
  overlay: { backgroundColor: "rgba(0,0,0,0.35)", padding: 12 },
  greeting: { color: "#fff", fontSize: 14, marginBottom: 6 },
  title: { color: "#fff", fontSize: 28, fontWeight: "700" },
});
