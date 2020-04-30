import React, { Component } from 'react';
import styles from './index.module.scss';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { FormattedMessage } from 'react-intl';
import links from '../../../data/links.yml'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={styles.primaryFooter}>
          <MaxWidthContainer>
            <ul>
              <li><a href={links.github_repository}><FormattedMessage id="buttons.github_repository" /></a></li>
              <li><a href={links.discord_server}><FormattedMessage id="buttons.discord_server" /></a></li>
            </ul>
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
