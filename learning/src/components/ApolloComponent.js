import React from 'react';

class ApolloComponent extends React.Component {

  // An abstract method
  apolloRender() {
    throw new TypeError('Please implement static abstract method');
  }

  render() {
    const { data } = this.props;
    const { loading, error } = data;

    if (loading) {
      return (<div>Loading</div>);
    }

    if (error) {
      console.error(error);
      return (<div>An unexpected error occurred</div>);
    }

    return (
      <div>
        {this.apolloRender()}
      </div>
    );
  }
}

ApolloComponent.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
  }).isRequired,
};

export default ApolloComponent;