import React, { Component } from 'react';
import styles from './index.module.scss';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  render() {
    return (
      <header className={styles.primaryHeader}>
        <MaxWidthContainer>
          <span className={styles.siteName}><FormattedMessage id="site.name" /></span>
        </MaxWidthContainer>
      </header>
    )
  }
}

export { Header };
