// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useScrollDirection } from '@site/src/hooks/useScrollDirection';

const PushIconSVG = () => {
  return (
    <svg
      width='104'
      height='40'
      viewBox='0 0 104 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.235 39.3287C20.4539 39.3287 22.3582 37.9994 23.2045 36.095C23.4098 35.6314 23.0672 35.1094 22.5603 35.1094H13.9108C13.4039 35.1094 13.0592 35.6303 13.2667 36.095C14.1129 37.9994 16.0173 39.3287 18.2361 39.3287'
        fill='url(#paint0_linear_16840_34652)'
      />
      <path
        d='M31.506 29.873C30.0989 29.873 28.9586 28.7328 28.9586 27.3256V18.0719C28.9586 13.0571 25.5163 8.84749 20.8668 7.67268C20.6961 6.35089 19.5688 5.32739 18.1995 5.32739C16.8301 5.32739 15.6942 6.35954 15.531 7.6889C11.3581 8.77184 8.17416 12.3038 7.60134 16.6594C7.5927 16.7231 7.58405 16.7858 7.57649 16.8507C7.56568 16.9371 7.55703 17.0225 7.55055 17.1101C7.54406 17.1976 7.5365 17.2841 7.53109 17.3705C7.52569 17.444 7.52029 17.5143 7.51704 17.5878C7.51056 17.7337 7.50624 17.8817 7.50624 18.0309V27.3245C7.50624 28.7252 6.37682 29.8611 4.97829 29.8719C4.31145 29.8773 3.76025 30.3918 3.76025 31.0608V31.0716C3.76025 31.733 4.2974 32.2701 4.95884 32.2701H31.5006C32.1621 32.2701 32.6992 31.733 32.6992 31.0716C32.7024 30.4112 32.1653 29.8741 31.5039 29.8741L31.506 29.873Z'
        fill='url(#paint1_linear_16840_34652)'
      />
      <path
        d='M25.9197 5.84733C28.9048 6.48715 31.1842 9.05616 31.4652 12.0975C31.4965 12.4347 31.7905 12.6865 32.1342 12.653C32.2974 12.6379 32.4455 12.559 32.5514 12.4336C32.6551 12.3071 32.7059 12.1472 32.6908 11.984C32.5254 10.2083 31.81 8.56657 30.62 7.23181C29.4387 5.91001 27.9029 5.01513 26.1769 4.64442C26.1337 4.63577 26.0905 4.63037 26.0483 4.63037C25.7652 4.63037 25.5079 4.82815 25.4474 5.11672C25.3761 5.44852 25.5879 5.77492 25.9197 5.84625V5.84733Z'
        fill='url(#paint2_linear_16840_34652)'
      />
      <path
        d='M26.6092 1.88932C31.2533 2.88472 34.8026 6.88469 35.2414 11.6142C35.2727 11.9514 35.5667 12.201 35.9104 12.1697C36.0736 12.1546 36.2216 12.0757 36.3275 11.9503C36.4313 11.8238 36.4821 11.6639 36.467 11.5007C36.2259 8.88629 35.1689 6.46426 33.4138 4.50048C31.6726 2.55076 29.4084 1.23221 26.8686 0.686414C26.8253 0.677768 26.7821 0.672363 26.7399 0.672363C26.4568 0.672363 26.1996 0.870146 26.139 1.15871C26.0655 1.49051 26.2785 1.81691 26.6102 1.88824L26.6092 1.88932Z'
        fill='url(#paint3_linear_16840_34652)'
      />
      <path
        d='M10.5489 5.84719C10.8807 5.77586 11.0925 5.4473 11.0212 5.1155C10.9585 4.82693 10.7034 4.62915 10.4203 4.62915C10.3781 4.62915 10.3349 4.63455 10.2917 4.6432C8.56674 5.01283 7.03096 5.90771 5.84858 7.23059C4.65865 8.56319 3.94101 10.2071 3.77781 11.9828C3.76268 12.146 3.8124 12.3059 3.91723 12.4324C4.02207 12.5588 4.17121 12.6377 4.33441 12.6518C4.68026 12.6831 4.97207 12.4324 5.00341 12.0963C5.28442 9.05927 7.56594 6.48917 10.5489 5.84827V5.84719Z'
        fill='url(#paint4_linear_16840_34652)'
      />
      <path
        d='M9.85829 1.88942C10.1901 1.81809 10.4019 1.48954 10.3306 1.15774C10.2679 0.869169 10.0128 0.671387 9.72968 0.671387C9.68645 0.671387 9.6443 0.67679 9.60107 0.685437C7.05907 1.23123 4.797 2.54978 3.05587 4.49951C1.30068 6.46437 0.245839 8.88531 0.00266356 11.4997C-0.0124674 11.6629 0.0372486 11.8229 0.142084 11.9493C0.245839 12.0758 0.396067 12.1547 0.559265 12.1687C0.902953 12.2001 1.19693 11.9493 1.22827 11.6132C1.66598 6.88587 5.21526 2.88807 9.85829 1.89051V1.88942Z'
        fill='url(#paint5_linear_16840_34652)'
      />
      <path
        d='M45.3386 14.8601C45.3386 11.5947 47.9858 8.94751 51.2512 8.94751H97.7082C100.974 8.94751 103.621 11.5947 103.621 14.8601V25.1398C103.621 28.4053 100.974 31.0524 97.7082 31.0524H51.2513C47.9858 31.0524 45.3386 28.4053 45.3386 25.1398V14.8601Z'
        fill='white'
      />
      <path
        d='M88.9851 26.0002V14H93.4081L96.4938 25.6574V14H98.7224V26.0002H94.1966L91.2137 14.4286V26.0002H88.9851Z'
        fill='black'
      />
      <path
        d='M84.6963 26.0002V23.8573L84.6963 16.1429V14H87.0107V16.1429L87.0106 23.8573V26.0002H84.6963Z'
        fill='black'
      />
      <path
        d='M80.8503 26.0002L80.1132 23.2402H75.3817L74.6445 26.0002H72.2959L75.5188 14H80.0103L83.199 26.0002H80.8503ZM75.9817 21.0116H79.5132L77.7474 14.4286L75.9817 21.0116Z'
        fill='black'
      />
      <path
        d='M68.7834 26.0002V20.9601H63.8976V26.0002H61.5833V14H63.8976V18.7315H68.7834V14H71.0977V26.0002H68.7834Z'
        fill='black'
      />
      <path
        d='M55.311 26.1545C52.2938 26.1545 50.2366 24.3031 50.2366 21.0287V18.9715C50.2366 15.6972 52.2938 13.8457 55.311 13.8457C58.2767 13.8457 60.2996 15.5257 60.3853 18.4401H58.071C58.0024 16.9143 57.0596 16.0743 55.311 16.0743C53.5109 16.0743 52.5509 17.0686 52.5509 18.9715V21.0287C52.5509 22.9316 53.5109 24.0116 55.311 24.0116C57.0081 24.0116 57.9682 23.1545 58.071 21.6973H60.3853C60.2482 24.5431 58.2253 26.1545 55.311 26.1545Z'
        fill='black'
      />
      <defs>
        <linearGradient
          id='paint0_linear_16840_34652'
          x1='24.0485'
          y1='25.9584'
          x2='16.9684'
          y2='37.994'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF94A6' />
          <stop offset='0.17' stop-color='#EA6AC0' />
          <stop offset='0.33' stop-color='#DA4AD5' />
          <stop offset='0.42' stop-color='#D53EDD' />
          <stop offset='0.53' stop-color='#CB3EDD' />
          <stop offset='0.72' stop-color='#B341E0' />
          <stop offset='0.95' stop-color='#8B45E4' />
          <stop offset='1' stop-color='#8247E5' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_16840_34652'
          x1='31.7049'
          y1='8.36655'
          x2='10.4514'
          y2='35.0002'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF94A6' />
          <stop offset='0.17' stop-color='#EA6AC0' />
          <stop offset='0.33' stop-color='#DA4AD5' />
          <stop offset='0.42' stop-color='#D53EDD' />
          <stop offset='0.53' stop-color='#CB3EDD' />
          <stop offset='0.72' stop-color='#B341E0' />
          <stop offset='0.95' stop-color='#8B45E4' />
          <stop offset='1' stop-color='#8247E5' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_16840_34652'
          x1='39.4684'
          y1='1.73712'
          x2='3.20389'
          y2='25.8082'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF94A6' />
          <stop offset='0.17' stop-color='#EA6AC0' />
          <stop offset='0.33' stop-color='#DA4AD5' />
          <stop offset='0.42' stop-color='#D53EDD' />
          <stop offset='0.53' stop-color='#CB3EDD' />
          <stop offset='0.72' stop-color='#B341E0' />
          <stop offset='0.95' stop-color='#8B45E4' />
          <stop offset='1' stop-color='#8247E5' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_16840_34652'
          x1='39.1289'
          y1='1.22464'
          x2='2.86444'
          y2='25.2958'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF94A6' />
          <stop offset='0.17' stop-color='#EA6AC0' />
          <stop offset='0.33' stop-color='#DA4AD5' />
          <stop offset='0.42' stop-color='#D53EDD' />
          <stop offset='0.53' stop-color='#CB3EDD' />
          <stop offset='0.72' stop-color='#B341E0' />
          <stop offset='0.95' stop-color='#8B45E4' />
          <stop offset='1' stop-color='#8247E5' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_16840_34652'
          x1='32.6962'
          y1='-8.46558'
          x2='-3.56825'
          y2='15.6077'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF94A6' />
          <stop offset='0.17' stop-color='#EA6AC0' />
          <stop offset='0.33' stop-color='#DA4AD5' />
          <stop offset='0.42' stop-color='#D53EDD' />
          <stop offset='0.53' stop-color='#CB3EDD' />
          <stop offset='0.72' stop-color='#B341E0' />
          <stop offset='0.95' stop-color='#8B45E4' />
          <stop offset='1' stop-color='#8247E5' />
        </linearGradient>
        <linearGradient
          id='paint5_linear_16840_34652'
          x1='30.9151'
          y1='-11.148'
          x2='-5.33314'
          y2='12.9134'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF94A6' />
          <stop offset='0.17' stop-color='#EA6AC0' />
          <stop offset='0.33' stop-color='#DA4AD5' />
          <stop offset='0.42' stop-color='#D53EDD' />
          <stop offset='0.53' stop-color='#CB3EDD' />
          <stop offset='0.72' stop-color='#B341E0' />
          <stop offset='0.95' stop-color='#8B45E4' />
          <stop offset='1' stop-color='#8247E5' />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ChainCountDownFeature = () => {
  const targetDate = new Date('2025-03-04T23:59:59').getTime();
  const [scrollDirection] = useScrollDirection(false);
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // If countdown is over, set isExpired to true
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsExpired(true);
        clearInterval(timer); // Stop the timer when countdown ends
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleRedirect = () => {
    window.open('http://push.org', '_blank');
  };

  // Do not render if countdown has expired
  if (isExpired) return null;

  return (
    <CountdownWrapper className={`header ${headerClass}`}>
      <PushIconSVG />

      <CountDownDiv>
        <CountDownText>Incentivized Devnet V2 in</CountDownText>
        <CountDownTime>
          {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M :
          {timeLeft.seconds}S
        </CountDownTime>
      </CountDownDiv>

      {/* comment button till tweet goes live */}
      <CountdownButton onClick={handleRedirect}>Learn More</CountdownButton>
    </CountdownWrapper>
  );
};

export default ChainCountDownFeature;

const CountdownWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px;
  background: #000;
  align-items: center;
  border-radius: 24px;
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);

  &.hide {
    top: 100%;
  }

  svg {
    width: 104px;
    height: auto;
  }

  @media (max-width: 1300px) {
    max-width: calc(100% - 48px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;

    svg {
      display: none;
    }
  }

  @media (max-width: 425px) {
    max-width: calc(100% - 32px);
  }
`;

const CountDownDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;
const CountDownText = styled.div`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.64px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;
const CountDownTime = styled.div`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 35.2px */
  letter-spacing: -0.64px;
  margin-left: 12px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

const CountdownButton = styled.button`
  display: flex;
  border: 1px solid #fff;
  border-radius: 16px;
  border: 1.5px solid #fff;
  padding: 16px 32px;
  font-family: N27;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  background: transparent;
  cursor: pointer;
  color: #fff;
  visibility: hidden;
`;
