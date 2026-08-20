import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowUpRight, Mail, Landmark, Radio, Building2, Globe2, Briefcase, Layers, ShieldCheck } from 'lucide-react';
import type { Page } from '../App';

const SPONSORS = [
  { n: '01', name: 'GCB Bank PLC',     code: 'GCB', icon: Landmark },
  { n: '02', name: 'Scancom (MTN)',    code: 'MTN', icon: Radio },
  { n: '03', name: 'Stanbic Bank',     code: 'STB', icon: Building2 },
  { n: '04', name: 'Ecobank Ghana',    code: 'ECO', icon: Globe2 },
  { n: '05', name: 'CalBank PLC',      code: 'CAL', icon: Briefcase },
  { n: '06', name: 'Absa Bank Ghana',  code: 'ABS', icon: Layers },
];

interface FooterProps {
  accentColor?: string;
  onNavigate?: (page: Page) => void;
}

// ── MULTI-LAYER EXPANDING BUBBLE BUTTON FOR INSTITUTIONAL DESK ──
const MultiLayerBubbleButton = ({
  text,
  onClick,
  accentColor,
}: {
  text: string;
  onClick: () => void;
  accentColor: string;
}) => {
  return (
    <StyledBubbleWrapper $accent={accentColor}>
      <button className="button button-item" onClick={onClick}>
        <span className="button-bg">
          <span className="button-bg-layers">
            <span className="button-bg-layer button-bg-layer-1 -purple" />
            <span className="button-bg-layer button-bg-layer-2 -turquoise" />
            <span className="button-bg-layer button-bg-layer-3 -yellow" />
          </span>
        </span>
        <span className="button-inner">
          <span className="button-inner-static">{text}</span>
          <span className="button-inner-hover">{text}</span>
        </span>
      </button>
    </StyledBubbleWrapper>
  );
};

const StyledBubbleWrapper = styled.div<{ $accent: string }>`
  display: inline-block;

  button {
    all: unset;
  }

  .button {
    position: relative;
    display: inline-flex;
    height: 2.85rem;
    align-items: center;
    border-radius: 9999px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    cursor: pointer;
  }

  .button-item {
    background-color: transparent;
    color: #1d1d1f;
  }

  .button-item .button-bg {
    border: 1.5px solid #18181b;
    background-color: #18181b;
  }

  .button-inner,
  .button-inner-hover,
  .button-inner-static {
    pointer-events: none;
    display: block;
  }

  .button-inner {
    position: relative;
    color: #ffffff;
    z-index: 10;
  }

  .button-inner-hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(70%);
    color: #ffffff;
  }

  .button-bg {
    overflow: hidden;
    border-radius: 9999px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .button-bg,
  .button-bg-layer,
  .button-bg-layers {
    display: block;
  }

  .button-bg-layers {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -60%;
    aspect-ratio: 1 / 1;
    width: max(200%, 10rem);
  }

  .button-bg-layer {
    border-radius: 9999px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
  }

  .button-bg-layer.-purple {
    background-color: rgba(163, 116, 255);
  }

  .button-bg-layer.-turquoise {
    background-color: rgba(23, 241, 209);
  }

  .button-bg-layer.-yellow {
    background-color: ${props => props.$accent || 'rgba(255, 208, 116)'};
  }

  .button:hover .button-inner-static {
    opacity: 0;
    transform: translateY(-70%);
    transition:
      transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.3s linear;
  }

  .button:hover .button-inner-hover {
    opacity: 1;
    transform: translateY(0);
    transition:
      transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .button:hover .button-bg-layer {
    transition:
      transform 1.3s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.3s linear;
  }

  .button:hover .button-bg-layer-1 {
    transform: scale(1);
  }

  .button:hover .button-bg-layer-2 {
    transition-delay: 0.1s;
    transform: scale(1);
  }

  .button:hover .button-bg-layer-3 {
    transition-delay: 0.2s;
    transform: scale(1);
  }
`;

// ── POLYGON SWEEP BTN-31 BUTTON FOR SUBSCRIBE ──
const SubscribeSweepButton = ({
  text,
  subscribed,
}: {
  text: string;
  subscribed: boolean;
}) => {
  return (
    <StyledSubscribeWrapper>
      <button type="submit" className="btn-31">
        <span className="text-container">
          <span className="text">{subscribed ? 'SUBSCRIBED ✓' : text}</span>
        </span>
      </button>
    </StyledSubscribeWrapper>
  );
};

const StyledSubscribeWrapper = styled.div`
  height: 100%;

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
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.1em;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0 1.5rem;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #000000;
    position: relative;
    text-transform: uppercase;
  }

  .btn-31:disabled {
    cursor: default;
  }

  .btn-31:-moz-focusring {
    outline: auto;
  }

  .btn-31:before {
    --progress: 100%;
    background: #fff;
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
    transition: -webkit-clip-path 0.2s ease, clip-path 0.2s ease;
  }

  .btn-31:hover:before {
    --progress: 0%;
  }

  .btn-31 .text-container {
    display: block;
    overflow: hidden;
    position: relative;
    z-index: 10;
  }

  .btn-31 .text {
    display: block;
    font-weight: 900;
    position: relative;
    color: #ffffff;
    transition: color 0.2s ease;
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

export const Footer: React.FC<FooterProps> = ({ accentColor = '#3b82f6', onNavigate = () => {} }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="w-full bg-[#f5f5f0] text-black font-jetbrains mt-auto border-t border-black/10">

      {/* ── 7.12 Regulatory / Licensing Notice (Leads the footer per Black Star benchmark) ── */}
      <div className="bg-[#ebebe5] border-b border-black/10">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] text-black/70">
          <div className="flex items-start md:items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-black/60 shrink-0 mt-0.5 md:mt-0" />
            <p className="leading-relaxed">
              <span className="font-bold text-black">REGULATORY NOTICE:</span> The Ghana Stock Trading Platform is operated by Princeton Systems Ltd. Trading services will operate under licensed broker partners regulated by the Securities and Exchange Commission (SEC), Ghana.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 font-mono text-[10px] font-bold uppercase text-black/60">
            <span>SEC ALIGNMENT</span>
            <span>•</span>
            <span>ACT 929</span>
          </div>
        </div>
      </div>

      {/* ── Institutional Partners ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 pt-16 pb-12 border-b border-black/10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left */}
          <div className="lg:w-[300px] shrink-0">
            <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase mb-3 flex items-center gap-1.5 font-mono">
              <span className="text-black font-extrabold">&gt;</span> PARTNERS & LIQUIDITY
            </p>
            <h3 className="font-general font-semibold text-xl leading-tight mb-6 text-black">
              Princeton Systems Ltd connects directly to GSE capital markets.
            </h3>
            
            {/* Multi-Layer Animated Bubble Button */}
            <MultiLayerBubbleButton
              text="INSTITUTIONAL DESK →"
              accentColor={accentColor}
              onClick={() => onNavigate('contact')}
            />
          </div>

          {/* Partner grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3.5 flex-1 content-start">
            {SPONSORS.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.name}
                  onClick={() => onNavigate('markets')}
                  className="flex items-center justify-between border-b border-black/10 pb-3 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-black/30 font-bold font-mono w-4">{s.n}</span>
                    <IconComp className="w-3.5 h-3.5 text-black/40 group-hover:text-black transition-colors" />
                    <span className="text-xs sm:text-sm font-semibold group-hover:opacity-70 transition-opacity">{s.name}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black/30 group-hover:text-black transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Market Newsletter Briefing ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-12 border-b border-black/10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
          <div className="lg:w-[300px] shrink-0">
            <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase mb-3 flex items-center gap-1.5 font-mono">
              <span className="text-black font-extrabold">&gt;</span> MARKET BRIEFING
            </p>
            <h3 className="font-general font-semibold text-xl leading-tight text-black">
              Daily GSE market insights<br />and company releases.
            </h3>
          </div>
          <div className="flex-1 w-full max-w-[600px]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex h-[46px]"
            >
              <div className="flex-1 flex items-center border border-black/25 border-r-0 bg-white px-4 gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-black/30 shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="bg-transparent text-sm text-black placeholder:text-black/35 outline-none w-full font-jetbrains min-w-0"
                />
              </div>
              <SubscribeSweepButton
                text="SUBSCRIBE"
                subscribed={subscribed}
              />
            </form>
          </div>
        </div>
      </div>

      {/* ── Categorized Link Navigation Grid (Section 7.12 Pattern) ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-14 border-b border-black/10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          
          {/* Column: PRODUCT */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase mb-4 font-mono">
              PRODUCT
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-black/70">
              <li onClick={() => onNavigate('markets')} className="hover:text-black cursor-pointer">Markets & Tickers</li>
              <li onClick={() => onNavigate('how-it-works')} className="hover:text-black cursor-pointer">How It Works</li>
              <li onClick={() => onNavigate('security')} className="hover:text-black cursor-pointer">Security Architecture</li>
              <li onClick={() => onNavigate('download')} className="hover:text-black cursor-pointer font-semibold text-black">Download / Get the App</li>
              <li onClick={() => onNavigate('developers')} className="hover:text-black cursor-pointer">For Developers (APIs)</li>
            </ul>
          </div>

          {/* Column: COMPANY */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase mb-4 font-mono">
              COMPANY
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-black/70">
              <li onClick={() => onNavigate('about')} className="hover:text-black cursor-pointer">About Princeton</li>
              <li onClick={() => onNavigate('careers')} className="hover:text-black cursor-pointer">Careers</li>
              <li onClick={() => onNavigate('blog')} className="hover:text-black cursor-pointer">Blog & Market Insights</li>
              <li onClick={() => onNavigate('contact')} className="hover:text-black cursor-pointer">Contact Desk</li>
            </ul>
          </div>

          {/* Column: HELP & SUPPORT */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase mb-4 font-mono">
              HELP & SUPPORT
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-black/70">
              <li onClick={() => onNavigate('faq')} className="hover:text-black cursor-pointer">Help Centre / FAQ</li>
              <li onClick={() => onNavigate('contact')} className="hover:text-black cursor-pointer">Contact Support</li>
              <li onClick={() => onNavigate('how-it-works')} className="hover:text-black cursor-pointer">Onboarding Guide</li>
              <li onClick={() => onNavigate('developers')} className="hover:text-black cursor-pointer">API Status & Docs</li>
            </ul>
          </div>

          {/* Column: LEGAL & GOVERNANCE */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase mb-4 font-mono">
              LEGAL & GOVERNANCE
            </p>
            <ul className="flex flex-col gap-2.5 text-xs text-black/70">
              <li onClick={() => onNavigate('terms')} className="hover:text-black cursor-pointer">Terms of Service</li>
              <li onClick={() => onNavigate('privacy')} className="hover:text-black cursor-pointer">Privacy Policy</li>
              <li onClick={() => onNavigate('risk-disclosure')} className="hover:text-black cursor-pointer text-red-700 font-semibold">Risk Disclosure</li>
              <li onClick={() => onNavigate('security')} className="hover:text-black cursor-pointer">Compliance Alignment</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-black/50 text-center sm:text-left">
          © 2026 <span onClick={() => onNavigate('home')} className="font-semibold cursor-pointer hover:underline" style={{ color: accentColor }}>Princeton Systems Ltd</span>. All rights reserved. Registered in Ghana.
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-black/20 text-[10px] font-bold tracking-wider uppercase overflow-hidden">
            <button onClick={() => onNavigate('download')} className="px-3 py-2 hover:bg-black hover:text-white transition-colors">GET APP</button>
            <button onClick={() => onNavigate('faq')} className="px-3 py-2 border-l border-black/10 hover:bg-black hover:text-white transition-colors">FAQ</button>
          </div>
          <div
            onClick={() => onNavigate('security')}
            className="flex items-center text-white text-[10px] font-bold tracking-wider uppercase px-3 py-2 gap-2 cursor-pointer transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            <span className="font-mono text-[10px]">SEC STATUS</span>
            <span className="bg-white px-1.5 py-0.5 text-[9px] font-extrabold" style={{ color: accentColor }}>COMPLIANT</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
