// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useThemeConfig } from "@docusaurus/theme-common";
import ErrorGraphic from "@site/static/assets/website/notfound/ErrorGraphic.svg"
import BlogListPage from "@theme/BlogListPage";
import { Span } from "../css/SharedStyling";
import GLOBALS, { device } from "@site/src/config/globals";
import BlogSidebar from '@theme/BlogSidebar';
import { BlogListPageContent } from "../theme/BlogListPage";

interface PageNotFoundProps {
    title: string;
    text: string;
    buttonText: string;
    buttonFunction: () => void;
    props: any;
}
const PageNotFound = ({ title, text, buttonFunction, buttonText, props }: PageNotFoundProps) => {
    const { docs } = useThemeConfig();
    // const { metadata, items, sidebar } = props;
    // console.log("metadata", metadata, items, sidebar);
    return (
        <PageNotFoundWrapper>
            {docs.sidebar.autoCollapseCategories.valueOf()}

            <ErrorGraphic className="svg" />
            <PageNotFoundSubContainer>
                <PageNotFoundTitle>{title}</PageNotFoundTitle>
                <PageNotFoundText>{text}</PageNotFoundText>
            </PageNotFoundSubContainer>
            <PageNotFoundButton onClick={buttonFunction}>{buttonText}</PageNotFoundButton>
        </PageNotFoundWrapper>
    );
};

const PageNotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 70vw;

    svg {
        width: 100%;
        @media ${device.mobileL} {
            width: 90%;
        }
    }
    @media (max-width: 1000px) {
        width: 100vw;
    }
`;

const PageNotFoundImg = styled.img`
    width: 355.7px;
    height: 205.79px;
    border-radius: 16px;
    margin: 0 auto;
`;

const PageNotFoundTitle = styled.h1`
    font-size: 42px;
    font-weight: 500;
    margin: 0;
    text-align: center;
    font-family: FK Grotesk Neue;

    @media ${device.mobileL} {
        font-size: 38px;
    }
`;

const PageNotFoundText = styled.p`
    font-size: 22px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    font-family: FK Grotesk Neue;

    @media ${device.mobileL} {
        font-size: 18px;
    }
`;

const PageNotFoundButton = styled.button`
    padding: 14px 24px 14px 24px;
    border-radius: 16px;
    background-color: #DD44B9;
    color: #FFFFFF;
    border: none;
    height: 54px;
    width: 201px;
    font-size: 16px;
    font-weight: 400;
    font-family: FK Grotesk Neue;
`;

const PageNotFoundSubContainer = styled.div`
    gap: 16px;
`;


const GridItem = styled.div`
  width: 1120px !important;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 33px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 100% !important;
    // padding: ${`${GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE}`};
    box-sizing: border-box;
    margin: 10px auto 0 auto;
    gap: 30px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const PaginatorDiv = styled.div`
  width: 100% !important;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  margin: 50px auto auto auto;

  @media (max-width: 1200px) {
    width: 100% !important;
    // padding: ${`${GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE}`};
    box-sizing: border-box;
    margin: 10px auto 0 auto;
  }
`;

const ListSpan = styled(Span)`
  color: var(--ifm-color-primary-blog);
  font-family: Strawford;
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 44px */
  letter-spacing: -1.2px;
`;


export default PageNotFound;