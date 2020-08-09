import React from 'react';
import PokemonMap from './PokemonMap';
import { connect } from 'react-redux';
import Header from './Header';
import PokemonList from './PokemonList';

const App = ({ icon }) => {

  return (
    <div className={`App ${icon}`}>
      <Header/>
      <main>
        <PokemonList pokemons={pokemons} />
        <PokemonMap pokemons={pokemons} position={position} icon={weather.icon}/>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    icon: state.weather.icon
  }
}

export default connect(mapStateToProps)(App)
