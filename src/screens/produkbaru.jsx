import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const produkbaru = () => {
  return (
    <View>
      <View style={{ backgroundColor: '#f0f0f0', padding: 10, alignItems: 'center', marginBottom: 20 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#900' }}>Promo Spesial Hari Ini!</Text>
    <Text style={{ fontSize: 16 }}>Diskon 20% untuk semua produk!</Text>
    </View>
    </View>
  )
}

export default produkbaru

const styles = StyleSheet.create({})