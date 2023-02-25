import styled from "styled-components";

export const FeatureStyle = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  .container {
    display: flex;
    justify-content: center;
    gap: 22px;
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 8s linear infinite;
    width: 180%;

    &:hover {
      animation-play-state: paused;
    }
    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  }
`;
