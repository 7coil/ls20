import React, { Component } from 'react';
import { Layout } from '../../components/layout/Layout';
import { MaxWidthContainer } from '../../components/layout/MaxWidthContainer';
import { ContentContainer } from '../../components/layout/ContentContainer';

class Home extends Component {
  render() {
    return (
      <Layout>
        <MaxWidthContainer>
          <ContentContainer>
            <p>This is the content</p>
          </ContentContainer>
        </MaxWidthContainer>
      </Layout>
    )
  }
}

export {
  Home
}
