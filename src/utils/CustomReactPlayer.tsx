/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

type CustomReactPlayerProps = {
  url: string;
  playing?: boolean;
  width?: string;
  height?: string;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  playContinuously?: boolean; // New prop to control continuous play
};

const CustomReactPlayer: React.FC<CustomReactPlayerProps> = ({
  url,
  width = '100%',
  height = '100%',
  loop = true,
  muted = true,
  className,
  playContinuously = false, // Default is false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null); // Create a ref for ReactPlayer

  const handleMouseEnter = () => {
    if (!playContinuously) setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    if (!playContinuously) {
      setIsPlaying(false);
      playerRef.current?.seekTo(0); // Reset the video to the beginning
    }
  };

  return (
    <VideoWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef} // Attach the ref to ReactPlayer
        url={url}
        playing={playContinuously || isPlaying}
        loop={loop}
        muted={muted}
        width={width}
        height={height}
        className={className}
        config={{
          file: {
            attributes: {
              controlsList: 'nofullscreen',
            },
          },
        }}
      />
    </VideoWrapper>
  );
};

export default CustomReactPlayer;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;
