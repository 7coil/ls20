import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Header</h1>
        </header>
        <main>
          <h1>Main Content</h1>
        </main>
        <footer>
          <hr />
          <p>Footer</p>
        </footer>
      </div>
    )
  }
}

export { Layout };

