import React, { Component } from 'react';
import { ContentContainer } from '../../components/layout/ContentContainer';
import { Layout } from '../../components/layout/Layout';
import { MaxWidthContainer } from '../../components/layout/MaxWidthContainer';

class PopupCallback extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);

      if (params.get('token')) {
        window.localStorage.setItem('token', params.get('token'))
      }

      window.close()
    }
  }

  render() {
    return (
      <Layout>
        <MaxWidthContainer>
          <ContentContainer>
            <p>Waiting for callback</p>
          </ContentContainer>
        </MaxWidthContainer>
      </Layout>
    )
  }
}

export { PopupCallback };

