import React, { useMemo } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import { useShoes } from '../store/useShoes';
import { Shoes } from '../types/Shoes';

export default function FavoritesTab() {
  const removeFavorite = useShoes(state => state.removeFavorite);
  const shoes = useShoes(state => state.shoes);
  const favoriteShoes = useShoes(state => state.favoriteShoes);

  const favList = useMemo(
    () => shoes.filter(s => favoriteShoes.includes(s.shoeId)),
    [shoes, favoriteShoes]
  );


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
