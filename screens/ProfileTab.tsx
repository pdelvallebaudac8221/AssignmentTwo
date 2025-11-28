import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useShoes } from '../store/useShoes';

/**
 * ProfileTab Component
 *
 * Displays user profile statistics.
 * Currently shows the count of shoes that the user has viewed (visited).
 * A shoe is marked as visited when the user opens its detail modal.
 */
export default function ProfileTab() {
  // Get the total number of shoes the user has viewed
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
