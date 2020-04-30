import React, { Component } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './index.module.scss';

class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export { Layout };

