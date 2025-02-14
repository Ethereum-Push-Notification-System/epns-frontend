// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import styled from 'styled-components';

import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { useSiteBaseUrl } from '../../../utils/useSiteBaseUrl';

import { H3, Image, ItemH, ItemV, Span } from '../../../css/SharedStyling';

const ChannelKnowledgeBaseComponentItem: FC = ({ item, index }) => {
  // for navigation
  const isMobile = useMediaQuery(device.mobileL);
  const baseURL = useSiteBaseUrl() || '';

  const openLink = (item: string) => {
    if (item?.url.startsWith('https://')) {
      window.open(item.url, '_blank');
    } else if (item?.url.startsWith('/')) {
      const internalUrl = `${baseURL}${item.url}`;
      window.open(internalUrl, item?.target || '_blank');
    } else {
      // Open internal route in a new tab
      const internalUrl = `${baseURL}/knowledge/${item?.slug}`;
      window.open(internalUrl, '_blank');
    }
  };

  return (
    <Card
      key={index}
      background='#FFF'
      padding='24px'
      alignItems='flex-start'
      borderRadius='32px'
      justifyContent='space-between'
      onClick={() => openLink(item)}
    >
      {item?.image && (
        <KnowledgeImage
          src={
            require(
              `@site/static/assets/website/chain/knowledge/${item?.image}.webp`
            ).default
          }
          alt={item?.title}
          title={item?.title}
        />
      )}

      {item?.imageDirectory && (
        <KnowledgeImage
          src={item.imageDirectory}
          alt={item?.title}
          title={item?.title}
        />
      )}

      {!item?.image && !item?.imageDirectory && (
        <div
          style={{
            height: 'auto',
            width: '100%',
            backgroundColor: '#D9D9D9',
            borderRadius: '24px',
            aspectRatio: '16/9',
          }}
        ></div>
      )}
      <H3
        margin='24px 0 0 0'
        fontSize={isMobile ? '24px' : '28px'}
        fontWeight='500'
        fontFamily='N27'
        lineHeight={isMobile ? '100%' : '140%'}
        letterSpacing='-0.64px'
      >
        {item?.title}
      </H3>
      <ItemH margin='0 0 auto 0' alignItems='flex-start' alignSelf='flex-start'>
        <Span
          margin='8px 0 0 0'
          fontSize={isMobile ? '16px' : '18px'}
          fontWeight='400'
          fontFamily='N27'
          lineHeight={isMobile ? '140%' : '140%'}
          letterSpacing='-0.64px'
          color='#757D8D'
        >
          {item?.subtitle}
        </Span>
      </ItemH>

      <ItemH
        alignItems='center'
        justifyContent='space-between'
        margin='32px 0 0 0'
        cursor='pointer'
        flex='0'
      >
        <Span
          fontSize={isMobile ? '16px' : '18px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight={isMobile ? '100%' : '140%'}
          letterSpacing='-0.64px'
          color='#D548EC'
        >
          {item?.slug == 'partners' ? 'Explore Partners' : 'Read More'}
        </Span>
        <TbArrowUpRight color='#D548EC' size={24} />
      </ItemH>
    </Card>
  );
};

const Card = styled(ItemV)`
  cursor: pointer;
`;

const KnowledgeImage = styled(Image)`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 24px;
`;

export default ChannelKnowledgeBaseComponentItem;
