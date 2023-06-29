// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { getAllBlogData, getSingleBlogData } from '../api';
import styled from 'styled-components';
import { Anchor, B, Content, H2, H3, HeroHeader, Input, ItemH, ItemV, Span, P } from 'components/SharedStyling';
import { device } from '../config/globals';
import useMediaQuery from '../hooks/useMediaQuery';
import PageWrapper from '../components/PageWrapper';
import pageMeta from 'config/pageMeta';
import HybridSection from 'components/HybridSection';
import Image from 'assets/bg-image.png';
import { BiLink, BiShareAlt } from 'react-icons/bi';
import moment from 'moment';
import Moment from 'react-moment';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import useReadingTime from 'hooks/useReadingTime';
import SpinnerSVG from 'assets/Spinner.gif';
import { BsFillPlayCircleFill } from 'react-icons/bs'
import Skeleton from 'react-loading-skeleton';

// const BACKEND_API = 'http://localhost:1337';
const BACKEND_API = 'https://blog.push.org';
const PAGE_SIZE = 200;
const page = 1;

const BlogItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(device.tablet);
  const bodyRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [blogsData, setBlogsData] = useState(null);
  const [allBlogs, setAllBlogs] = useState(null);
  const [blogsContent, setBlogsContent] = useState(null);
  const [errorPage, setErrorPage] = React.useState(false);
  const [body, setBody] = React.useState(false);

  const loadData = async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      const data = await getSingleBlogData(id);
      const allData = await getAllBlogData(page, PAGE_SIZE);
      const filteredBlogs = allData.data.filter((obj) => obj.id !== parseInt(id));
      setBlogsData(data?.data);
      setAllBlogs(filteredBlogs);
    } catch (e) {
      console.error('Blogs API data fetch error: ', e);
      setErrorPage(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [id]);

  function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return 'error';
    }
  }

  useEffect(() => {
    editMedia();
  }, [blogsData])

  async function editMedia() {

    let content = blogsData?.attributes?.body;
    const tryThis = await content?.match('<oembed[^>]+url="([^">]+)"');
    if (tryThis?.[1] === null) return;
    let updatedIframe = await getId(tryThis[1]);

    var iframeMarkup = '<iframe src="//www.youtube.com/embed/'
      + updatedIframe + '" frameborder="0" allowfullscreen></iframe>';

    try {
      const fullBody = `${content} ${iframeMarkup}`;
      setBody(fullBody)
    } catch (e) {
      return '';
    }

  }

  function filterComment(hypertext) {
    try {
      var newString = hypertext.replace(/<(?:.|\n)*?>/gm, '');
      return newString;
    } catch (e) {
      return '';
    }
  }

  const ShowMore = () => {
    navigate(`/blogs`);
  };

  const OpenURL = (link) => {
    window.open(link, '_blank');
  };

  const onArticleClick = (clickedBlog) => {
    if (clickedBlog) {
      navigate(`/blogs/${clickedBlog?.id}`);
    }
  };


  useEffect(() => {
    if (blogsContent) {
    }
  }, [blogsContent]);

  const ArticleItem = ({ item }) => {
    return (
      <>
        {item?.map((blogData, idx) => {
          return (
            <MainArticle
              onClick={() => onArticleClick(blogData)}
              key={idx}
              title={blogData?.attributes?.title}
            >
              <ArticleImage
                src={`${BACKEND_API}${blogData?.attributes?.image?.data?.attributes?.url}`}
                alt={blogData?.attributes?.title}
              />

              <ArticleRow>
                <H3
                  textTransform="normal"
                  color="#000000"
                  size="24px"
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="142%"
                  margin="0px 0 0 0"
                  textAlign="left !important"
                  className='clamp'
                >
                  {blogData?.attributes.title}
                </H3>

                {!isMobile && (<ArticleTextB>{filterComment(blogData?.attributes?.body)}</ArticleTextB>)}

                <ArticleContent style={{marginTop: isMobile ? '15px' : '20px'}}>
                  <Moment
                    format="D MMMM, YYYY"
                    style={{ marginRight: '5px' }}
                  >
                    {blogData?.pubDate}
                  </Moment>{' '}
                  &#183;
                  <Div>{useReadingTime(blogData?.attributes?.body)} min read</Div>
                </ArticleContent>
              </ArticleRow>
            </MainArticle>
          );
        })}
      </>
    );
  };

  const SpaceContent = () => {
    return (
      <div style={{ visibility: 'hidden' }}>
        <TopicContent>
          <Moment
            format="D MMMM, YYYY"
          >
            {blogsData?.pubDate}
          </Moment>{' '}
          <DivTopic>{useReadingTime(blogsData?.attributes?.body)} min read</DivTopic>
        </TopicContent>
      </div>)
  }


  if (errorPage) {
    return (
      <PageWrapper
        pageName={pageMeta.BLOGS.pageName}
        pageTitle={pageMeta.BLOGS.pageTitle}
      >
        <BlogsWrapper>

          <BlogsSection
            id="story"
            data-bkg="light"
            className="lightBackground"
            curve="bottom"
          >

            <EmptyCenteredContainerInfo>
              <DisplayNotice>404 Error - Not Found.</DisplayNotice>
            </EmptyCenteredContainerInfo>


          </BlogsSection>

        </BlogsWrapper>
      </PageWrapper>
    )
  }

  if (isLoading && !errorPage) {
    return (
      <PageWrapper
        pageName={pageMeta.BLOGS.pageName}
        pageTitle={pageMeta.BLOGS.pageTitle}
      >
        <BlogsWrapper>
          <ItemH margin='200px 0px 200px 0px'>
            <SkeletonContainer>
              <SkeletonInnerContainer>
                <Skeleton height={300} width={isMobile ? 300 : 550} className='skeleton-image-container' />
              </SkeletonInnerContainer>
              <Skeleton className='skeleton-placeholder-lines' count={8}
                height={10} />
            </SkeletonContainer>
          </ItemH>
        </BlogsWrapper>
      </PageWrapper>
    )
  }

  if (!isLoading && !errorPage) {
    return (
      <PageWrapper
        pageName={pageMeta.BLOGS.pageName}
        pageTitle={pageMeta.BLOGS.pageTitle}
      >
        <BlogsWrapper>
          <AnimationSection>
            <Content
              className="contentBox"
            >

              <ArticleBanner
                src={`${BACKEND_API}${blogsData?.attributes?.image?.data?.attributes?.url}`}
                alt={blogsData?.attributes.title}
                loading='lazy'
              />

            </Content>
          </AnimationSection>

          <TopSection
            id="story"
            data-bkg="light"
            className="lightBackground"
            curve="bottom"
          >
            <SpaceContent />
              <ContentBody>

                <TopBody>
                  <ItemH justifyContent='flex-start' padding='0 0px' alignItems='center'>
                    <BsFillPlayCircleFill color='#DD44B9' size={25} />
                    <Topdiv>Listen</Topdiv>
                  </ItemH>

                  <ItemH justifyContent='flex-end' alignItems='center'>
                    <BiShareAlt size={25} color='#333333' />
                    <BiLink size={25} color='#333333' style={{ marginLeft: '20px' }} />
                  </ItemH>
                </TopBody>

              </ContentBody>
            <SpaceContent />
          </TopSection>


          <BlogsSection
            id="story"
            data-bkg="light"
            className="lightBackground"
            curve="bottom"
          >

            <TopicContent>
              <Moment
                format="D MMMM, YYYY"
              >
                {blogsData?.pubDate}
              </Moment>{' '}
              <DivTopic>{useReadingTime(blogsData?.attributes?.body)} min read</DivTopic>
            </TopicContent>

            <ContentBody>
            {/* <ContentBody className="contentBox" padding='10px 0px'> */}

              <H3
                textTransform="normal"
                color="#000000"
                size={isMobile ? '30px' : '40px'}
                weight={isMobile ? '600' : '700'}
                spacing="-0.02em"
                lineHeight="55.5px"
                margin="0px 0 0px 0"
              >
                {blogsData?.attributes.title}
              </H3>

              {isMobile && (<ArticleContent marginTop='12px'>
                <Moment
                  format="D MMMM, YYYY"
                  style={{ marginRight: '5px' }}
                >
                  {blogsData?.attributes?.date}
                </Moment>{' '}
                &#183;
                <Div>{blogsData?.attributes?.body && useReadingTime(blogsData?.attributes?.body)} min read</Div>
              </ArticleContent>)}

              {/* <BlogContent ref={bodyRef}>{body && parse(body)}</BlogContent> */}

              <BlogContent ref={bodyRef}>{blogsData?.attributes?.body && parse(blogsData?.attributes?.body)}</BlogContent>

              <ToggleSection>
                {blogsData?.attributes?.tags?.data?.map((item, i) => (
                  <ToggleButton key={i}>
                    <Span>{item?.attributes?.name}</Span>
                  </ToggleButton>
                ))}
              </ToggleSection>


              <ShareRow>
                <ResponsiveH2
                  size={isMobile ? '16px' : '24px'}
                  weight="500"
                  spacing="-0.02em"
                  lineHeight="110%"
                  color='#00000'
                >
                  Be a part of the conversation by sharing this article
                </ResponsiveH2>

                <Anchor
                  href="https://twitter.com/pushprotocol"
                  title="Developer Docs"
                  target="_blank"
                  bg="#DD44B9"
                  radius="12px"
                  padding="14px 20px"
                  size="16px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="26px"
                  self={isMobile ? 'stretch' : 'self'}
                >
                  <BiShareAlt
                    size={23}
                    color="#fff"
                    style={{ marginRight: '10px' }}
                  />
                  Share
                </Anchor>
              </ShareRow>

              <AboutSection>
                <AboutTitle>About Push Protocol</AboutTitle>

                <Span
                  textAlign="center"
                  margin="20px 0 0 0"
                  spacing="-0.03em"
                  weight={'400'}
                  color="#000"
                  size={isMobile ? '16px' : '16px'}
                >
                  Push is the communication protocol of web3. Push protocol enables cross-chain notifications and
                  messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and
                  platform-agnostic fashion. The open communication layer allows any crypto wallet / frontend to tap into
                  the network and get the communication across.
                </Span>
              </AboutSection>

              <KPIBanner>
                <BannerItem
                  onClick={() => OpenURL('https://twitter.com/pushprotocol')}
                  style={{ cursor: 'pointer' }}
                  gap="18px"
                  className="kpiItem"
                >
                  <KPIFigure>
                    <BsTwitter size={32} />
                  </KPIFigure>
                  <KPIMetric>Twitter</KPIMetric>
                </BannerItem>

                <BannerItem
                  onClick={() => OpenURL('https://discord.gg/pushprotocol')}
                  style={{ cursor: 'pointer' }}
                  gap="18px"
                  className="kpiItem"
                >
                  <KPIFigure>
                    <FaDiscord size={32} />
                  </KPIFigure>
                  <KPIMetric>Discord</KPIMetric>
                </BannerItem>

                <BannerItem
                  onClick={() => OpenURL('https://www.youtube.com/@pushprotocol')}
                  style={{ cursor: 'pointer' }}
                  gap="18px"
                  className="kpiItem"
                >
                  <KPIFigure>
                    <BsYoutube size={32} />
                  </KPIFigure>
                  <KPIMetric>YouTube</KPIMetric>
                </BannerItem>

                <BannerItem
                  onClick={() => OpenURL('https://www.linkedin.com/company/push-protocol/')}
                  style={{ cursor: 'pointer' }}
                  gap="18px"
                  className="kpiItem"
                >
                  <KPIFigure>
                    <BsLinkedin size={32} />
                  </KPIFigure>
                  <KPIMetric>Linkedin</KPIMetric>
                </BannerItem>
              </KPIBanner>

              <BlogRow>
                <ResponsiveH2
                  size={isMobile ? '16px' : '28px'}
                  weight="700"
                  spacing="-0.02em"
                  lineHeight="110%"
                >
                  More from Push Protocol
                </ResponsiveH2>

                <Anchor
                  href="https://twitter.com/pushprotocol"
                  title="Developer Docs"
                  target="_blank"
                  bg="#DD44B9"
                  radius="16px"
                  padding="14px 32px"
                  size="18px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="26px"
                  self="center"
                >
                  <BsTwitter
                    size={23}
                    color="#fff"
                    style={{ marginRight: '10px' }}
                  />
                  Follow
                </Anchor>
              </BlogRow>

              <SubArticles>
                <ArticleItem item={allBlogs?.slice(0, 5)} />
                {/* <ArticleItem item={allBlogs?.slice(5, 9)} /> */}
              </SubArticles>

              <ShowMoreSection onClick={ShowMore}>
                <FiChevronLeft size={23} />
                <b>Read more articles from Push Protocol</b>
              </ShowMoreSection>

            </ContentBody>

            <SpaceContent />
          </BlogsSection>
        </BlogsWrapper>
      </PageWrapper>
    );
  };
}

const EmptyCenteredContainerInfo = styled.div`
  padding: 20px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px !important;
  @media (max-width: 800px) {
    width: 100% !important;
  }

`;

const DisplayNotice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background: rgb(244, 245, 250);
`;

const ResponsiveSection = styled(HybridSection)`
  min-height: ${(props) => props.minHeight || '0px'};
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
`;


const LoadingTopSection = styled(ResponsiveSection)`
  padding-bottom: 50px;
  background: #121315;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  padding: 0px 0px 20px 0px;
  min-height: 20vh;
  & #hero .contentBox {
    row-gap: 18px;
  }
  @media ${device.laptop} {
    min-height: 50vh;
    padding: 0px 40px 0px 40px;
  }

  @media ${device.tablet} {
    min-height: 35vh;
  }

  @media ${device.mobileL} {
    min-height: 170px;
    padding: 80px 40px 0px 40px;
  }
`;

const AnimationSection = styled(ResponsiveSection)`
  padding-bottom: 50px;
  background: #121315;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  padding: 0px 0px 20px 0px;
  & #hero .contentBox {
    row-gap: 18px;
  }
  @media ${device.laptop} {
    min-height: 50vh;
    padding: 0px 40px 0px 40px;
  }

  @media ${device.tablet} {
    min-height: 35vh;
  }

  @media ${device.mobileL} {
    min-height: 170px;
    padding: 80px 40px 0px 40px;
  }
`;

const BlogsWrapper = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lora !important;
  & #hero .contentBox {
    row-gap: 18px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Topdiv = styled.div`
  margin: 0 0 0 10px;
`;

const TopBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TopSection = styled(ResponsiveSection)`
  padding: 80px 0px 0px;
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  &:after {
    display: none !important;
  }

  @media ${device.desktopL} {
    padding: 80px 0px 0px;
   }

  @media ${device.desktop} {
   padding: 80px 0px 0px;
  }

  @media ${device.laptopL} {
    padding: 80px 0px 0px;
  }

  @media ${device.laptop} {
    margin-top: 40px;
    padding: 80px 0px 0px;
  }
  @media ${device.tablet} {
    margin-top: 70px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  @media ${device.mobileL} {
    margin-top: 60px;
    padding-top: 0px;
    padding-bottom: 32px;
  }

  @media ${device.mobileM} {
    margin-top: 70px;
    padding-top: 0px;
    padding-bottom: 32px;
  }
`;



const BlogsSection = styled(ResponsiveSection)`
  // padding: 0px 230px 80px 230px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  // @media ${device.desktopL} {
  //   padding: 0px 300px 80px 300px;
  //  }

  // @media ${device.desktop} {
  //  padding: 0px 230px 80px 230px;
  // }

  // @media ${device.laptopL} {
  //   padding: 0px 170px 80px 170px;
  // }

  // @media ${device.laptop} {
  //   margin-top: 20px;
  //   padding: 0px 100px 80px 100px;
  // }
  @media ${device.tablet} {
    margin-top: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  @media ${device.mobileL} {
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 32px;
  }

  @media ${device.mobileM} {
    padding-top: 0px;
    padding-bottom: 32px;
  }
`;

const BlogContent = styled.div`
    width: 100%:
    font-family: Lora !important;
    font-weight: 400;
    font-size: 22px;
    line-height: 40px;
    color: #575D73;
    ul,p {
     font-family: Lora !important;
     color: #282A2D;
     font-weight: 400;
     font-size: 16px;
        a {
            color: #000000;
            cursor: pointer;
            font-family: Lora !important;
        }
        span{
          font-family: Lora !important;
          color: #282A2D;
          font-weight: 400;
          font-size: 16px;
        }
        img{
          margin: 30px 0px;
        }
    }

    blockquote {
        font-family: 'Strawford' !important;
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
        color: #575D73;
    }

    iframe {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 32px;
  }

    pre { 
      font-family: 'Strawford' !important;
      font-weight: 400;
      font-size: 20px;
      line-height: 38px;
      color: #E4E9F0;
      overflow-x: auto;
      padding: 25px;
      border-radius: 32px;
      background: #121315;
    }

    .raw-html-embed {
      margin: 30px 0px;
    }

    h1,h2,h3,h4 {
        font-family: 'Strawford' !important;
        font-weight: 600;
        font-size: 24px;
        line-height: 38px;
        color: #000000;
        a {
            color: #000000;
            cursor: pointer;
            font-family: Lora !important;
        }
    }
    a {
        color: #000000;
        cursor: pointer;
        font-family: Lora !important;
    }

    img{
      margin: 0 auto;
      padding: 0;
      width: 100%;
      box-sizing: border-box;
      aspect-ratio: 16/9;
    }

    figure {
        margin: 0 auto;
        padding: 0;
        width: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        img {
            border-radius: 32px;
            @media ${device.laptop}{
                width: 100%;
                height: fit-content;
            }
        }
        &:nth-of-type(1) {
            display: none;
        }
        @media ${device.laptop}{
            width: 100%;
            height: fit-content;
        }
    }
`;

const ToggleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;

const AboutSection = styled.div`
  margin-top: 99px;
  span {
    font-family: 'Lora';
    font-weight: 300;
    font-size: 16px;
    line-height: 37px;
    color: #282a2d;
    letter-spacing: -0.002em;
  }
`;

const AboutTitle = styled.div`
  font-family: 'Strawford' !important;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #000000;
  margin-bottom: 10px;
  letter-spacing: -0.02em;
  @media ${device.laptop}{
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
}
`;

const ToggleButton = styled.div`
  border: 1px solid #bac4d6;
  border-radius: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  left: 0;
  margin: 5px 5px;
  background: transparent;
  color: #000;
  span {
    font-size: 20px;
    font-weight: 500;
    border: none;
    text-transform: capitalize;
    color: #000;
  }
  b {
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.03em;
    margin-left: 30px;
  }
`;

const KPIBanner = styled.div`
  background: linear-gradient(89.78deg, #fee8ff 5.59%, #f9edff 90.26%);
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  font-family: 'Strawford';
  font-style: normal;
  margin-top: 30px;

  & .kpiItem {
    display: flex;
    flex-direction: row;
    align-items: center !important;
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;

    row-gap: 32px;
    column-gap: 8px;
    margin-top: 30px;

    & .kpiItem {
      flex-direction: row;
      row-gap: 8px;

      // for 4 items
      flex: 0 0 48%;
      // align-items: flex-start;

      // for 3 items
      // flex: 0 0 100%;
      // align-items: center;
    }
  }
`;

const KPIFigure = styled.div`
  height: fit-content;
  width: fit-content;
`;

const BannerItem = styled(ItemV)`
  color: #000;
  grid-gap: 8px;
  &:hover {
   color: #D53893;
  }
`;

const KPIMetric = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -0.03em;
  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 400;
  }
`;

const BlogRow = styled.div`
  margin: 104px 0 32.5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 80px;
  }
`;

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const ArticleBanner = styled.img`
  width: 90%;
  aspect-ratio: 16/9;
  object-fit: cover;

  border-radius: 32px;
  padding: 0;
  // transform: translateY(42.5%);
  height: auto;
  margin: 0px auto;
  position: relative;
  top: 150px;
  z-index: 2;
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.tablet} {
    border-radius: 14px;
    top: 90px;
  }
`;

const SubArticles = styled.div`
  //     display: grid;
  //     grid-template-columns: repeat(3, minmax(0, 1fr));
  //     grid-gap: 33px;
  //     margin-top: 10px;
  //     @media ${device.tablet} {
  //         grid-template-columns: repeat(1, minmax(0, 1fr));
  //    }
`;

const MainArticle = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  grid-gap: 44px;
  height: 100%;
  margin-bottom: 62px;

  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    flex-direction: column !important;
    grid-gap: 15px;
    margin-bottom: 32px;
  }
`;

const ArticleTextB = styled.div`
  width: 100%;
  color: #575d73;
  font-size: 15px;
  font-weight: 300;
  line-height: 28px;
  font-family: Lora;
  margin-top: 5px;

  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TopicContent = styled.div`
  color: #575d73;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  display: flex;
  flex-direction: column !important;
  align-item: flex-start;
  letter-spacing: -0.35px;
  margin-top: ${(props) => props.marginTop || '0px'};
  padding: 10px 40px;
  @media ${device.laptop} {
     padding: 10px 20px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

const ShareRow = styled.div`
  margin: 50px 0 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 52px;
    align-items: center;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const ArticleContent = styled.div`
  width: 100%;
  color: #575d73;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  display: flex;
  flex-direction: row !important;
  letter-spacing: -0.35px;
  margin-top: ${(props) => props.marginTop || '0px'};
`;

const Div = styled.div`
  margin-left: 5px;
`;

const DivTopic = styled.div`
`;

const ArticleImage = styled.img`
  min-width: 300px;
  max-width: 300px;
  aspect-ratio: 16/9;
  object-fit: cover;
  background: #d9d9d9;
  border-radius: 32px;
  @media ${device.tablet} {
    min-width: 100%;
    max-width: 100%;
    border-radius: 21px;
  }
`;

const ArticleRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  flex: 1;
  .clamp{
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  @media ${device.tablet} {
    margin-left: 0px;
    width: 100%;
  }
`;

const ShowMoreSection = styled.div`
  border: 1px solid #bac4d6;
  border-radius: 24px;
  margin: 11px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px;
  cursor: pointer;
  b {
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.03em;
    color: #1e1e1e;

    @media ${device.tablet} {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

const SkeletonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  .skeleton-image-container {
    margin-bottom: 50px;
    border-radius: 30px;
  }
  .skeleton-placeholder-lines {
    display: block;
    line-height: 2;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 30px;
    box-sizing: border-box;
  }
`
const SkeletonInnerContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default BlogItem;
