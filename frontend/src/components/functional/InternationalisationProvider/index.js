import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { Redirect } from 'react-router-dom';
import { Language } from '../../../class/Language';

const messages = Language.getTranslationObject();

class InternationalisationProvider extends Component {
  render() {
    const { match, location } = this.props;

    if (!messages[match.params.locale]) return (
      <Redirect to={`/en-GB${location.pathname}`} />
    )

    return (
      <IntlProvider
        locale={match.params.locale}
        messages={Object.assign({}, messages['en-GB'], messages[match.params.locale])}
        defaultLocale="en-GB">
        <>
          <FormattedMessage id="site.name">
            {(title) => (
              <Helmet
                titleTemplate={`%s - ${title}`}
                defaultTitle={title}
                >
                <html lang={match.params.locale} />
              </Helmet>
            )}
          </FormattedMessage>
          {this.props.children}
        </>
      </IntlProvider>
    )
  }
}


export default InternationalisationProvider;
