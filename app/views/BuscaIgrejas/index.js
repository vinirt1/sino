import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SectionBusca from '../../components/SectionBusca';

const BuscaIgrejasView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.body}>
        <SectionBusca 
          titulo="Onde deseja ir à missa?" 
          descricao={ props.dadosFiltro.local.nome }
          acao={() => props.navegarFiltro('Local')} /> 
        <SectionBusca 
          titulo="Quando?" 
          descricao={ props.dadosFiltro.diaSemana.nome }
          acao={() => props.navegarFiltro('DiasSemana')} />        
        <SectionBusca 
          titulo="Em qual horário?" 
          descricao={ props.dadosFiltro.horario.nome } 
          acao={() => props.navegarFiltro('Horarios')} />       
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
    backgroundColor: Colors.white,
    flex: 1,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 11,
  },
  footer: {
    backgroundColor: Colors.white,
    flex: 1,
    margin: 5,
    height: '100%'
  },
});

export default BuscaIgrejasView;
