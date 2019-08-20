import React, {
  Component
} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class ListaDividerView extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: props.lista,
    }
  }

  _renderItem = ({ item }) => {
    if (item.header) {
      return (
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerTitle}>{ item.nome }</Text>
        </View>   
      );
    } else if (!item.header) {
      return (
        <View style={styles.sectionContainer}>
          <TouchableOpacity onPress={() => this.props.acao(item)}>
            <Text style={styles.sectionTitle}>{ item.nome }</Text>
          </TouchableOpacity>
        </View>   
      );
    }
  };

  _keyExtractor = item => item.nome;

  render() {
    return ( 
      <SafeAreaView >
        <FlatList 
          data = {this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        /> 
      </SafeAreaView>
      );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 24,
    borderBottomWidth: 0.2,
    borderBottomColor: "#47315a",
  },
  dividerContainer: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: 'steelblue',
  },
  dividerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default ListaDividerView;