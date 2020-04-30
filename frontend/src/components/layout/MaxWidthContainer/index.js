import React, { Component } from 'react';
import styles from './index.module.scss';

class MaxWidthContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

export { MaxWidthContainer };
