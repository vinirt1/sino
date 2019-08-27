import React, { Component } from 'react';

import IgrejaDetalhe from '../../views/IgrejaDetalhe';

class IgrejaDetalheContainer extends Component {
  constructor(props) {
    super(props);

    const { igreja } = props.navigation.state.params;
   
    this.state = {
      igreja,
    }
  }

  _navegarSeletorFiltro = (filtro) => {  
    this.props.navigation.navigate(filtro);
  }

  _buscarIgrejas = () => {
    this.props.navigation.navigate('ListaIgrejas');
  }

  render() {
    const { igreja } = this.state;

    return (
      <IgrejaDetalhe 
        igreja={ igreja }
      />
    );
  }

}

export default IgrejaDetalheContainer;
