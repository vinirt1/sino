import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const SectionBuscaAvancadaComponent = (props) =>
    <View style={styles.sectionContainer}>
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
    },
    sectionDescription: {
      marginTop: 8,
      marginBottom: 8,
      fontSize: 18,
      fontWeight: '400',
      textAlign:'right',
      color: 'steelblue',
    },
  });

  export default SectionBuscaAvancadaComponent;