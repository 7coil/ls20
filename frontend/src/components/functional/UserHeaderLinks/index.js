import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiServer } from '../../../enum/Links';
import { fetchAuthIfRequired } from '../../../redux/actions/auth';

class UserHeaderLinks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAuthIfRequired())
  }
  render() {
    return (
      <>
        {
          this.props.auth.data === null &&
          <li><a href={`${getApiServer()}/auth?return=${encodeURIComponent(window.location.href)}`}>Login</a></li>
        }
        {
          this.props.auth.data !== null &&
          <>
            <li>{this.props.auth.data.username}#{this.props.auth.data.discriminator}</li>
            <li>Logout</li>
          </>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
}

UserHeaderLinks = connect(mapStateToProps)(UserHeaderLinks);

export { UserHeaderLinks };

