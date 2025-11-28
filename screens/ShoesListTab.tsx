import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Button,
  Modal,
  StyleSheet,
} from 'react-native';

import { SHOES_ARRAY } from '../data/Shoes';
import { useShoes } from '../store/useShoes';
import { Shoes } from '../types/Shoes';

export default function ShoesListTab() {
  const favoriteShoes = useShoes(state => state.favoriteShoes);
  const addFavorite = useShoes(state => state.addFavorite);
  const removeFavorite = useShoes(state => state.removeFavorite);
  const setShoeAsVisited = useShoes(state => state.setShoeAsVisited);

  const [selectedShoe, setSelectedShoe] = useState<Shoes | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  function openModal(shoe: Shoes) {
    setSelectedShoe(shoe);
    setModalVisible(true);
    setShoeAsVisited(shoe.shoeId);
  }

  function toggleFavorite(shoeId: number) {
    if (favoriteShoes.includes(shoeId)) {
      removeFavorite(shoeId);
    } else {
      addFavorite(shoeId);
    }
  }

  function renderItem({ item }: { item: Shoes }) {
    const isFav = favoriteShoes.includes(item.shoeId);

    return (
      <Pressable onPress={() => openModal(item)} style={styles.card}>
        <Text>ShoeId: {item.shoeId}</Text>
        <Text>ShoeName: {item.shoeName}</Text>
        <Text>Brand: {item.brand}</Text>

        <View style={styles.btn}>
          <Button
            title={isFav ? 'Remove from Favorites' : 'Add to Favorites'}
            onPress={() => toggleFavorite(item.shoeId)}
          />
        </View>
      </Pressable>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={SHOES_ARRAY}
        keyExtractor={item => item.shoeId.toString()}
        renderItem={renderItem}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>
            {selectedShoe && (
              <>
                <Text style={styles.modalTitle}>Shoe Details</Text>
                <Text>ShoeId: {selectedShoe.shoeId}</Text>
                <Text>ShoeName: {selectedShoe.shoeName}</Text>
                <Text>Brand: {selectedShoe.brand}</Text>
                <Text>Cost: {selectedShoe.cost}</Text>
                <Text>ShoeType: {selectedShoe.shoeType}</Text>
                <Text>MadeIN: {selectedShoe.madeIn}</Text>
              </>
            )}

            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  btn: {
    marginTop: 8,
    width: 180,
  },
  modalBg: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCard: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
});
