import React, { createContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import NowPlaying from "./components/NowPlaying";
import PlaylistList from "./components/PlaylistList";
import TrackList from "./components/TrackList";

export const MusicContext = createContext();

const App = () => {
  // songs + playlists state lives here
  const [songs] = useState([
    { id: "s1", title: "Nepali Ho", artist: "Ram Ale", image: "https://..." },
    { id: "s2", title: "Sangai Sangai", artist: "Ritesh ", image: "https://..." },
    // ...
  ]);

  const [playlists] = useState([
    { id: "p1", title: "Peace", image: "https://..." },
    { id: "p2", title: "Drive", image: "https://..." },
    // ...
  ]);

  const featured = songs[0];

  return (
    <View style={styles.container}>
      <MusicContext.Provider value={{ songs, playlists }}>
        <ScrollView contentContainerStyle={styles.content}>
          <Header />
          <NowPlaying song={featured} />
          <PlaylistList />
          <TrackList />
        </ScrollView>
      </MusicContext.Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 16, gap: 18 },
});
