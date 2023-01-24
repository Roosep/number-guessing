import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [textState, setTextState] = useState("")
  
  useEffect(() => {
    startGame();
  }, [])

  function startGame() {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setTextState("Guess a number between 1-100");
    setGuessCount(1);
  }

  function GuessTheNumber() {
    setGuessCount(guessCount + 1);
    if (guess == number) {
      alert("You guessed the number in " + guessCount + " guesses");
      startGame();
    } else if (guess > number) {
      setTextState("Your guess " + guess + " is too high");
    } else {
      setTextState("Your guess " + guess + " is too low");
    }
  }

  return (
    <View style={styles.container}>
        <Text>{textState}</Text>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1, marginTop: 10, marginBottom: 10}}  keyboardType = 'numeric' onChangeText={guess => setGuess(guess)}  value={guess}/>
        <Button onPress={GuessTheNumber} title="Make a guess"></Button>
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
});
