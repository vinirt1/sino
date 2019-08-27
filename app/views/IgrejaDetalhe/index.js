import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SectionDetalhe from '../../components/SectionDetalhe';

const IgrejaDetalheView = (props) => {
  const imageWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: imageWidth }}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Nome</Text>
            <Text style={styles.sectionDescription}>
                {props.igreja.nome}
            </Text>
        </View>   
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Missas</Text>
            <Text style={styles.sectionDescription}>
                Domigo: 09:00 às 17:00
            </Text>
            <Text style={styles.sectionDescription}>
                Segunda: 09:00 às 17:00
            </Text>
            <Text style={styles.sectionDescription}>
                Terça: 09:00 às 17:00
            </Text>
            <Text style={styles.sectionDescription}>
                Quarta: 09:00 às 17:00
            </Text>
        </View> 
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Confissões</Text>
            <Text style={styles.sectionDescription}>
                Terça: 09:00 às 17:00
            </Text>
            <Text style={styles.sectionDescription}>
                Quarta: 09:00 às 17:00
            </Text>
        </View>   
      </View>
      <View style={styles.footer}>
       
      </View>            
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1
  },
  header: {
    flex: 3,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 8.5,
  },
  footer: {
    backgroundColor: Colors.white,
    flex: 1,
    margin: 5,
    height: '100%'
  },
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

export default IgrejaDetalheView;
