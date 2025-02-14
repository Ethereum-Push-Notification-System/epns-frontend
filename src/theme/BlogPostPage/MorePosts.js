import Link from '@docusaurus/Link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Internal Components
import { Button, H2, Image } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import { BsTwitter } from 'react-icons/bs';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';

const MorePosts = ({ allPosts, post }) => {
  const isMobile = useMediaQuery(device.tablet);
  const [filteredArray, setFilteredArray] = useState();

  const filterPost = () => {
    const tagList = post?.Preview?.metadata?.tags; // Get tags of the current post
    const allOtherPosts = allPosts.filter((item) => item !== post); // Exclude current post

    const seenPosts = new Set(); // To track blogs already added
    const filteredPosts = [];

    tagList?.forEach((tag) => {
      const matchingTags = allOtherPosts.filter(
        (obj) =>
          obj?.Preview?.metadata?.tags?.some((t) => t?.label === tag?.label) &&
          !seenPosts.has(obj) // Ensure it's not already added
      );

      if (matchingTags.length > 0) {
        // Randomly select one from matchingTags
        const randomIndex = Math.floor(Math.random() * matchingTags.length);
        const selectedPost = matchingTags[randomIndex];

        // Add to results and mark as seen
        filteredPosts.push(selectedPost);
        seenPosts.add(selectedPost);
      }
    });

    setFilteredArray(filteredPosts);
  };

  useEffect(() => {
    filterPost();
  }, [allPosts, post]);

  return (
    <div>
      <MoreRow>
        <ResponsiveH2
          size={isMobile ? '16px' : '24px'}
          weight='500'
          spacing='-0.02em'
          lineHeight='110%'
          color='#00000'
        >
          More from Push Chain
        </ResponsiveH2>

        <MoreButton
          title='Developer Docs'
          background='#D53A94'
          radius='12px'
          padding='14px 20px'
          size='16px'
          weight='500'
          spacing='-0.03em'
          lineHeight='26px'
          display='flex'
          flexDirection='row'
          alignItems='center'
          self={isMobile ? 'stretch' : 'self'}
          onClick={() => {
            window.open(`https://x.com/PushChain`, '_blank');
          }}
        >
          <BsTwitter size={23} color='#fff' style={{ marginRight: '10px' }} />
          Follow
        </MoreButton>
        {/* </Anchor> */}
      </MoreRow>

      <GridItem marginTop={false}>
        {filteredArray?.slice(0, 4).map((item) => (
          <>
            {item !== null && (
              <div>
                <Image src={item?.Preview?.assets?.image} />

                <TextView>
                  <BlogPostItemHeaderInfo morePosts={item?.Preview?.metadata} />
                  <Link itemProp='url' to={item?.Preview?.metadata?.permalink}>
                    <LinkText>{item?.Preview?.frontMatter?.title}</LinkText>
                  </Link>
                  <TextSpan>{item?.Preview?.frontMatter?.text}</TextSpan>
                </TextView>
                <Link
                  to={item?.Preview?.metadata?.permalink}
                  style={{ color: '#dd44b9' }}
                >
                  Read More
                </Link>
              </div>
            )}
          </>
        ))}
      </GridItem>
    </div>
  );
};

const ResponsiveH2 = styled(H2)``;

const MoreRow = styled.div`
  margin: 50px 0 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
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

const MoreButton = styled(Button)`
  @media ${device.mobileL} {
    width: 100%;
    margin: 20px;
  }
`;

const GridItem = styled.div`
  width: 800px !important;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 33px;
  box-sizing: border-box;
  margin: ${(props) =>
    props.marginTop ? '100px auto 0 auto' : '30px auto 100px auto'};

  @media (max-width: 820px) {
    width: 100% !important;
    padding: ${`${GLOBALS.STRUCTURE.PADDING.MOBILE}`};
    box-sizing: border-box;
    margin: 10px auto 0 auto;
    gap: 30px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const TextView = styled.div`
  margin-top: 20px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const TextSpan = styled.div`
  color: var(--ifm-color-secondary-blog);
  font-family: Strawford;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 20px;

  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const LinkText = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: var(--ifm-color-primary-blog) !important;

  font-family: Strawford;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;

  &:hover {
    color: #dd44b9 !important;
  }
`;

export default MorePosts;
