import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Links } from '../../../enum/Links';
import { MaxWidthContainer } from '../MaxWidthContainer';
import styles from './index.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={styles.primaryFooter}>
          <MaxWidthContainer>
            <ul>
              <li><a href={Links.githubRepository}><FormattedMessage id="buttons.github_repository" /></a></li>
              <li><a href={Links.discordServer}><FormattedMessage id="buttons.discord_server" /></a></li>
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

