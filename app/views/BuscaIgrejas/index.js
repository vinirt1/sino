import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
} from 'react-native';

import CheckBox from '../../components/CheckBox';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SectionBusca from '../../components/SectionBusca';
import Link from '../../components/Link'

const BuscaIgrejasView = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <View style={styles.header} />
      <View style={styles.body}>
        <SectionBusca 
          titulo="Onde deseja ir à missa?" 
          descricao={ props.dadosFiltro.local.nome }
          acao={() => props.navegarFiltro('Locais')} /> 
        <SectionBusca 
          titulo="Quando?" 
          descricao={ props.dadosFiltro.diaSemana.nome }
          acao={() => props.navegarFiltro('DiasSemana')} />        
        <SectionBusca 
          titulo="Em qual horário?" 
          descricao={ props.dadosFiltro.horario.nome } 
          acao={() => props.navegarFiltro('Horarios')} />  
        <CheckBox descricao="Mostre-me horários próximos"/>  
        <View style={styles.containerLink}>
          <Link
            descricao="Busca Avançada" 
            acao={() => props.navegarFiltro('BuscaAvancadaIgrejas')} />    
        </View>
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
  containerLink: {
    marginTop: 25,
    paddingHorizontal: 24,
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
