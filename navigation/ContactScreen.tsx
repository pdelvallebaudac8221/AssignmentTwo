import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <Text style={styles.body}>
        Have any questions or suggestions? Get in touch with us!
      </Text>

      <Text style={styles.label}>Email</Text>
      <Text style={styles.body}>hi@shoes.com</Text>

      <Text style={styles.label}>Response Time</Text>
      <Text style={styles.body}>Usually within 24 to 48 hours.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: '600', marginBottom: 12 },
  label: { fontSize: 16, fontWeight: '500', marginTop: 14 },
  body: { fontSize: 16, marginTop: 4 }
});
