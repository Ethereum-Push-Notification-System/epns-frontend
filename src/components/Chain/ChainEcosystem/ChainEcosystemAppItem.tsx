// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import styled from 'styled-components';

import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';

import { H3, ItemH, ItemV, Span } from '../../../css/SharedStyling';

const ChainEcosystemAppItem: FC = ({ item, index }) => {
  const isMobile = useMediaQuery(device.mobileL);

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <Card
      key={index}
      background='#FFF'
      padding='24px'
      alignItems='flex-start'
      borderRadius='32px'
      justifyContent='space-between'
      onClick={() => openLink(item?.url)}
    >
      <ItemH
        alignItems='flex-start'
        justifyContent='space-between'
        cursor='pointer'
        flex='0'
      >
        <div
          style={{
            height: '128px',
            width: '128px',
            backgroundColor: '#D9D9D9',
            borderRadius: '24px',
          }}
        ></div>

        <TbArrowUpRight className='arrow-item' size={24} />
      </ItemH>

      <H3
        margin='24px 0 0 0'
        fontSize={isMobile ? '24px' : '28px'}
        fontWeight='500'
        fontFamily='N27'
        lineHeight={isMobile ? '100%' : '140%'}
        letterSpacing='-0.56px'
        className='hovered-text'
      >
        {item.title}
      </H3>
      <ItemH margin='0 0 auto 0' alignItems='flex-start' alignSelf='flex-start'>
        <Span
          margin='8px 0 0 0'
          fontSize={isMobile ? '16px' : '18px'}
          fontWeight='400'
          fontFamily='N27'
          lineHeight={isMobile ? '100%' : '140%'}
          letterSpacing='-0.64px'
          color='#757D8D'
        >
          {item.subtitle}
        </Span>
      </ItemH>

      <ItemH margin='71px 0 0 0' gap='8px' justifyContent='flex-start'>
        {item?.tags.map((item) => <TagItem tag={item}>{item}</TagItem>)}
      </ItemH>
    </Card>
  );
};

const TagItem = styled.div<{ tag: string }>`
  border-radius: 16px;
  background: ${({ tag }) =>
    tag.toLowerCase() === 'productivity'
      ? '#000'
      : tag.toLowerCase() === 'gaming'
        ? '#FC564A'
        : tag.toLowerCase() === 'social'
          ? '#4B75FF'
          : tag.toLowerCase() === 'defi' || tag.toLowerCase() === 'messaging'
            ? '#2EC780'
            : '#D9D9D9'};
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #fff;
  font-family: N27;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
`;

const Card = styled(ItemV)`
  cursor: pointer;

  .arrow-item {
    color: #fff;
  }

  &:hover {
    ${H3} {
      color: #d548ec;
    }

    .arrow-item {
      color: #d548ec;
    }
  }
`;

export default ChainEcosystemAppItem;
