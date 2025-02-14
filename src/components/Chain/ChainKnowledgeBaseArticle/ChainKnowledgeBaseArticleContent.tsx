/* eslint-disable @docusaurus/no-html-links */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeSanitize from 'rehype-sanitize';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { extractTOC } from '../utils/ExtractTableOfContent';

import { H3, ItemH, ItemV, Span } from '../../../css/SharedStyling';
import Link from '@docusaurus/Link';

const ChainKnowledgeBaseArticleContent = ({ item }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const { content } = item;

  const toc = extractTOC(content);

  return (
    <ChainKnowledgeBaseArticleWrapper>
      <ItemH flexDirection={isTablet && 'column'} gap='100px' flexWrap='nowrap'>
        <ItemV
          maxWidth='350px'
          alignItems='flex-start'
          alignSelf='flex-start'
          gap='32px'
        >
          <Span
            fontSize={isMobile ? '16px' : '20px'}
            fontWeight='400'
            fontFamily='N27'
            lineHeight='120%'
            color='#000'
          >
            <Breadcrumb to={'/chain/knowledge'}>Home</Breadcrumb>
            {`  > Knowledge Base`}
          </Span>
          <H3
            fontSize={isMobile ? '36px' : '54px'}
            fontWeight='500'
            fontFamily='N27'
            lineHeight='120%'
            letterSpacing='-1.04px'
            color='#000'
          >
            Why Push Chain?
          </H3>

          {!isTablet && (
            <ItemV
              background='#FFF'
              padding='32px'
              gap='32px'
              borderRadius='32px'
              alignItems='flex-start'
              margin='12px 0 0 0'
            >
              {toc.map((item, index) => (
                <ListItem key={index} href={`#${item.id}`}>
                  {item.text}
                </ListItem>
              ))}
            </ItemV>
          )}
        </ItemV>

        <MarkdownSection alignItems='flex-start' alignSelf='flex-start'>
          <Markdown
            remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
            rehypePlugins={[rehypeSlug, rehypeRaw, rehypeSanitize]} // Allow raw HTML rendering and sanitizing
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target='_blank' rel='noopener noreferrer'>
                  {props.children}
                </a>
              ),
            }}
          >
            {content}
          </Markdown>
        </MarkdownSection>
      </ItemH>
    </ChainKnowledgeBaseArticleWrapper>
  );
};

export default ChainKnowledgeBaseArticleContent;

const ChainKnowledgeBaseArticleWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;

const MarkdownSection = styled(ItemV)`
  // styles for images
  color: #000;
  img {
    border-radius: 32px;
  }
  p {
    img {
      border-radius: 32px;
    }
  }

  // styles for list
  ul,
  ol {
    li {
      list-style: inherit !important;
    }
  }
`;

const ListItem = styled.a`
  color: #757d8d;
  font-family: N27;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;

  &:hover {
    color: #cf59e2;
  }
`;

const Breadcrumb = styled(Link)`
  color: #000;

  &:hover {
    color: #cf59e2;
  }
`;
