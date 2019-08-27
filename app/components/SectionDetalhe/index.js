import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const SectionDetalheComponent = (props) =>
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{props.titulo}</Text>

        { !props.link &&
            <Text style={styles.sectionDescription}>
                {props.descricao}
            </Text>
        }

        { props.link &&
            <Text style={styles.sectionDescriptionLink}>
                {props.descricao}
            </Text>
        }

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
    sectionDescriptionLink: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'steelblue',
      },
  });

  export default SectionDetalheComponent;