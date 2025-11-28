import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useShoes } from '../store/useShoes';

export default function ProfileTab() {
  const visitedCount = useShoes(state => state.visitedShoes.length);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Shoes Visited: {visitedCount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, fontWeight: '600' },
});
