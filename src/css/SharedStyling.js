// External Components
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Internal Configs
import GLOBALS, { device, structure } from '@site/src/config/globals';
/**
 * Usage Hierarchy
 *
 * Section
 * 		Content
 * 			ItemH
 * 				ItemV  ItemV ItemV  ItemV
 * 			ItemH
 * 				ItemV  ItemV ItemV  ItemV
 */

export const HeroHeader = styled.h1`
  font-family: ${(props) =>
    props.fontFamily || 'Strawford, Helvetica, sans-serif'};
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_LIGHT};
  font-size: 68px;
  line-height: 110%;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-align: ${(props) => props.textAlign || 'initial'};
  text-transform: none;
  text-shadow: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

// Section covers the entire width and height
export const Section = styled.section`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
        ? props.background
        : 'transparent' || 'transparent'};
  display: ${(props) => props.display || 'flex'};
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0px'};
  min-height: ${(props) => props.minHeight || 'auto'};
  overflow: ${(props) => props.overflow || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
`;

export const Content = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  position: ${(props) => props.position || 'relative'};

  flex: ${(props) => props.flex || '1'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) =>
    props.maxWidth ||
    `${GLOBALS.STRUCTURE.MAX_WIDTH + structure.PADDING.DESKTOP.LEFT + structure.PADDING.DESKTOP.RIGHT}px`};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  box-sizing: ${(props) => props.boxSizing || 'border-box'};
  margin: ${(props) => props.margin || 'initial'};
  padding: ${(props) => props.padding || GLOBALS.STRUCTURE.PADDING.DESKTOP};
  overflow: ${(props) => props.overflow || 'hidden'};

  &.fluid {
    padding: ${(props) =>
      props.padding || GLOBALS.STRUCTURE.PADDING.FLUID.DESKTOP};
    max-width: 100%;
  }

  &.vertfluid {
    padding: ${(props) =>
      props.padding || GLOBALS.STRUCTURE.PADDING.VERTICAL_FLUID.DESKTOP};
  }

  @media ${device.laptop} {
    max-width: ${(props) =>
      props.maxWidth ||
      `${GLOBALS.STRUCTURE.MAX_WIDTH + structure.PADDING.TABLET.LEFT + structure.PADDING.TABLET.RIGHT}px`};
    padding: ${(props) => props.padding || GLOBALS.STRUCTURE.PADDING.TABLET};

    &.fluid {
      padding: ${(props) =>
        props.padding || GLOBALS.STRUCTURE.PADDING.FLUID.TABLET};
    }

    &.vertfluid {
      padding: ${(props) =>
        props.padding || GLOBALS.STRUCTURE.PADDING.VERTICAL_FLUID.TABLET};
    }
  }

  @media ${device.mobileL} {
    padding: ${(props) => props.padding || GLOBALS.STRUCTURE.PADDING.MOBILE};
    max-width: ${(props) =>
      props.maxWidth ||
      `${GLOBALS.STRUCTURE.MAX_WIDTH + structure.PADDING.MOBILE.LEFT + structure.PADDING.MOBILE.RIGHT}px`};

    &.fluid {
      padding: ${(props) =>
        props.padding || GLOBALS.STRUCTURE.PADDING.FLUID.MOBILE};
    }

    &.vertfluid {
      padding: ${(props) =>
        props.padding || GLOBALS.STRUCTURE.PADDING.VERTICAL_FLUID.MOBILE};
    }
  }
`;

export const ItemBreak = styled.div`
  flex-basis: 100%;
`;

export const ItemH = styled.div`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : (props.background ? props.background : 'transparent') || 'transparent'};
  border: ${(props) => props.border || 'initial'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  bottom: ${(props) => props.bottom || 'auto'};
  box-shadow: ${(props) => props.boxShadow || 'initial'};
  display: ${(props) => props.display || 'flex'};
  filter: ${(props) => props.filter || 'initial'};
  flex: ${(props) => props.flex || '1'};
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  gap: ${(props) => props.gap || 'normal'};
  font-size: ${(props) => props.fontSize || 'initial'};
  height: ${(props) => props.height || 'auto'};
  min-height: ${(props) => props.minHeight || 'initial'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  left: ${(props) => props.left || 'auto'};
  margin: ${(props) => props.margin || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  min-width: ${(props) => props.minWidth || 'auto'};
  overflow: ${(props) => props.overflow || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
  right: ${(props) => props.right || 'auto'};
  text-align: ${(props) => props.textAlign || 'initial'};
  top: ${(props) => props.top || 'auto'};
  width: ${(props) => props.width || 'auto'};
  z-index: ${(props) => props.zIndex || 'auto'};

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
          ? props.hover
          : 'none') || 'none'};
  }

  ${ItemBreak} {
    width: 0;
  }
`;

export const ItemV = styled(ItemH)`
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};

  ${ItemBreak} {
    height: 0;
    width: auto;
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_LIGHT};
  font-weight: ${(props) => props.fontWeight || 700};
  font-size: ${(props) =>
    props.fontSize || GLOBALS.ADJUSTMENTS.FONT.PRIMARY_HEADING.DESKTOP};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  letter-spacing: ${(props) => props.letterSpacing || '-0.03em'};
  font-family: ${(props) =>
    props.fontFamily || 'Strawford, Helvetica, sans-serif'};
  text-align: ${(props) => props.textAlign || 'inherit'};
  line-height: ${(props) => props.lineHeight || '110%'};
  text-shadow: none;
  z-index: ${(props) => props.zIndex || 'auto'};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.PRIMARY_HEADING.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.PRIMARY_HEADING.MOBILE};
  }
`;

export const H2 = styled.h2`
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_DARK};
  font-weight: ${(props) => props.fontWeight || 700};
  text-shadow: none;
  font-size: ${(props) => props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  letter-spacing: ${(props) => props.letterSpacing || '-0.02em'};
  font-family: ${(props) =>
    props.fontFamily || 'Strawford, Helvetica, sans-serif'};
  text-align: ${(props) => props.textAlign || 'inherit'};
  line-height: ${(props) => props.lineHeight || '110%'};
  text-shadow: none;
  z-index: ${(props) => props.zIndex || 'auto'};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`;

export const H3 = styled.h3`
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_DARK};
  font-weight: ${(props) => props.fontWeight || 700};
  text-shadow: none;
  font-size: ${(props) => props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  letter-spacing: ${(props) => props.letterSpacing || '-0.02em'};
  font-family: ${(props) =>
    props.fontFamily || 'Strawford, Helvetica, sans-serif'};
  text-align: ${(props) => props.textAlign || 'inherit'};
  line-height: ${(props) => props.lineHeight || '110%'};
  text-shadow: none;
  z-index: ${(props) => props.zIndex || 'auto'};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`;

export const Image = styled.img`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  display: ${(props) => props.display || 'flex'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
`;

export const Span = styled.span`
  flex: ${(props) => props.flex || 'initial'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  color: ${(props) => props.color || 'inherit'};
  background: ${(props) => props.background || 'transparent'};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) =>
    props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.DESKTOP};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  letter-spacing: ${(props) => props.letterSpacing || '-0.03em'};
  text-align: ${(props) => props.textAlign || 'initial'};
  line-height: ${(props) => props.lineHeight || '142%'};
  position: ${(props) => props.position || 'initial'};
  right: ${(props) => props.right || 'auto'};
  left: ${(props) => props.left || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  top: ${(props) => props.top || 'auto'};
  z-index: ${(props) => props.zIndex || 'auto'};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }
`;

export const Button = styled.button`
  display: ${(props) => props.display || 'initial'};
  line-height: ${(props) => props.lineHeight || '26px'};
  flex: ${(props) => props.flex || 'initial'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || 'inherit'};
  color: ${(props) => props.color || '#fff'};
  background: ${(props) => props.background || GLOBALS.COLORS.BG_DARK};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '14px 32px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) =>
    props.borderRadius || GLOBALS.ADJUSTMENTS.RADIUS.SMALL};
  position: ${(props) => props.position || 'relative'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  width: ${(props) => props.width || 'initial'};
  overflow: ${(props) => props.overflow || 'hidden'};
  z-index: ${(props) => props.zIndex || '3'};
  pointer: ${(props) => props.pointer || 'hand'};
  cursor: ${(props) => props.cursor || 'pointer'};
  gap: ${(props) => props.gap};
  font-family: ${(props) =>
    props.fontFamily || 'Strawford, Helvetica, sans-serif'};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${(props) =>
      props.hover || (props.background ? props.background : 'transparent')};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${(props) => props.hoverBackground || '#000'};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:hover {
    border: ${(props) => props.hoverBorder || 'inherit'};

    & svg > path {
      stroke: ${(props) => props.hoverSVGPathStroke || 'auto'};
    }
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }
`;

export const A = styled.a`
  display: ${(props) => props.display || 'initial'};
  line-height: ${(props) => props.lineHeight || '26px'};
  flex: ${(props) => props.flex || 'initial'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || 'inherit'};
  color: ${(props) => props.color || '#fff'} !important;
  background: ${(props) => props.background || GLOBALS.COLORS.BG_DARK};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '14px 32px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) =>
    props.borderRadius || GLOBALS.ADJUSTMENTS.RADIUS.SMALL};
  position: ${(props) => props.position || 'relative'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  overflow: ${(props) => props.overflow || 'hidden'};
  z-index: ${(props) => props.zIndex || '3'};
  pointer: ${(props) => props.pointer || 'hand'};
  cursor: ${(props) => props.cursor || 'pointer'};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${(props) =>
      props.hover || (props.background ? props.background : 'transparent')};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    border-radius: inherit;
  }

  &:after {
    background: ${(props) => props.hoverBackground || '#000'};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    border-radius: inherit;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }

  & .anchorSVGlink {
    width: 1em;
    height: 1em;
    margin-left: 5px;
    position: relative;
    top: 5px;
  }
`;

export const P = styled.p`
  flex: ${(props) => props.flex || 'initial'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  color: ${(props) => props.color || '#000'};
  background: ${(props) => props.background || 'transparent'};
  font-weight: ${(props) => props.fontWeight || 300};
  font-size: ${(props) => props.fontSize || 'inherit'};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  margin: ${(props) => props.margin || '20px 0px'};
  padding: ${(props) => props.padding || '0px'};
  letter-spacing: ${(props) => props.letterSpacing || 'inherit'};
  text-align: ${(props) => props.textAlign || 'initial'};
`;

export const LinkTo = styled(Link)`
  font-family: ${(props) => props.fontFamily || 'inherit'};
  line-height: ${(props) => props.lineHeight || 'inherit'};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex: ${(props) => props.flex || 'initial'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || 'inherit'};
  color: ${(props) => props.color || '#fff'};
  background: ${(props) => props.background || 'transparent'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '10px 15px'};
  letter-spacing: ${(props) => props.letterSpacing || '0.2em'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  width: ${(props) => props.width || 'initial'};

  position: relative;
  text-decoration: none;
  overflow: ${(props) => props.overflow || 'hidden'};
  z-index: 3;

  filter: ${(props) => props.filter || 'none'};

  cursor: ${(props) => (props.disabled ? 'none' : 'pointer')};

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
          ? props.hover
          : 'none') || 'none'};

    color: ${(props) =>
      (props.hoverColor
        ? props.hoverColor
        : props.color
          ? props.color
          : '#fff') || '#fff'};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.hover || (props.background ? props.background : 'transparent')};
    display: none;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.hoverBackground || '#000'};
    opacity: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & .anchorSVGlink {
    width: 1em;
    height: 1em;
    margin-left: 3px;
  }
`;

export const B = styled.span`
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
`;

export const UL = styled.ul``;

export const OL = styled.ol``;

export const LI = styled.li`
  margin: 10px 0px;
`;

// Docusaurus Specific
// Focus Anchor
export const AImp = styled.a`
  color: #fff;
  background: #dd44b9;
  font-size: 15px;
  padding: 6px 12px 6px 8px;
  font-weight: 500;
  border-radius: 8px;
  white-space: pre-wrap;
  text-decoration: none;
  line-height: 30px;

  &:before {
    content: '💡 ';
    position: relative;
  }

  &:hover {
    color: #000;
  }
`;

// Block Anchor
export const ABlock = styled.a`
  color: var(--ifm-custom-base);
  border: 0.5px solid var(--ifm-custom-base);
  font-size: 1.25rem;
  padding: 20px 15px 20px 15px;
  margin-top: 20px;
  font-weight: 500;
  border-radius: 8px;
  white-space: pre-wrap;
  text-decoration: none;
  display: flex;
  transition: all 0.2s ease-in-out 0s;

  &:after {
    content: '>';
    position: relative;
    display: flex;
    float: right;
    margin-left: auto;
    align-items: center;
  }

  &:hover {
    color: #dd44b9;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 19px 43px;
    transform: translate3d(0px, -1px, 0px);
  }

  &:hover:after {
    color: #dd44b9;
  }

  & p {
    margin: 0px;
  }
`;

// Modal Container and Item - Small
export const ModalContainer = styled(ItemH)`
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  margin-bottom: var(--ifm-leading);
`;

export const ModalInner = styled(Button)`
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  padding: 12px 16px;
  background: transparent;
  align-self: center;
  justify-content: center;
  display: flex;
  gap: 10px;

  & p {
    margin: 0px;
  }

  & img {
    height: 32px;
    width: auto;
  }

  & span {
    display: flex;
    font-weight: 500;
    color: initial;
    align-self: center;
    align-items: center;
    text-align: center;
    margin: 0px 4px 0px 4px;
    justify-content: center;

    & svg {
      margin-left: 5px;
    }
  }

  &:hover {
    border: 1px solid #d53a94;
    background: transparent;

    & svg > path {
      stroke: #d53a94;
    }
  }

  &:hover:after {
    background: transparent;
  }
`;

export const ModalSmall = styled(ModalInner)``;

export const ModalSmallEqual = styled(ModalSmall)`
  min-width: 140px;
  align-self: stretch;
  justify-content: space-between;
  flex: 1;
`;

export const ModalMid = styled(ModalInner)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`;
export const ModalMidEqual = styled(ModalMid)`
  min-width: 140px;
  align-self: stretch;
  justify-content: space-between;
  flex: 1;
`;

export const ModalWrapper = styled(ItemH)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const ImageText = styled.div`
  color: #6b6b6b;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ModalLarge = styled(ModalMid)`
  min-width: 220px;
  align-self: stretch;
  justify-content: space-between;
  flex: 1;
`;

export const MetricTitle = styled(Span)`
  color: #dd44b9 !important;
  font-weight: 600 !important;
`;

export const MetricSub = styled(Span)`
  font-size: 14px;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

// Features
export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FeatureItem = styled.div`
  flex: 1 0 45%; // Takes roughly half the width of the container
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-basis: 100%; // Full width on smaller screens
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
