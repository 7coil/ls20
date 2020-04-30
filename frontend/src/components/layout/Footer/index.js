import React, { Component } from 'react';
import styles from './index.module.scss';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { FormattedMessage } from 'react-intl';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={styles.primaryFooter}>
          <MaxWidthContainer>
            <p>Footer</p>
          </MaxWidthContainer>
        </div>
        <div className={styles.secondaryFooter}>
          <MaxWidthContainer>
            <FormattedMessage id="site.copyright" />
          </MaxWidthContainer>
        </div>
      </footer>
    )
  }
}

export { Footer };
