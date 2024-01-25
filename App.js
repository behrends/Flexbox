import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3}>
        <View
          style={{
            width: '100%',
            height: 30,
            backgroundColor: 'black',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  box1: {
    width: 150,
    height: 150,
    backgroundColor: 'cyan',
  },
  box2: {
    width: '100%',
    height: 100,
    backgroundColor: 'magenta',
  },
  box3: {
    width: 100,
    height: '50%',
    backgroundColor: 'yellow',
  },
});
