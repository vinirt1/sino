import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { ListItem, CheckBox, Body, Text } from 'native-base';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const SectionBuscaComponent = (props) =>
    <View style={styles.sectionContainer}>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text style={styles.descricao}>{props.descricao}</Text>
          </Body>
        </ListItem>
    </View>;    

const styles = StyleSheet.create({
    sectionContainer: {
      paddingHorizontal: 10,
    },
    descricao: {
      fontSize: 17.5,
      fontWeight: '600',
      color: Colors.black,
    },
  });

export default SectionBuscaComponent;