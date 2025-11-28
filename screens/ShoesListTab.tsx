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

/**
 * ShoesListTab Component
 *
 * Displays a scrollable list of all available shoes with the following features:
 * - View basic shoe information (ID, name, brand) in a list
 * - Tap on any shoe to see full details in a modal
 * - Add/remove shoes to/from favorites
 * - Automatically tracks visited shoes when viewing details
 */
export default function ShoesListTab() {
  // Access favorite shoes list and related actions from global state
  const favoriteShoes = useShoes(state => state.favoriteShoes);
  const addFavorite = useShoes(state => state.addFavorite);
  const removeFavorite = useShoes(state => state.removeFavorite);
  const setShoeAsVisited = useShoes(state => state.setShoeAsVisited);

  // Local state for managing the detail modal
  const [selectedShoe, setSelectedShoe] = useState<Shoes | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  /**
   * Opens the detail modal for a specific shoe
   * Also marks the shoe as visited in the global state
   */
  function openModal(shoe: Shoes) {
    setSelectedShoe(shoe);
    setModalVisible(true);
    setShoeAsVisited(shoe.shoeId);
  }

  /**
   * Toggles a shoe's favorite status
   * Adds to favorites if not already favorited, removes if already favorited
   */
  function toggleFavorite(shoeId: number) {
    if (favoriteShoes.includes(shoeId)) {
      removeFavorite(shoeId);
    } else {
      addFavorite(shoeId);
    }
  }

  /**
   * Renders a single shoe card in the list
   * Shows basic info and a button to add/remove from favorites
   */
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
      {/* Main list of all shoes */}
      <FlatList
        data={SHOES_ARRAY}
        keyExtractor={item => item.shoeId.toString()}
        renderItem={renderItem}
      />

      {/* Modal that shows detailed information when a shoe is tapped */}
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
