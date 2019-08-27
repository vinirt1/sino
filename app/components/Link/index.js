import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const LinkComponent = (props) =>
      <TouchableOpacity onPress={() => props.acao()}>
          <Text style={styles.descricao}>
              {props.descricao}
          </Text>
      </TouchableOpacity>;

const styles = StyleSheet.create({
    descricao: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      textAlign:'right',
      color: 'steelblue',
    },
  });

export default LinkComponent;