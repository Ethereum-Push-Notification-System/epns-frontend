/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import { FC, useState } from 'react';

// Internal Components
import {
  sendEmailToChainMailingList,
  sendEmailToMailingList,
} from '@site/src/api';

const MESSAGES = {
  SUCCESS: 'Thanks for subscribing!',
  ERROR: 'Something went wrong!',
  REPEAT: 'Already subscribed!',
  INVALID: 'Invalid Email!',
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
type EmailValidationType = {
  chain?: boolean;
};
const useEmailValidationAndSend: FC<EmailValidationType> = (chain) => {
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEmailSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if (validateEmail(formData.email)) {
      try {
        setIsLoading(true);
        // Dynamically choose the API based on `chain`
        const apiToCall = chain
          ? sendEmailToChainMailingList
          : sendEmailToMailingList;

        const sendyAPIResponse = await apiToCall({
          email: formData.email as string,
          name: formData.email as string,
        });

        // check https://sendy.co/api for details
        if (sendyAPIResponse.toString() === '1') {
          setEmailError('');
          setEmailSuccess(MESSAGES.SUCCESS);
        } else {
          setEmailSuccess('');
          setEmailError(sendyAPIResponse);
        }
      } catch (e) {
        setEmailSuccess('');
        setEmailError(MESSAGES.ERROR);
        console.log('emailSent error: ', e);
      } finally {
        setIsLoading(false);
      }
    } else {
      setEmailSuccess('');
      setEmailError(MESSAGES.INVALID);
    }
  };

  return [isLoading, emailSuccess, emailError, onEmailSubmit];
};

export default useEmailValidationAndSend;
