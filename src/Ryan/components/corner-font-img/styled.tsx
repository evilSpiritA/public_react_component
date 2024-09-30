import styled from "styled-components";

export const Container = styled.div`
  --border: 1px solid;
  --font-size: min(2.5vw, 56px);

  position: relative;
  width: 60vw;
  height: 60vh;
  font-size: var(--font-size);
`;

export const ContainerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  animation: ani-img 4s alternate;
  //   animation: ani-img 4s infinite alternate;
`;

export const ContainerText = styled.div`
  position: absolute;
  display: grid;

  .horizontal {
    grid-area: horizontal;
  }

  .corner {
    grid-area: corner;
    display: grid;
    place-content: center;
  }

  .vertical {
    grid-area: vertical;
    writing-mode: vertical-lr;
  }

  @keyframes ani-text-top-right {
    0%,
    25% {
      clip-path: circle(0 at 0 0);
    }
    75%,
    100% {
      clip-path: circle(120% at 100% 0%);
    }
  }

  @keyframes ani-text-bottom-left {
    0%,
    25% {
      clip-path: circle(0 at 0 0);
    }
    75%,
    100% {
      clip-path: circle(120% at 0 100%);
    }
  }
  @keyframes ani-img {
    0%,
    10% {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
    50%,
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

export const TopRight = styled(ContainerText)`
  top: calc(-1 * var(--font-size));
  right: calc(-1 * var(--font-size));
  grid-template-areas:
    "horizontal corner"
    "empty vertical";

  .horizontal {
    padding-left: 8px;
    border-block: var(--border);
    border-left: var(--border);
  }

  .corner {
    border-top: var(--border);
    border-right: var(--border);
  }

  .vertical {
    padding-bottom: 8px;
    border-block: var(--border);
    border-bottom: var(--border);
  }

  animation: ani-text-top-right 4s alternate;
  //   animation: ani-text-top-right 4s infinite alternate;
`;

export const BottomLeft = styled(ContainerText)`
  bottom: calc(-1 * var(--font-size));
  left: calc(-1 * var(--font-size));
  grid-template-areas:
    "vertical empty"
    "corner horizontal";

  .horizontal {
    padding-right: 8px;
    border-block: var(--border);
    border-right: var(--border);
  }

  .corner {
    border-bottom: var(--border);
    border-left: var(--border);
  }

  .vertical {
    padding-top: 8px;
    border-block: var(--border);
    border-top: var(--border);
  }

  animation: ani-text-bottom-left 4s alternate;
  //   animation: ani-text-bottom-left 4s infinite alternate;
`;
