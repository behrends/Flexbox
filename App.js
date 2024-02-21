import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'cyan' }]} />
      <View style={[styles.box, { backgroundColor: 'magenta' }]} />
      <View style={[styles.box, { backgroundColor: 'yellow' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Ausrichtung der Hauptachse
    justifyContent: 'space-evenly', // Anordnung der Elemente auf der Hauptachse
  },
  box: {
    width: 100,
    height: 100,
  },
});

// Jede View ist bereits ein FlexContainer und hat das FlexBox-Layout

// FlexBox-Layout - wichtige Styling-Eigenschaften:

// flexDirection legt Ausrichtung der Hauptachse fest
// flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
// flexDirection hat 'column' als Default

// justifyContent legt Anordnung der Elemente auf der Hauptachse fest
// justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
// justifyContent hat 'flex-start' als Default
