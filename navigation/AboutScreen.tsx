import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>

      <Text style={styles.body}>
        Our mission is to offer the best selection of shoes possible to our clients.
      </Text>

      <Text style={styles.body}>
        This app is still evolving. Feedback goes straight to the team, and
        we use it to decide what gets built next.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: '600', marginBottom: 12 },
  body: { fontSize: 16, marginBottom: 10 }
});
