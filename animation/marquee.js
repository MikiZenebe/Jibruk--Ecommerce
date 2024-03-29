import styled from "styled-components";

export const FeatureStyle = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
  background-color: #ededed;
  margin-top: 3rem;

  .container {
    margin-left: 65px;
    display: flex;
    justify-content: center;
    gap: 22px;
    width: fit-content;
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 8s linear infinite;
    width: 200%;

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

export const ShoeStyle = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  overflow-x: visible;
  margin-top: 0rem;
`;
