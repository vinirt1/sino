import BuscaIgrejas from '../containers/BuscaIgrejas';
import Estados from '../containers/Estados';
import Cidades from '../containers/Cidades';
import Bairros from '../containers/Bairros';
import ListaIgrejas from '../containers/ListaIgrejas';

const Routes = {
    BuscaIgrejas: {
        id: 'BuscaIgrejas',
        name: 'Busca Igrejas',
        description: 'Tela para pesquisa de igrejas através de filtros',
        screen: BuscaIgrejas,
    },
    Estados: {
        id: 'Estados',
        name: 'Estados',
        description: 'Relação de Estados da Federação para compor a pesquisa de igrejas',
        screen: Estados,
    },
    Cidades: {
        id: 'Cidades',
        name: 'Cidades',
        description: 'Relação de Cidades para compor a pesquisa de igrejas',
        screen: Cidades,
    },
    Bairros: {
        id: 'Bairros',
        name: 'Bairros',
        description: 'Relação de Bairros para compor a pesquisa de igrejas',
        screen: Bairros,
    },
    ListaIgrejas: {
        id: 'ListaIgrejas',
        name: 'Lista de Igrejas',
        description: 'Listas de igrejas correspondentes ao filtro informado',
        screen: ListaIgrejas,
    }
}

export default Routes;