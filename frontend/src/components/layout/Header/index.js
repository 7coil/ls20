import React, { Component } from 'react';
import styles from './index.module.scss';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { FormattedMessage } from 'react-intl';
import { UserHeaderLinks } from '../../functional/UserHeaderLinks';

class Header extends Component {
  render() {
    return (
      <header className={styles.primaryHeader}>
        <MaxWidthContainer>
          <div className={styles.container}>
            <span className={styles.siteName}><FormattedMessage id="site.name" /></span>
            <ul className={styles.links}>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <UserHeaderLinks />
            </ul>
          </div>
        </MaxWidthContainer>
      </header>
    )
  }
}

export { Header };
