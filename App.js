import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  box2: {
    flex: 1,
    backgroundColor: 'magenta',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
