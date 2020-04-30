import React, { Component } from 'react';
import styles from './index.module.scss';

class ContentContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

export { ContentContainer };
