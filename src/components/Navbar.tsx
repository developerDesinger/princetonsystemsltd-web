import React, { useState } from 'react';
import styled from 'styled-components';
import { HyperText } from './HyperText';
import type { Page } from '../App';

// Animated Mobile Hamburger / Switch Toggle
interface HamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
  color?: string;
}

const HamburgerSwitch: React.FC<HamburgerProps> = ({ isOpen, onToggle, color = '#000000' }) => {
  return (
    <StyledHamburger $color={color}>
      <input
        type="checkbox"
        id="navbar-mobile-checkbox"
        checked={isOpen}
        onChange={onToggle}
      />
      <label htmlFor="navbar-mobile-checkbox" className="toggle">
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </label>
    </StyledHamburger>
  );
};

const StyledHamburger = styled.div<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  #navbar-mobile-checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition-duration: .5s;
  }

  .bars {
    width: 100%;
    height: 2.5px;
    background-color: ${props => props.$color};
    border-radius: 4px;
    transition-property: all;
  }

  #bar2 {
    transition-duration: .8s;
  }

  #bar1, #bar3 {
    width: 70%;
  }

  #navbar-mobile-checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: .5s;
  }

  #navbar-mobile-checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: .5s;
  }

  #navbar-mobile-checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
  }

  #navbar-mobile-checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
  }

  #navbar-mobile-checkbox:checked + .toggle {
    transition-duration: .5s;
    transform: rotate(180deg);
  }
`;

// Diagonal Swipe animated GET THE APP Action Button
const GetTheAppNavButton = ({ onClick }: { onClick: () => void }) => (
  <StyledNavAction onClick={onClick}>
    <button className="btn"><span>GET THE APP</span></button>
  </StyledNavAction>
);

const StyledNavAction = styled.div`
  display: inline-block;

  .btn {
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    padding: 8px 18px;
    font-size: 11px;
    cursor: pointer;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.1em;
    background: #000000;
    position: relative;
    transition: all 0.8s;
    overflow: hidden;
  }

  .btn:hover {
    color: #000000;
  }

  .btn::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: #ffffff;
    z-index: 0;
    transition: all 0.8s;
  }

  .btn:hover::before {
    width: 160%;
  }

  .btn span {
    position: relative;
    z-index: 1;
  }
`;

// Animated Search Input with hover icon pulse and brutalist shadow
const AnimatedSearchInput = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <StyledSearchInputWrapper onClick={onClick}>
      <div className="input-container">
        <input
          type="text"
          readOnly
          name="text"
          className="input"
          placeholder="SEARCH..."
          title="Search documentation and markets (Ctrl+K / ⌘K)"
        />
        <span className="icon">
          <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g strokeWidth={0} />
            <g strokeLinecap="round" strokeLinejoin="round" />
            <g>
              <path opacity={1} d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path opacity={1} d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path opacity={1} d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </span>
      </div>
    </StyledSearchInputWrapper>
  );
};

const StyledSearchInputWrapper = styled.div`
  display: inline-block;
  cursor: pointer;

  .input-container {
    width: 140px;
    position: relative;
  }

  @media (min-width: 768px) {
    .input-container {
      width: 180px;
    }
  }

  .icon {
    position: absolute;
    right: 10px;
    top: calc(50% + 4px);
    transform: translateY(calc(-50% - 4px));
    pointer-events: none;
  }

  .input {
    width: 100%;
    height: 36px;
    padding: 6px 32px 6px 10px;
    transition: .2s linear;
    border: 2px solid black;
    font-size: 11px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
  }

  .input::placeholder {
    color: rgba(0, 0, 0, 0.45);
  }

  .input:focus,
  .input-container:hover .input {
    outline: none;
    border: 1.5px solid black;
    box-shadow: -4px -4px 0px black;
  }

  .input-container:hover > .icon {
    animation: anim 1s linear infinite;
  }

  @keyframes anim {
    0%,
    100% {
      transform: translateY(calc(-50% - 4px)) scale(1);
    }

    50% {
      transform: translateY(calc(-50% - 4px)) scale(1.1);
    }
  }
`;

// Animated Mobile Drawer with slide-in effect
const StyledMobileDrawer = styled.div<{ $isOpen: boolean; $bgColor: string; $textColor: string }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out;
  margin-top: ${props => props.$isOpen ? '12px' : '0'};
  
  .drawer-content {
    padding-top: ${props => props.$isOpen ? '12px' : '0'};
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 8px;
    color: ${props => props.$textColor};
    
    .drawer-link {
      padding: 8px 0;
      cursor: pointer;
      transition: padding-left 0.2s ease;
      
      &:hover {
        padding-left: 8px;
      }
    }
    
    .drawer-cta {
      padding-top: 12px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;

interface NavbarProps {
  onSearchTrigger: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
  navbarBg: string;
  navbarTextColor: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchTrigger, onNavigate, currentPage, navbarBg, navbarTextColor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (page: Page) =>
    `relative py-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-black after:transition-all ${
      currentPage === page ? 'after:w-full font-bold' : 'after:w-0 hover:after:w-full'
    }`;

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4 md:pt-6 px-4 md:px-10 max-w-[1536px] w-full">
      {/* Navbar Container: bg matches page background */}
      <header className="border-none px-6 md:px-10 py-4 md:py-5 transition-all duration-500" style={{ backgroundColor: navbarBg }}>
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate('home');
            }}
          >
            <span
              className="font-general font-medium text-lg md:text-2xl tracking-tight transition-colors duration-500 hover:opacity-80"
              style={{ color: navbarTextColor }}
            >
              Princeton Systems Ltd
            </span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-jetbrains text-xs md:text-sm font-normal tracking-widest transition-colors duration-500" style={{ color: navbarTextColor }}>
            <span onClick={() => onNavigate('markets')} className={linkClass('markets')}>
              <HyperText text="MARKETS" />
            </span>
            <span onClick={() => onNavigate('how-it-works')} className={linkClass('how-it-works')}>
              <HyperText text="HOW IT WORKS" />
            </span>
            <span onClick={() => onNavigate('security')} className={linkClass('security')}>
              <HyperText text="SECURITY" />
            </span>
            <span onClick={() => onNavigate('about')} className={linkClass('about')}>
              <HyperText text="ABOUT" />
            </span>
            <span onClick={() => onNavigate('download')} className={`${linkClass('download')} flex items-center gap-1.5`}>
              <HyperText text="APP" />
              <span
                className="text-[9px] bg-black px-1.5 py-[1px] font-mono font-bold transition-colors duration-500"
                style={{ color: navbarBg }}
              >
                NEW
              </span>
            </span>
          </nav>

          {/* Right: Search & Action Button */}
          <div className="flex items-center gap-4 font-jetbrains">
            {/* Animated Search Input */}
            <div className="hidden sm:block">
              <AnimatedSearchInput onClick={onSearchTrigger} />
            </div>

            {/* GET THE APP Action Button — hidden on mobile/tablet, shown from lg+ */}
            <div className="hidden lg:block">
              <GetTheAppNavButton onClick={() => onNavigate('download')} />
            </div>

            {/* Animated Mobile Hamburger Switch */}
            <div className="lg:hidden flex items-center">
              <HamburgerSwitch
                isOpen={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                color={navbarTextColor}
              />
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <StyledMobileDrawer
          $isOpen={mobileMenuOpen}
          $bgColor={navbarBg}
          $textColor={navbarTextColor}
          className="lg:hidden"
        >
          <div className="drawer-content">
            <span onClick={() => { onNavigate('markets'); setMobileMenuOpen(false); }} className="drawer-link">MARKETS</span>
            <span onClick={() => { onNavigate('how-it-works'); setMobileMenuOpen(false); }} className="drawer-link">HOW IT WORKS</span>
            <span onClick={() => { onNavigate('security'); setMobileMenuOpen(false); }} className="drawer-link">SECURITY</span>
            <span onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className="drawer-link">ABOUT</span>
            <span onClick={() => { onNavigate('faq'); setMobileMenuOpen(false); }} className="drawer-link">HELP CENTRE / FAQ</span>
            <span onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="drawer-link">CONTACT</span>
            {/* GET THE APP — full-width CTA button at bottom of drawer */}
            <div className="drawer-cta">
              <GetTheAppNavButton onClick={() => { onNavigate('download'); setMobileMenuOpen(false); }} />
            </div>
          </div>
        </StyledMobileDrawer>
      </header>
    </div>
  );
};
