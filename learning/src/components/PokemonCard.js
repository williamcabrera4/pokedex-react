import React from 'react'
import styled from 'styled-components'
import ApolloComponent from './ApolloComponent';

const Button = styled.div`
  color: #A3A3A3;
  height: 48px;
  line-height: 1;
  font-size: 18px;
  padding: 15px 30px;
  cursor: pointer;
  font-weight: 300;
  border-radius: 4px
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 20px;
`;

class PokemonCard extends ApolloComponent {

  handleCancel() {
    this.props.router.replace('/');
  }

  apolloRender() {
    const { name, url } = this.props.data.Pokemon;
    return (
      <div className='w-100 pa4 flex justify-center'>
        <Card style={{ maxWidth: 400 }}>
          <input
            className='w-100 pa3 mv2'
            value={name}
            placeholder='Name'
            readOnly={true}
          />
          <input
            className='w-100 pa3 mv2'
            value={url}
            placeholder='Image Url'
            readOnly={true}
          />
          {url && <img src={url} role='presentation' className='w-100 mv3 pa4'/>}
          <div className='flex justify-between'>
            <Button onClick={() => this.handleCancel()}>Cancel</Button>
          </div>
        </Card>
      </div>
    )
  }
}

PokemonCard.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default PokemonCard;
