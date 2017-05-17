import React from 'react';
import { Link } from 'react-router';

class PokemonPreview extends React.Component {

  render() {
    const { id, url, name } = this.props.pokemon;
    return (
      <Link
        to={`/view/${id}`}
        style={{ minWidth: 200 }}
        className='link dim grow mw4 bg-white ma2 pa3 shadow-1'
      >
        <img src={url} alt={name}/>
        <div className='gray tc'>{name}</div>
      </Link>
    );
  }
}

PokemonPreview.propTypes = {
  pokemon: React.PropTypes.object,
};

export default PokemonPreview;