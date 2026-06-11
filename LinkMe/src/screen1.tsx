import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

export default function Screen1({navigation}:any) {
     useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('screen2'); // Next screen name
    }, 3000); // 3000 ms = 3 sec

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To LinkMe </Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#39144A'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'#ffffff'
  },
})