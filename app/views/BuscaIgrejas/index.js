import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SectionBuscaComponent from '../../components/SectionBusca';

const BuscaIgrejasView = (props) => {
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
        <SectionBuscaComponent 
          titulo="Estados" 
          descricao="Distrito Federal" 
          acao={() => props.navegarFiltro('Estados')} /> 
        <SectionBuscaComponent 
          titulo="Cidades" 
          descricao="Águas Claras" 
          acao={() => props.navegarFiltro('Cidades')} />  
        <SectionBuscaComponent 
          titulo="Bairro" 
          descricao="Sul" 
          acao={() => props.navegarFiltro('Bairro')} />                                 
      </View>
      <View style={styles.footer}>
        <Button
          onPress={() => props.buscarIgrejas()}
          title="Buscar"
          color="steelblue"
          accessibilityLabel="Buscar igrejas correspondentes ao filtro informado"
        />
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
    color: 'steelblue',
  },
});

export default BuscaIgrejasView;
