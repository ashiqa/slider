import React, { useContext } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_ADDRESS } from 'graphql/mutation/address';
import { FieldWrapper, Heading } from './Update.style';
import { ProfileContext } from 'contexts/profile/profile.context';

// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      id: props.item.id || null,
      name: props.item.name || '',
      info: props.item.info || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Title is required!'),
    info: Yup.string().required('Address is required'),
  }),
  handleSubmit: values => {
    console.log(values, 'values');
    // do submitting things
  },
});

const UpdateAddress = (props) => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,

    handleReset,
    isSubmitting,
  } = props;
  const addressValue = {
    id: values.id,
    type: 'secondary',
    name: values.name,
    info: values.info,
  };
  const { state, dispatch } = useContext(ProfileContext);

  const [addressMutation, { data }] = useMutation(UPDATE_ADDRESS);

  const handleSubmit = async () => {
    if (isValid) {
      const addressData = await addressMutation({
        variables: { addressInput: JSON.stringify(addressValue) },
      });
      console.log(addressData, 'address data');
      dispatch({ type: 'ADD_OR_UPDATE_ADDRESS', payload: addressValue });
      closeModal();
    }
  };
  return (
    <Form>
      <Heading>{item && item.id ? 'Edit Address' : 'Add New Address'}</Heading>
      <FieldWrapper>
        <TextField
          id='name'
          type='text'
          placeholder='Enter Title'
          error={touched.name && errors.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <FieldWrapper>
        <TextField
          id='info'
          as='textarea'
          placeholder='Enter Address'
          error={touched.info && errors.info}
          value={values.info}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <Button
        onClick={handleSubmit}
        type='submit'
        title='Save Address'
        size='medium'
        fullwidth={true}
      />
    </Form>
  );
};

export default FormEnhancer(UpdateAddress);
