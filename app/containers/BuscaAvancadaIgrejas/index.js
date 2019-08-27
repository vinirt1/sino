import React, { Component } from 'react';

import BuscaAvancadaIgrejas from '../../views/BuscaAvancadaIgrejas';

class BuscaAvancadaIgrejasContainer extends Component {
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
      <BuscaAvancadaIgrejas 
        navegarFiltro={this._navegarSeletorFiltro}
        buscarIgrejas={this._buscarIgrejas}
      />
    );
  }

}

export default BuscaAvancadaIgrejasContainer;
