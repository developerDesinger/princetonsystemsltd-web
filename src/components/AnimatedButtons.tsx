import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

// BROWSE EXAMPLES / SECONDARY ANIMATED BUTTON (Fill from bottom)
interface BrowseButtonProps {
  text?: string;
  accentColor?: string;
  onClick?: () => void;
}

export const BrowseExamplesButton: React.FC<BrowseButtonProps> = ({
  text = 'BROWSE EXAMPLES',
  accentColor = '#ffc506',
  onClick,
}) => {
  return (
    <BrowseWrapper $accent={accentColor}>
      <button className="btn font-jetbrains" onClick={onClick}>
        <span>{text}</span>
        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
      </button>
    </BrowseWrapper>
  );
};

const BrowseWrapper = styled.div<{ $accent: string }>`
  display: inline-block;

  .btn {
    font-size: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    letter-spacing: 0.05em;
    background: transparent;
    border: none;
    outline: none;
    padding: 0.75em 1.35em;
    color: #ffffff;
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    z-index: 1;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${props => props.$accent};
    transition: 0.5s ease;
  }

  .btn:hover {
    color: #000000;
    transition-delay: 0.5s;
  }

  .btn:hover::before {
    width: 100%;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: ${props => props.$accent};
    transition: 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.4s;
  }
`;

// GET STARTED / PRIMARY ANIMATED BUTTON (btn-31 with clip-path sweep & text move-up animation)
interface GetStartedButtonProps {
  text?: string;
  bg?: string;
  textColor?: string;
  onClick?: () => void;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text = 'GET STARTED',
  bg = '#ffc506',
  textColor = '#000000',
  onClick,
}) => {
  return (
    <GetStartedWrapper $bg={bg} $textColor={textColor}>
      <button className="btn-31 font-jetbrains" onClick={onClick}>
        <span className="text-container">
          <span className="text">
            <span>{text}</span>
            <ChevronRight className="w-3.5 h-3.5 inline-block stroke-[2.5]" />
          </span>
        </span>
      </button>
    </GetStartedWrapper>
  );
};

const GetStartedWrapper = styled.div<{ $bg: string; $textColor: string }>`
  display: inline-block;

  .btn-31,
  .btn-31 *,
  .btn-31 :after,
  .btn-31 :before,
  .btn-31:after,
  .btn-31:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-31 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: ${props => props.$bg};
    background-image: none;
    color: ${props => props.$textColor};
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.05em;
    line-height: 1.5;
    margin: 0;
    padding: 0.75rem 1.4rem;
    position: relative;
    text-transform: uppercase;
    overflow: hidden;
  }

  .btn-31:disabled {
    cursor: default;
  }

  .btn-31:-moz-focusring {
    outline: auto;
  }

  .btn-31 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-31 [hidden] {
    display: none;
  }

  .btn-31:before {
    --progress: 100%;
    background: #ffffff;
    -webkit-clip-path: polygon(
      100% 0,
      var(--progress) var(--progress),
      0 100%,
      100% 100%
    );
    clip-path: polygon(
      100% 0,
      var(--progress) var(--progress),
      0 100%,
      100% 100%
    );
    content: "";
    inset: 0;
    position: absolute;
    transition: -webkit-clip-path 0.3s ease, clip-path 0.3s ease;
    z-index: 0;
  }

  .btn-31:hover:before {
    --progress: 0%;
  }

  .btn-31 .text-container {
    display: block;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .btn-31 .text {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-weight: 800;
    position: relative;
    color: ${props => props.$textColor};
  }

  .btn-31:hover .text {
    color: #000000 !important;
    -webkit-animation: move-up-alternate 0.3s ease forwards;
    animation: move-up-alternate 0.3s ease forwards;
  }

  @-webkit-keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(80%);
    }
    51% {
      transform: translateY(-80%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(80%);
    }
    51% {
      transform: translateY(-80%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
