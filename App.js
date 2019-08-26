import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const adjustCount = (direction) => {
    if (direction === 'increase') {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Clicky</Text>
      <Text>{count}</Text>
      <Button 
        title="+"
        style={styles.button}
        onPress={() => adjustCount('increase')}
      />
      <Button
        title="-"
        onPress={() => adjustCount('')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    color: 'red',
  }
});
