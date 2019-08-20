/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import BuscaIgrejas from '../../views/BuscaIgrejas';

class BuscaIgrejasContainer extends Component {
  constructor(props) {
    super(props);
  }

  _navegarSeletorFiltro = (filtro) => {  
    this.props.navigation.navigate(filtro);
  }

  _buscarIgrejas = () => {
    this.props.navigation.navigate('ListaIgrejas');
  }

  render() {
    return (
      <BuscaIgrejas 
        navegarFiltro={this._navegarSeletorFiltro}
        buscarIgrejas={this._buscarIgrejas}
      />
    );
  }

}

export default BuscaIgrejasContainer;
