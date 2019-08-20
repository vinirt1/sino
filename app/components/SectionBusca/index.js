import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const SectionBuscaComponent = (props) =>
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{props.titulo}</Text>
        <TouchableOpacity onPress={() => props.acao()}>
            <Text style={styles.sectionDescription}>
                {props.descricao}
            </Text>
        </TouchableOpacity>
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
      color: 'steelblue',
    },
  });

  export default SectionBuscaComponent;