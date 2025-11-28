import React, { useMemo } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import { useShoes } from '../store/useShoes';
import { Shoes } from '../types/Shoes';

/**
 * FavoritesTab Component
 *
 * Displays a list of shoes that the user has marked as favorites.
 * Shows an empty state message when no favorites are added.
 * Allows users to remove shoes from their favorites list.
 */
export default function FavoritesTab() {
  const removeFavorite = useShoes(state => state.removeFavorite);
  const shoes = useShoes(state => state.shoes);
  const favoriteShoes = useShoes(state => state.favoriteShoes);

  /**
   * Filter the full shoes list to only include favorited items
   * useMemo ensures this only has shoes and favoriteShoes as dependencies
   */
  const favList = useMemo(
    () => shoes.filter(s => favoriteShoes.includes(s.shoeId)),
    [shoes, favoriteShoes]
  );

  /**
   * Renders a single favorite shoe card with remove button
   */
  function renderItem({ item }: { item: Shoes }) {
    return (
      <View style={styles.card}>
        <Text>ShoeId: {item.shoeId}</Text>
        <Text>ShoeName: {item.shoeName}</Text>
        <Text>Brand: {item.brand}</Text>

        <View style={styles.btn}>
          <Button
            title="Remove from Favorites"
            onPress={() => removeFavorite(item.shoeId)}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {favList.length === 0 ? (
        <Text style={styles.empty}>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favList}
          keyExtractor={item => item.shoeId.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  empty: { padding: 20 },
  card: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  btn: { marginTop: 8, width: 180 },
});
