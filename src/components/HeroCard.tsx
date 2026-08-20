import React from 'react';
import styled from 'styled-components';
import { GetStartedButton, BrowseExamplesButton } from './AnimatedButtons';
import { Shield, Lock, Landmark, FileText, Smartphone, AlertTriangle, HelpCircle, Mail, Code2, BookOpen, Users, UserCheck, Briefcase } from 'lucide-react';
import type { Page } from '../App';

// Gumroad-inspired interactive animated tier button
const GumroadTierButton: React.FC<{
  label: string;
  onClick: () => void;
  hoverBg?: string;
  hoverText?: string;
}> = ({ label, onClick, hoverBg = '#ffc506', hoverText = '#000000' }) => {
  return (
    <StyledGumroad $hoverBg={hoverBg} $hoverText={hoverText}>
      <button className="button" onClick={onClick}>
        <span>{label}</span>
      </button>
    </StyledGumroad>
  );
};

const StyledGumroad = styled.div<{ $hoverBg: string; $hoverText: string }>`
  display: inline-block;
  width: 100%;

  .button {
    --bg: #000;
    --hover-bg: ${props => props.$hoverBg};
    --hover-text: ${props => props.$hoverText};
    color: #fff;
    cursor: pointer;
    border: 1px solid #333338;
    border-radius: 4px;
    padding: 0.65em 1em;
    background: var(--bg);
    transition: 0.2s;
    width: 100%;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    border-color: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem #ffffff;
  }

  .button:active {
    transform: translate(0);
    box-shadow: none;
  }
`;

interface HeroCardProps {
  page: Page;
  isExiting: boolean;
  onNavigate: (page: Page) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ page, isExiting, onNavigate }) => {
  const EXPAND_DURATION = 0.45;

  const containerStyle: React.CSSProperties = {
    animation: isExiting
      ? `cardCollapse 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards`
      : `cardExpand ${EXPAND_DURATION}s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    overflow: 'hidden',
  };

  const contentStyle: React.CSSProperties = isExiting
    ? { opacity: 0, transition: 'opacity 0.15s' }
    : {
        animation: `contentSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        animationDelay: `${EXPAND_DURATION}s`,
        opacity: 0,
      };

  // ── MARKETS ───────────────────────────────────────────
  if (page === 'markets') {
    return (
      <div
        className="relative z-10 w-full max-w-[960px] bg-[#0c1220] rounded-none shadow-2xl text-white mt-1 md:mt-2 ml-0 md:ml-12 lg:ml-20"
        style={containerStyle}
      >
        <div className="p-8 sm:p-10" style={contentStyle}>
          <div className="flex items-center justify-between pb-6 mb-8 font-jetbrains text-[11px] font-semibold tracking-wider text-blue-400 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400" />
              GHANA STOCK EXCHANGE
            </span>
            <span className="flex items-center gap-2 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block" />
              LIVE FEED
            </span>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
            <div className="md:col-span-2">
              <h1 className="font-general font-bold text-5xl lg:text-[64px] leading-none tracking-tight text-white">
                <span className="text-blue-400 block mb-1">Markets.</span>
                Overview
              </h1>
              <p className="text-zinc-300 text-xs font-jetbrains mt-3 leading-relaxed">
                Real-time market analytics from the Ghana Stock Exchange. Track equities, sovereign bonds, and sector benchmarks.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-3">
              {[
                { ticker: 'GSE-CI', price: '2,847.32', change: '+1.24%', up: true },
                { ticker: 'GCB', price: 'GH₵ 5.20', change: '+0.80%', up: true },
                { ticker: 'MTNGH', price: 'GH₵ 1.38', change: '-0.22%', up: false },
                { ticker: 'TOTAL', price: 'GH₵ 4.15', change: '+0.12%', up: true },
              ].map(t => (
                <div key={t.ticker} className="bg-[#070b14] px-4 py-3 flex justify-between items-center transition-colors">
                  <div>
                    <div className="text-[10px] text-blue-400 font-bold tracking-widest">{t.ticker}</div>
                    <div className="text-white font-bold text-sm mt-0.5">{t.price}</div>
                  </div>
                  <span className={`text-xs font-bold font-jetbrains ${t.up ? 'text-blue-400' : 'text-zinc-400'}`}>{t.change}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GetStartedButton text="GET THE APP" bg="#3b82f6" textColor="#ffffff" onClick={() => onNavigate('download')} />
            <BrowseExamplesButton text="HOW IT WORKS" accentColor="#3b82f6" onClick={() => onNavigate('how-it-works')} />
          </div>
        </div>
        <AnimKeyframes />
      </div>
    );
  }

  // ── HOW IT WORKS ──────────────────────────────────────
  if (page === 'how-it-works') {
    return (
      <div
        className="relative z-10 w-full max-w-[960px] bg-[#06190e] rounded-none shadow-2xl text-white mt-1 md:mt-2 ml-0 md:ml-12 lg:ml-20"
        style={containerStyle}
      >
        <div className="p-8 sm:p-10" style={contentStyle}>
          <div className="flex items-center justify-between pb-6 mb-8 font-jetbrains text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400" />
              BEGINNER JOURNEY
            </span>
            <span className="text-emerald-400 font-jetbrains">6 STEPS</span>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
            <div className="md:col-span-2">
              <h1 className="font-general font-bold text-5xl lg:text-[64px] leading-none tracking-tight text-white">
                <span className="text-emerald-400 block mb-1">Simple.</span>
                How It Works
              </h1>
              <p className="text-zinc-300 text-xs font-jetbrains mt-3 leading-relaxed">
                Step by step walk through of the retail investing journey from account setup to your first executed GSE order.
              </p>
            </div>
            <div className="md:col-span-3 flex flex-col gap-2.5">
              {[
                { n: '01', title: 'Register and KYC', desc: 'Verify identity online with Ghana Card in 3 minutes' },
                { n: '02', title: 'Deposit Funds', desc: 'Direct deposit via Mobile Money or Bank Wire' },
                { n: '03', title: 'Build Watchlist', desc: 'Monitor top Ghanaian companies and index movements' },
                { n: '04', title: 'Execute Orders', desc: 'Real time trade routing with instant confirmation' },
              ].map(s => (
                <div key={s.n} className="flex items-center gap-4 bg-[#040e08] px-4 py-2.5">
                  <span className="text-emerald-400 font-bold font-jetbrains text-xs w-6 shrink-0">{s.n}</span>
                  <span className="font-bold text-xs text-white uppercase tracking-wider">{s.title}</span>
                  <span className="text-zinc-300 text-[11px] ml-auto text-right">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GetStartedButton text="OPEN AN ACCOUNT" bg="#22c55e" textColor="#000000" onClick={() => onNavigate('download')} />
            <BrowseExamplesButton text="VIEW MARKETS" accentColor="#22c55e" onClick={() => onNavigate('markets')} />
          </div>
        </div>
        <AnimKeyframes />
      </div>
    );
  }

  // ── SECURITY & TRUST ──────────────────────────────────
  if (page === 'security') {
    return (
      <div
        className="relative z-10 w-full max-w-[960px] bg-[#120c1f] rounded-none shadow-2xl text-white mt-1 md:mt-2 ml-0 md:ml-12 lg:ml-20"
        style={containerStyle}
      >
        <div className="p-8 sm:p-10" style={contentStyle}>
          <div className="flex items-center justify-between pb-6 mb-8 font-jetbrains text-[11px] font-semibold tracking-wider text-purple-400 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-400" />
              4 LAYER ARCHITECTURE
            </span>
            <span className="flex items-center gap-2 text-purple-300">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              ACT 929 ALIGNED
            </span>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
            <div className="md:col-span-2">
              <h1 className="font-general font-bold text-5xl lg:text-[64px] leading-none tracking-tight text-white">
                <span className="text-purple-400 block mb-1">Guarded.</span>
                Security & Trust
              </h1>
              <p className="text-zinc-300 text-xs font-jetbrains mt-3 leading-relaxed">
                Public overview of the four layer security model (Transport, Application, Data, Compliance) safeguarding client assets.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-3">
              {[
                { icon: Lock, title: 'Transport Layer', desc: 'TLS 1.3 and AES-256 encrypted endpoints' },
                { icon: Shield, title: 'Application Layer', desc: '2FA authentication and biometric authorization' },
                { icon: FileText, title: 'Data Layer', desc: 'Segregated custody and zero third-party data sharing' },
                { icon: Landmark, title: 'Compliance Layer', desc: 'SEC Ghana and Securities Industry Act 2016' },
              ].map(f => {
                const IconComponent = f.icon;
                return (
                  <div key={f.title} className="bg-[#090610] p-3.5">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-white font-bold text-xs">{f.title}</span>
                    </div>
                    <div className="text-zinc-300 text-[11px] leading-relaxed">{f.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GetStartedButton text="ABOUT PRINCETON" bg="#a855f7" textColor="#ffffff" onClick={() => onNavigate('about')} />
            <BrowseExamplesButton text="TERMS OF SERVICE" accentColor="#a855f7" onClick={() => onNavigate('terms')} />
          </div>
        </div>
        <AnimKeyframes />
      </div>
    );
  }

  // ── ABOUT / COMPANY ───────────────────────────────────
  if (page === 'about') {
    return (
      <div
        className="relative z-10 w-full max-w-[960px] bg-[#141417] rounded-none shadow-2xl text-white mt-1 md:mt-2 ml-0 md:ml-12 lg:ml-20"
        style={containerStyle}
      >
        <div className="p-8 sm:p-10" style={contentStyle}>
          <div className="flex items-center justify-between pb-6 mb-8 font-jetbrains text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-zinc-300" />
              PRINCETON SYSTEMS LTD
            </span>
            <span>ACCRA, GHANA</span>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
            <div className="md:col-span-2">
              <h1 className="font-general font-bold text-5xl lg:text-[64px] leading-none tracking-tight text-white">
                <span className="text-zinc-200 block mb-1">Company.</span>
                About Us
              </h1>
              <p className="text-zinc-300 text-xs font-jetbrains mt-3 leading-relaxed">
                Princeton Systems Ltd is a licensed securities brokerage engineered to build next generation capital market infrastructure for West Africa.
              </p>
            </div>
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: '2019', label: 'FOUNDED' },
                  { val: 'SEC', label: 'REGULATED' },
                  { val: 'GSE', label: 'MEMBER' },
                ].map(s => (
                  <div key={s.label} className="bg-zinc-900/80 p-3.5 text-center">
                    <div className="text-white font-bold text-xl font-general">{s.val}</div>
                    <div className="text-zinc-400 text-[10px] tracking-widest uppercase mt-1 font-mono">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed font-jetbrains pl-3">
                Democratising capital markets in Ghana, providing transparent access and institutional tools for retail and corporate investors alike.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GetStartedButton text="CONTACT US" bg="#ffffff" textColor="#000000" onClick={() => onNavigate('contact')} />
            <BrowseExamplesButton text="VIEW CAREERS" accentColor="#a1a1aa" onClick={() => onNavigate('careers')} />
          </div>
        </div>
        <AnimKeyframes />
      </div>
    );
  }

  // ── DOWNLOAD / GET THE APP ────────────────────────────
  if (page === 'download') {
    return (
      <div
        className="relative z-10 w-full max-w-[960px] bg-[#2d1b13] rounded-none shadow-2xl text-white mt-1 md:mt-2 ml-0 md:ml-12 lg:ml-20"
        style={containerStyle}
      >
        <div className="p-8 sm:p-10" style={contentStyle}>
          <div className="flex items-center justify-between pb-6 mb-8 font-jetbrains text-[11px] font-semibold tracking-wider text-[#c97b4b] uppercase">
            <span>OFFICIAL MOBILE APPLICATION</span>
            <span>IOS AND ANDROID</span>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
            <div className="md:col-span-3">
              <h1 className="font-general font-bold text-5xl lg:text-[60px] leading-none tracking-tight text-white mb-4">
                <span className="text-[#c97b4b] block mb-1">Get the App.</span>
                Trade on the Go
              </h1>
              <p className="text-zinc-300 text-xs font-jetbrains leading-relaxed mb-4">
                Track GSE prices, manage watchlists, and receive instant price notifications directly from your smartphone.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono">
                <span className="text-[#c97b4b]">✓</span>
                <span>Requirement: Ghana Card for fast paperless identity verification</span>
              </div>
            </div>
            <div className="md:col-span-2 bg-[#1f110a] p-5 flex flex-col items-center justify-center text-center">
              <Smartphone className="w-10 h-10 text-[#c97b4b] mb-3" />
              <div className="text-xs font-bold uppercase text-white mb-1">Early Access Program</div>
              <div className="text-[10px] text-zinc-400 mb-4">Be the first to trade live on iOS and Android</div>
              <div className="w-full text-left text-[9px] text-zinc-500 font-mono pt-3">
                STATUS: MVP AND PRIVATE BETA
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GetStartedButton text="HOW IT WORKS" bg="#c97b4b" textColor="#ffffff" onClick={() => onNavigate('how-it-works')} />
            <BrowseExamplesButton text="EXPLORE MARKETS" accentColor="#c97b4b" onClick={() => onNavigate('markets')} />
          </div>
        </div>
        <AnimKeyframes />
      </div>
    );
  }

  // ── SUBPAGE HEADERS TABLE ─────────────────────────────
  const subpageHeaders: Record<string, { label: string; tag: string; title: string; desc: string; icon: any; color: string }> = {
    individual: {
      label: 'RETAIL ACCOUNT TIER',
      tag: 'INSTANT ONBOARDING',
      title: 'Individual Retail Trading',
      desc: 'Standard retail trading account with instant paperless Ghana Card KYC, zero mandatory minimum deposit balance, and instant Mobile Money deposits.',
      icon: UserCheck,
      color: '#ffc506',
    },
    corporate: {
      label: 'CORPORATE BROKERAGE',
      tag: 'ENTITY GOVERNANCE',
      title: 'Corporate and SME Accounts',
      desc: 'Tailored brokerage for Ghanaian companies, partnerships, and family trusts with multi-signatory governance and dedicated account managers.',
      icon: Briefcase,
      color: '#22c55e',
    },
    institutional: {
      label: 'INSTITUTIONAL DESK',
      tag: 'DMA AND FIX PROTOCOL',
      title: 'Institutional and DMA Platform',
      desc: 'Sub-millisecond FIX 4.4/5.0 direct order routing to the GSE Automated Trading System (ATS) for funds, pension managers, and algorithmic desks.',
      icon: Code2,
      color: '#3b82f6',
    },
    terms: {
      label: 'LEGAL AGREEMENT',
      tag: 'BINDING TERMS',
      title: 'Terms of Service',
      desc: 'Terms governing the access, use, and intellectual property of the Princeton Systems Ltd public web and mobile client applications.',
      icon: FileText,
      color: '#a1a1aa',
    },
    privacy: {
      label: 'DATA GOVERNANCE',
      tag: 'PRIVACY AND RIGHTS',
      title: 'Privacy Policy',
      desc: 'How your personal data, KYC records, and device fingerprints are collected, encrypted, and strictly protected.',
      icon: Lock,
      color: '#a1a1aa',
    },
    'risk-disclosure': {
      label: 'STATUTORY DISCLOSURE',
      tag: 'CAPITAL AT RISK',
      title: 'Risk Disclosure',
      desc: 'Mandatory statutory investment risk disclosure statement required for capital market trading and securities brokerage.',
      icon: AlertTriangle,
      color: '#ef4444',
    },
    faq: {
      label: 'KNOWLEDGE BASE',
      tag: 'HELP CENTRE',
      title: 'Frequently Asked Questions',
      desc: 'Searchable answers and troubleshooting guidelines for account verification, GSE market hours, fees, and order routing.',
      icon: HelpCircle,
      color: '#3b82f6',
    },
    contact: {
      label: 'SUPPORT DESK',
      tag: 'ACCRA HEADQUARTERS',
      title: 'Contact Us',
      desc: 'Direct channels to our compliance, institutional broker desk, and client onboarding support team in Accra, Ghana.',
      icon: Mail,
      color: '#a1a1aa',
    },
    developers: {
      label: 'DEVELOPER PLATFORM',
      tag: 'API PORTAL',
      title: 'For Developers',
      desc: 'Documentation and sandboxes for future GSE market data feeds, programmatic order APIs, and broker connectivity.',
      icon: Code2,
      color: '#3b82f6',
    },
    blog: {
      label: 'INVESTOR EDUCATION',
      tag: 'MARKET INSIGHTS',
      title: 'Blog and Research',
      desc: 'Educational articles, sector breakdowns, macroeconomic analysis, and daily morning notes on the Ghana Stock Exchange.',
      icon: BookOpen,
      color: '#3b82f6',
    },
    careers: {
      label: 'TALENT AND CULTURE',
      tag: 'OPEN ROLES',
      title: 'Careers at Princeton',
      desc: 'Join our engineering, compliance, and capital markets teams building Africa’s most reliable trading platform.',
      icon: Users,
      color: '#22c55e',
    },
  };

  if (subpageHeaders[page]) {
    const meta = subpageHeaders[page];
    const IconComp = meta.icon;
    return (
      <div
        className="relative z-10 w-full max-w-[960px] bg-[#141417] rounded-none shadow-2xl text-white mt-1 md:mt-2 ml-0 md:ml-12 lg:ml-20"
        style={containerStyle}
      >
        <div className="p-8 sm:p-10" style={contentStyle}>
          <div className="flex items-center justify-between pb-6 mb-8 font-jetbrains text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
            <span>{meta.label}</span>
            <span className="flex items-center gap-2">
              <IconComp className="w-3.5 h-3.5" style={{ color: meta.color }} />
              {meta.tag}
            </span>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
            <div className="md:col-span-3">
              <h1 className="font-general font-bold text-4xl sm:text-5xl lg:text-[56px] leading-tight tracking-tight text-white mb-3">
                {meta.title}
              </h1>
              <p className="text-zinc-300 text-xs font-jetbrains leading-relaxed">
                {meta.desc}
              </p>
            </div>
            <div className="md:col-span-2 bg-[#0c0c0e] p-5">
              <div className="text-[10px] text-zinc-500 font-mono mb-2 uppercase">GOVERNANCE NOTE</div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-jetbrains">
                Princeton Systems Ltd operates under the regulatory standards set by the Securities and Exchange Commission (SEC) Ghana.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GetStartedButton text="HOME PAGE" bg="#ffffff" textColor="#000000" onClick={() => onNavigate('home')} />
            <BrowseExamplesButton text="GET THE APP" accentColor="#ffffff" onClick={() => onNavigate('download')} />
          </div>
        </div>
        <AnimKeyframes />
      </div>
    );
  }

  // ── HOME (DEFAULT TWO-PATH CONVERSION HERO) ───────────
  return (
    <div
      className="relative z-10 w-full max-w-[540px] bg-[#141417] rounded-none shadow-2xl text-white mt-1 md:mt-2 ml-0 md:ml-12 lg:ml-20"
      style={containerStyle}
    >
      <div className="pt-5 pb-8 px-6 sm:px-8 md:px-9" style={contentStyle}>
        <div className="flex items-center justify-between pb-3.5 mb-4 font-jetbrains text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
          <span>GHANA STOCK EXCHANGE, IN YOUR POCKET</span>
          <span className="text-[#ffc506] font-bold">SEC READY</span>
        </div>

        <div className="mb-6">
          <h1 className="font-general font-semibold text-3xl sm:text-4xl lg:text-[40px] leading-[1.08] tracking-tight text-white">
            <span className="text-[#ffc506] block mb-1">Follow the market.</span>
            <span className="block">Understand your money.</span>
            <span className="block">Trade when you're ready.</span>
          </h1>
          <p className="text-zinc-300 text-xs font-jetbrains mt-3 leading-relaxed">
            The modern investment platform for Ghanaian equities, treasury bills, and market intelligence built for beginners and active investors alike.
          </p>
        </div>

        {/* Section 6: Two-Path Choice (Confident & Guided) */}
        <div className="flex flex-wrap items-center gap-3.5 mb-6">
          <GetStartedButton
            text="OPEN AN ACCOUNT"
            bg="#ffc506"
            textColor="#000000"
            onClick={() => onNavigate('download')}
          />
          <BrowseExamplesButton
            text="START HERE: HOW IT WORKS"
            accentColor="#ffc506"
            onClick={() => onNavigate('how-it-works')}
          />
        </div>

        {/* Account Selector with Gumroad-inspired interactive animated buttons */}
        <div className="font-jetbrains mt-5">
          <div className="text-[10px] font-semibold text-zinc-400 tracking-wider uppercase mb-2.5 flex items-center gap-1.5">
            <span className="text-zinc-400 font-bold">&gt;</span>
            <span>EXPLORE ACCOUNT TIERS:</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 max-w-[500px]">
            <GumroadTierButton
              label="INDIVIDUAL"
              hoverBg="#ffc506"
              hoverText="#000000"
              onClick={() => onNavigate('individual')}
            />
            <GumroadTierButton
              label="CORPORATE"
              hoverBg="#22c55e"
              hoverText="#000000"
              onClick={() => onNavigate('corporate')}
            />
            <GumroadTierButton
              label="INSTITUTIONAL"
              hoverBg="#3b82f6"
              hoverText="#ffffff"
              onClick={() => onNavigate('institutional')}
            />
          </div>
        </div>
      </div>
      <AnimKeyframes />
    </div>
  );
};

const AnimKeyframes = () => (
  <style>{`
    @keyframes cardExpand {
      from { width: 0; opacity: 1; }
      to   { width: 100%; opacity: 1; }
    }
    @keyframes cardCollapse {
      from { width: 100%; opacity: 1; }
      to   { width: 0;    opacity: 1; }
    }
    @keyframes contentSlideIn {
      from { opacity: 0; transform: translateX(-28px); }
      to   { opacity: 1; transform: translateX(0); }
    }
  `}</style>
);
