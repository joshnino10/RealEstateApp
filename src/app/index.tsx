import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from '../../Component/Onboarding/Onboarding'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Onboarding/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'white'
  }
})