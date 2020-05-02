import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiServer } from '../../../enum/Links';
import { fetchAuthIfRequired, fetchAuthIfPossible } from '../../../redux/actions/auth';
import { useIntl, injectIntl } from 'react-intl';

class UserHeaderLinks extends Component {
  constructor(props) {
    super(props)
    this.loginFrontend = this.loginFrontend.bind(this);
    this.logoutFrontend = this.logoutFrontend.bind(this);
    this.pollForClosed = null;
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAuthIfRequired())
  }
  componentWillUnmount() {
    if (this.pollForClosed !== null) clearInterval(this.pollForClosed);
  }
  loginFrontend() {
    const { dispatch } = this.props;
    const externalWindow = window.open(`${getApiServer()}/auth?return=${encodeURIComponent(`${window.location.origin}/${this.props.intl.locale}/popup`)}`, 'Login', 'width=500,height=700')
    
    this.pollForClosed = setInterval(() => {
      if (externalWindow.closed) {
        dispatch(fetchAuthIfPossible())
        clearInterval(this.pollForClosed);
      }
    }, 250)
  }
  logoutFrontend() {
    const { dispatch } = this.props;
    if (typeof window !== 'undefined') window.localStorage.removeItem('token');
    dispatch(fetchAuthIfPossible())
  }
  render() {
    return (
      <>
        {
          this.props.auth.data === null &&
          <li><a onClick={this.loginFrontend}>Login</a></li>
        }
        {
          this.props.auth.data !== null &&
          <>
            <li>{this.props.auth.data.username}#{this.props.auth.data.discriminator}</li>
            <li><a onClick={this.logoutFrontend}>Logout</a></li>
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

UserHeaderLinks = connect(mapStateToProps)(injectIntl(UserHeaderLinks));

export { UserHeaderLinks };

