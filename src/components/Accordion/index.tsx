/* eslint-disable @docusaurus/no-html-links */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// Internal Components
import { H2, H3 } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { useSiteBaseUrl } from '../../utils/useSiteBaseUrl';

// Internal Configs
import { device } from '@site/src/config/globals';

interface AccordionItem {
  title?: string;
  question?: string;
  content?: string;
  link?: string;
  renderAnswer?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  fontFamily?: string;
  firstOpen?: boolean;
  textColor?: string;
  fontWeight?: string;
  fontSize?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  fontFamily,
  firstOpen,
  textColor,
  fontWeight,
  fontSize,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    firstOpen === false ? null : 0
  );
  const isMobile = useMediaQuery(device.mobileL);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const baseUrl = useSiteBaseUrl() || '';

  return (
    <div>
      {items.map((item, index) => (
        <AccordionSection key={index}>
          <AccordionParent onClick={() => toggleAccordion(index)}>
            <H2
              color={textColor || '#FFF'}
              fontSize={fontSize ? fontSize : isMobile ? '20px' : '22px'}
              fontFamily={fontFamily}
              fontWeight={fontWeight || '400'}
              lineHeight='140%'
            >
              {item.title || item.question}
            </H2>
            <div>
              {activeIndex === index ? (
                <AiOutlineMinus color={textColor || '#FFF'} size={22} />
              ) : (
                <AiOutlinePlus color={textColor || '#FFF'} size={22} />
              )}
            </div>
          </AccordionParent>
          {activeIndex === index && item.content !== undefined && (
            <>
              <H3
                color={textColor || '#FFF'}
                fontSize={isMobile ? '16px' : '19px'}
                fontFamily={fontFamily}
                fontWeight='400'
                lineHeight='150%'
                padding='0 0 24px 0'
              >
                {item.content}

                {item.link && (
                  <a
                    color='#FFF'
                    fontFamily={fontFamily}
                    fontSize='16px'
                    fontWeight='300'
                    lineHeight='140%'
                    letterSpacing='normal'
                    target='_blank'
                    href={item.link}
                  >
                    {' '}
                    - Link
                  </a>
                )}
              </H3>
            </>
          )}

          {activeIndex === index &&
            item.renderAnswer !== undefined &&
            item.renderAnswer(baseUrl)}
        </AccordionSection>
      ))}
    </div>
  );
};

const AccordionSection = styled.div`
  border-bottom: 1px solid #2a2a39;

  h3 {
    white-space: pre-wrap;
  }
`;

const AccordionParent = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 24px;
`;

export default Accordion;
