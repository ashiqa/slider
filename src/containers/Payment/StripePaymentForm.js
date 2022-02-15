import React, { useContext } from 'react';
import {
  CardElement,
  injectStripe,
  Elements,
  StripeProvider,
  ReactStripeElements,
} from 'react-stripe-elements';
import { useMutation } from '@apollo/react-hooks';
import { closeModal } from '@redq/reuse-modal';
import { GET_PAYMENT } from 'graphql/mutation/order';
import StripeFormWrapper, {
  Heading,
  FieldWrapper,
} from './StripePaymentForm.style';
import { ProfileContext } from 'contexts/profile/profile.context';

const StripeForm = injectStripe(
  ({ getToken, buttonText, stripe }) => {
    const { state, dispatch } = useContext(ProfileContext);
    const handleSubmit = async () => {
      let { token } = await stripe.createToken({ name: 'Name' });
      getToken(token);
      if (token) {
        dispatch({ type: 'ADD_CARD', payload: token.card });
        closeModal();
      }
      console.log(token, 'token');
    };
    return (
      <StripeFormWrapper>
        <Heading>Enter card info</Heading>
        <FieldWrapper>
          <CardElement />
        </FieldWrapper>
        <button type="button" onClick={handleSubmit}>
          {buttonText ? buttonText : 'Pay Now'}
        </button>
      </StripeFormWrapper>
    );
  }
);

const StripePaymentForm = ({ item: { price, buttonText } }) => {
  const [getPayment] = useMutation(GET_PAYMENT);
  const sendTokenToServer = async (token) => {
    const payment_info = await getPayment({
      variables: { paymentInput: JSON.stringify({ token, amount: price }) },
    });
    console.log(payment_info, 'payment_info');
  };

  return (
    process.browser && (
      <StripeProvider apiKey={process.env.STRIPE_PUBLIC_KEY}>
        <div className="example">
          <Elements>
            <StripeForm
              getToken={token => sendTokenToServer(token)}
              buttonText={buttonText}
            />
          </Elements>
        </div>
      </StripeProvider>
    )
  );
};

export default StripePaymentForm;
