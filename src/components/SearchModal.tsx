import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Page } from '../App';

interface SearchItem {
  id: string;
  category: 'markets' | 'guide' | 'security' | 'legal' | 'company' | 'developers';
  title: string;
  desc: string;
  tag: string;
  route?: Page;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: '1',
    category: 'markets',
    title: 'GSE Continuous Trading Session and Equities',
    desc: 'Live quotes, tick by tick market prints, and 33 listed companies on the Ghana Stock Exchange.',
    tag: 'MARKETS',
    route: 'markets',
  },
  {
    id: '2',
    category: 'guide',
    title: 'How It Works: 6 Step Retail Investor Journey',
    desc: 'Account registration, Ghana Card verification, MoMo wallet funding, and direct order execution.',
    tag: 'GUIDE',
    route: 'how-it-works',
  },
  {
    id: '3',
    category: 'security',
    title: '4 Layer Security Architecture',
    desc: 'Transport encryption (TLS 1.3), Application 2FA, Custodial Data Segregation, and SEC Compliance.',
    tag: 'SECURITY',
    route: 'security',
  },
  {
    id: '4',
    category: 'company',
    title: 'About Princeton Systems Ltd',
    desc: 'Company background, Accra headquarters, SEC Ghana statutory alignment, and broker integration.',
    tag: 'COMPANY',
    route: 'about',
  },
  {
    id: '5',
    category: 'guide',
    title: 'Individual Retail Trading Account',
    desc: 'Instant paperless Ghana Card KYC, zero mandatory minimum deposit balance, and instant Mobile Money deposits.',
    tag: 'RETAIL',
    route: 'individual',
  },
  {
    id: '6',
    category: 'company',
    title: 'Corporate and SME Brokerage Accounts',
    desc: 'Brokerage account for Ghanaian incorporated entities, partnerships, and family trusts with multi-user governance.',
    tag: 'CORPORATE',
    route: 'corporate',
  },
  {
    id: '7',
    category: 'developers',
    title: 'Institutional DMA and FIX API Access',
    desc: 'Direct Market Access (DMA) routing to the GSE Automated Trading System (ATS) and FIX 4.4/5.0 connectivity.',
    tag: 'INSTITUTIONAL',
    route: 'institutional',
  },
  {
    id: '8',
    category: 'guide',
    title: 'Mobile Money Deposits and Settlements',
    desc: 'Instant wallet funding and dividend payouts through MTN MoMo, Telecel Cash, and bank transfers.',
    tag: 'PAYMENTS',
    route: 'download',
  },
  {
    id: '9',
    category: 'legal',
    title: 'Statutory Investment Risk Disclosure',
    desc: 'Capital at risk notice, liquidity considerations, and regulatory warnings under Act 929.',
    tag: 'LEGAL',
    route: 'risk-disclosure',
  },
  {
    id: '10',
    category: 'legal',
    title: 'Terms of Service and Binding Agreement',
    desc: 'Terms of use, user responsibilities, platform uptime standards, and account governance.',
    tag: 'LEGAL',
    route: 'terms',
  },
  {
    id: '11',
    category: 'legal',
    title: 'Privacy Policy and Data Protection',
    desc: 'Data Protection Act 2012 (Act 843) compliance and AES-256 encrypted credential storage.',
    tag: 'LEGAL',
    route: 'privacy',
  },
  {
    id: '12',
    category: 'developers',
    title: 'FIX and REST Broker APIs',
    desc: 'Programmatic GSE market data streaming and direct market access endpoints for developers.',
    tag: 'DEVELOPERS',
    route: 'developers',
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentColor?: string;
  onNavigate?: (page: Page) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  accentColor = '#ffc506',
  onNavigate = () => {},
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 620);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  const filteredItems = SEARCH_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <ModalBackdropContainer
      $isClosing={isClosing}
      onClick={onClose}
    >
      <ModalCardContainer
        $isClosing={isClosing}
        $accent={accentColor}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-inner-content">
          {/* Top Search Input with User's Animated Input component */}
          <div className="p-6 border-b border-zinc-800 bg-[#121216]">
            <StyledModalSearchWrapper>
              <div className="input-container">
                <input
                  type="text"
                  autoFocus
                  name="text"
                  className="input"
                  placeholder="search..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <span className="icon">
                  <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </StyledModalSearchWrapper>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 px-6 py-3 border-b border-zinc-800/80 overflow-x-auto text-[11px] font-mono text-zinc-400 bg-[#0c0c0e]">
            {['all', 'markets', 'guide', 'security', 'legal', 'company', 'developers'].map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1 uppercase border transition-colors ${
                  activeCategory === c
                    ? 'font-bold'
                    : 'border-transparent hover:border-zinc-700'
                }`}
                style={
                  activeCategory === c
                    ? {
                        borderColor: accentColor,
                        color: accentColor,
                        backgroundColor: `${accentColor}18`,
                      }
                    : {}
                }
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search Results List with Custom Scrollbar */}
          <div className="search-results-list max-h-[380px] overflow-y-auto p-4 space-y-2 bg-[#0c0c0e]">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12 text-zinc-600 font-mono text-xs">
                No matching documentation or pages found for "{searchQuery}".
              </div>
            ) : (
              filteredItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.route) onNavigate(item.route);
                    onClose();
                  }}
                  className="p-4 border border-zinc-900 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[10px] font-mono font-bold text-zinc-500 group-hover:transition-colors"
                      style={{ color: item.tag === activeCategory.toUpperCase() ? accentColor : undefined }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-zinc-600 text-xs group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <h4 className="font-general font-semibold text-sm text-white mb-1">{item.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex items-center justify-between bg-zinc-950">
            <span>PRINCETON SYSTEMS LTD KNOWLEDGE BASE</span>
            <span className="border border-zinc-800 px-2 py-0.5 text-zinc-400">ESC TO CLOSE</span>
          </div>
        </div>
      </ModalCardContainer>
    </ModalBackdropContainer>
  );
};

// ── BACKDROP WITH LEFT-TO-RIGHT CURTAIN EXPAND ANIMATION ──
const ModalBackdropContainer = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  animation: ${props =>
    props.$isClosing
      ? 'curtainCollapse 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      : 'curtainExpand 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards'};
  animation-delay: ${props => (props.$isClosing ? '0.24s' : '0s')};

  @keyframes curtainExpand {
    0% {
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
      opacity: 0;
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      opacity: 1;
    }
  }

  @keyframes curtainCollapse {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      opacity: 1;
    }
    100% {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
      opacity: 0;
    }
  }
`;

// ── POPUP CARD WITH BOTTOM-TO-TOP ROLL-UP & HERO CARD ANIMATION ──
const ModalCardContainer = styled.div<{ $isClosing: boolean; $accent: string }>`
  width: 100%;
  max-width: 42rem;
  background-color: #0c0c0e;
  border: 1px solid #27272a;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  font-family: 'JetBrains Mono', monospace;
  opacity: 0;

  animation: ${props =>
    props.$isClosing
      ? 'cardRollDown 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      : 'cardRollUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards'};
  animation-delay: ${props => (props.$isClosing ? '0s' : '0.38s')};

  .modal-inner-content {
    animation: ${props =>
      props.$isClosing
        ? 'none'
        : 'contentSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'};
    animation-delay: 0.65s;
    opacity: 0;
  }

  @keyframes cardRollUp {
    0% {
      transform: translateY(70px) scaleY(0.75);
      transform-origin: bottom center;
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1);
      transform-origin: bottom center;
      opacity: 1;
    }
  }

  @keyframes cardRollDown {
    0% {
      transform: translateY(0) scaleY(1);
      transform-origin: bottom center;
      opacity: 1;
    }
    100% {
      transform: translateY(70px) scaleY(0.75);
      transform-origin: bottom center;
      opacity: 0;
    }
  }

  @keyframes contentSlideIn {
    0% {
      opacity: 0;
      transform: translateX(-24px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Custom Scrollbar (Scroll Wheel) Matching Page Theme Accent */
  .search-results-list::-webkit-scrollbar {
    width: 6px;
  }
  .search-results-list::-webkit-scrollbar-track {
    background: #08080a;
  }
  .search-results-list::-webkit-scrollbar-thumb {
    background-color: ${props => props.$accent};
    border-radius: 2px;
  }
  .search-results-list::-webkit-scrollbar-thumb:hover {
    filter: brightness(1.2);
  }
`;

const StyledModalSearchWrapper = styled.div`
  width: 100%;

  .input-container {
    width: 100%;
    position: relative;
  }

  .icon {
    position: absolute;
    right: 12px;
    top: calc(50% + 5px);
    transform: translateY(calc(-50% - 5px));
    pointer-events: none;
  }

  .input {
    width: 100%;
    height: 44px;
    padding: 10px 40px 10px 14px;
    transition: .2s linear;
    border: 2.5px solid black;
    font-size: 14px;
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: #ffffff;
    color: #000000;
  }

  .input:focus {
    outline: none;
    border: 0.5px solid black;
    box-shadow: -5px -5px 0px #000000;
  }

  .input-container:hover > .icon {
    animation: anim 1s linear infinite;
  }

  @keyframes anim {
    0%,
    100% {
      transform: translateY(calc(-50% - 5px)) scale(1);
    }

    50% {
      transform: translateY(calc(-50% - 5px)) scale(1.1);
    }
  }
`;
