import React from 'react';
import { SEO } from 'components/seo';
import OrderRecivedPage from 'containers/OrderReceived/OrderReceived';
import { withApollo } from 'helper/apollo';

class OrderRecived extends React.Component{
  render() {
    return (
      <>
        <SEO title='Invoice - KiuStore' description='Invoice Details' />
        <OrderRecivedPage />
      </>
    );
  }
}

export default withApollo(OrderRecived);
