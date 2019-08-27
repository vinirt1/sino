import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  CheckBox,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const SectionDetalheComponent = (props) =>
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{props.titulo}</Text>
        <CheckBox
          value={ true }
          onValueChange={() => console.log()}
        />
    </View>;    

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      borderBottomWidth: 0.2,
      borderBottomColor: "#47315a",
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      marginBottom: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.black,
    },
  });

  export default SectionDetalheComponent;