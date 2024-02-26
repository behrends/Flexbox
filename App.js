import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'cyan' }]} />
      <View style={[styles.box, { backgroundColor: 'magenta' }]} />
      <View style={[styles.box, { backgroundColor: 'yellow' }]} />
      <View style={[styles.box, { backgroundColor: 'blue' }]} />
      <View style={[styles.box, { backgroundColor: 'orange' }]} />
      <View style={[styles.box, { backgroundColor: 'green' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Ausrichtung der Hauptachse
    justifyContent: 'center', // Anordnung der Elemente auf der Hauptachse
    alignItems: 'center', // Anordnung auf Querachse
    flexWrap: 'wrap',
    alignContent: 'center',
    gap: 5,
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

// alignItems: Anordnung auf der Querachse (senkrecht zur Hauptachse)
// alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
// alignItems hat 'stretch' als Default

// alignSelf: überschreibt Anordnung einzelner Komponenten (Querachse)
// Bemerkung: alignSelf wird für einzelne Komponenten deklariert
// alignSelf: 'auto', 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
// alignSelf hat 'auto' als Default

// flexWrap: legt Umbrüche fest (ggf. mit alignContent)
// flexWrap: 'wrap' erzwingt Umbrüche ('nowrap' ist Default)

// gap: legt mit Zahl Abstände zwischen Komponenten fest
// (oder spezifischer mit columnGap und rowGap)
