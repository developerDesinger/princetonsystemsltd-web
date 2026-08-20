import React, { useState } from 'react';
import { Shield, Lock, Landmark, Database, AlertTriangle, Mail, MapPin, Clock, Smartphone } from 'lucide-react';
import styled from 'styled-components';
import type { Page } from '../App';

interface SubpageContentProps {
  page: Page;
  onNavigate: (page: Page) => void;
}

const StyledBackButtonWrapper = styled.div<{ $isLight: boolean }>`
  button {
   display: flex;
   height: 2.8em;
   width: 95px;
   align-items: center;
   justify-content: center;
   border-radius: 4px;
   letter-spacing: 1px;
   transition: all 0.2s linear;
   cursor: pointer;
   border: none;
   background: ${props => props.$isLight ? '#ffffff' : '#141416'};
   color: ${props => props.$isLight ? '#000000' : '#ffffff'};
   font-family: 'JetBrains Mono', monospace;
   font-size: 11px;
   font-weight: 700;
   text-transform: uppercase;
   box-shadow: ${props => props.$isLight ? '3px 3px 12px rgba(0,0,0,0.05)' : 'none'};
  }

  button > svg {
   margin-right: 5px;
   margin-left: 5px;
   font-size: 16px;
   transition: all 0.4s ease-in;
   fill: currentColor;
  }

  button:hover > svg {
   font-size: 1.2em;
   transform: translateX(-5px);
  }

  button:hover {
   box-shadow: ${props => props.$isLight 
     ? '9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff' 
     : '9px 9px 33px #020203, -9px -9px 33px #0e0e11'};
   transform: translateY(-2px);
  }
`;

const PageBackButton: React.FC<{ onClick: () => void; isLight: boolean }> = ({ onClick, isLight }) => {
  return (
    <StyledBackButtonWrapper $isLight={isLight}>
      <button onClick={onClick} className="mb-6">
        <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z" /></svg>
        <span>Back</span>
      </button>
    </StyledBackButtonWrapper>
  );
};

export const SubpageContent: React.FC<SubpageContentProps> = ({ page, onNavigate }) => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [searchFaq, setSearchFaq] = useState('');

  // ── 8.1 MARKETS ───────────────────────────────────────
  if (page === 'markets') {
    return (
      <div className="w-full text-white font-jetbrains border-t border-zinc-900 mt-8 pt-12 pb-24 bg-[#070709]">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={false} />

          {/* Editorial numbered header */}
          <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_160px_1fr] gap-x-8 gap-y-4 pb-12 mb-4 border-b border-zinc-800">
            <span className="text-blue-500 font-mono font-bold text-xs mt-1">01</span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">MARKETS</span>
            <div>
              <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                Ghana Stock Exchange,<br />live in your pocket.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[560px]">Real-time tick data, daily volume prints, and historical candlestick charts for all 33 listed companies on the GSE. Trade directly from your phone with instant MoMo settlement.</p>
            </div>
          </div>

          <div className="flex items-center justify-end mb-8 text-[11px] tracking-widest text-zinc-500 uppercase">
            <span className="text-amber-400/90 font-mono text-[10px]">NOTICE: 15-MIN DELAYED SAMPLE DATA</span>
          </div>

          {/* GSE Indices Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-blue-900/40 bg-[#0c1220] p-6">
              <div className="text-[10px] text-blue-400 font-mono uppercase mb-2">GSE COMPOSITE INDEX (GSE-CI)</div>
              <div className="text-3xl font-bold font-general text-white">2,847.32</div>
              <div className="text-xs text-emerald-400 font-mono mt-2 flex items-center gap-1">
                <span>▲ +34.82 (+1.24%)</span>
                <span className="text-zinc-500 text-[10px] ml-2">YTD: +14.8%</span>
              </div>
            </div>
            <div className="border border-zinc-900 bg-[#0c0c0e] p-6">
              <div className="text-[10px] text-zinc-500 font-mono uppercase mb-2">GSE FINANCIAL STOCKS (GSE-FSI)</div>
              <div className="text-3xl font-bold font-general text-white">1,984.10</div>
              <div className="text-xs text-emerald-400 font-mono mt-2 flex items-center gap-1">
                <span>▲ +12.40 (+0.63%)</span>
                <span className="text-zinc-500 text-[10px] ml-2">YTD: +8.2%</span>
              </div>
            </div>
            <div className="border border-zinc-900 bg-[#0c0c0e] p-6">
              <div className="text-[10px] text-zinc-500 font-mono uppercase mb-2">MARKET CAPITALIZATION</div>
              <div className="text-3xl font-bold font-general text-white">GH₵ 71.4B</div>
              <div className="text-xs text-zinc-400 font-mono mt-2">
                <span>Total listed equities</span>
              </div>
            </div>
          </div>

          {/* Sample Stock Detail Card with Blank Chart Slot */}
          <div className="border border-zinc-800 bg-[#0c0c0e] p-8 mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-800 gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-general font-bold text-2xl text-white">Scancom PLC (MTN Ghana)</h3>
                  <span className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 text-[10px] px-2 py-0.5 font-mono font-bold">MTNGH</span>
                </div>
                <p className="text-zinc-400 text-xs mt-1">Telecommunications // GSE Primary Listing</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold font-mono text-white">GH₵ 1.38</div>
                <div className="text-xs text-red-400 font-mono">-0.22% (-GH₵ 0.003)</div>
              </div>
            </div>

            {/* Blank Chart Placeholder Slot */}
            <div className="w-full h-48 border border-dashed border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center text-center p-6 text-zinc-600 font-mono text-xs mb-6">
              <span className="text-zinc-400 mb-1">[ILLUSTRATIVE MTNGH CANDLESTICK CHART PLACEHOLDER]</span>
              <span className="text-[10px] text-zinc-600">Sample data visual demonstrating 30-day moving averages and volume oscillators</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="border border-zinc-900 p-3 bg-zinc-950/60">
                <div className="text-[10px] text-zinc-500">DAY RANGE</div>
                <div className="text-white font-bold mt-1">1.35 - 1.40</div>
              </div>
              <div className="border border-zinc-900 p-3 bg-zinc-950/60">
                <div className="text-[10px] text-zinc-500">52-WEEK RANGE</div>
                <div className="text-white font-bold mt-1">1.10 - 1.65</div>
              </div>
              <div className="border border-zinc-900 p-3 bg-zinc-950/60">
                <div className="text-[10px] text-zinc-500">DIVIDEND YIELD</div>
                <div className="text-white font-bold mt-1">12.4%</div>
              </div>
              <div className="border border-zinc-900 p-3 bg-zinc-950/60">
                <div className="text-[10px] text-zinc-500">P/E RATIO</div>
                <div className="text-white font-bold mt-1">6.2x</div>
              </div>
            </div>
          </div>

          {/* Ticker Table */}
          <div className="overflow-x-auto mb-12 border border-zinc-900 bg-[#0c0c0e]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-500 tracking-widest uppercase text-[10px] bg-zinc-950/60 font-mono">
                  <th className="text-left py-3.5 px-6">TICKER</th>
                  <th className="text-left py-3.5 pr-6">COMPANY</th>
                  <th className="text-right py-3.5 pr-6">PRICE (GH₵)</th>
                  <th className="text-right py-3.5 pr-6">CHANGE</th>
                  <th className="text-right py-3.5 px-6">SAMPLE VOLUME</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ticker: 'GCB', name: 'GCB Bank PLC', price: '5.20', chg: '+0.80%', vol: '124,000', up: true },
                  { ticker: 'MTNGH', name: 'Scancom PLC (MTN Ghana)', price: '1.38', chg: '-0.22%', vol: '980,000', up: false },
                  { ticker: 'TOTAL', name: 'TotalEnergies Marketing Ghana', price: '4.15', chg: '+0.12%', vol: '45,000', up: true },
                  { ticker: 'EGL', name: 'Enterprise Group PLC', price: '2.10', chg: '+0.05%', vol: '30,200', up: true },
                  { ticker: 'SIC', name: 'SIC Insurance Company PLC', price: '0.07', chg: '-0.01%', vol: '500,000', up: false },
                  { ticker: 'CAL', name: 'CalBank PLC', price: '0.82', chg: '+0.03%', vol: '210,000', up: true },
                  { ticker: 'GOIL', name: 'Ghana Oil Company PLC', price: '1.85', chg: '0.00%', vol: '65,000', up: true },
                  { ticker: 'SOGEGH', name: 'Societe Generale Ghana PLC', price: '1.15', chg: '+0.02%', vol: '18,400', up: true },
                ].map(r => (
                  <tr key={r.ticker} className="border-b border-zinc-900/80 hover:bg-blue-950/20 transition-colors cursor-pointer group">
                    <td className="py-4 px-6 font-bold text-blue-400 font-mono">{r.ticker}</td>
                    <td className="py-4 pr-6 text-zinc-300 group-hover:text-white transition-colors">{r.name}</td>
                    <td className="py-4 pr-6 text-right font-bold text-white font-mono">{r.price}</td>
                    <td className={`py-4 pr-6 text-right font-bold font-mono ${r.up ? 'text-blue-400' : 'text-zinc-500'}`}>{r.chg}</td>
                    <td className="py-4 px-6 text-right text-zinc-500 font-mono">{r.vol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between border border-zinc-800 bg-[#0c0c0e] p-8 gap-6">
            <div>
              <h4 className="font-general font-semibold text-lg text-white mb-1">New to market tickers and GSE data?</h4>
              <p className="text-zinc-400 text-xs">Read our step-by-step beginner guide explaining market orders, bids, and settlements.</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate('how-it-works')}
                className="border border-zinc-700 hover:border-white text-white text-xs font-mono font-bold px-5 py-3 transition-colors uppercase"
              >
                HOW IT WORKS →
              </button>
              <button
                onClick={() => onNavigate('download')}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold px-5 py-3 transition-colors uppercase"
              >
                GET THE APP
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ── 8.2 HOW IT WORKS ──────────────────────────────────
  if (page === 'how-it-works') {
    const steps = [
      {
        num: '01',
        title: 'Register with Ghana Card',
        desc: 'Create your trading account in under 3 minutes with instant digital KYC validation.',
        detail: 'Paperless identity verification using your National Identification Authority (NIA) Ghana Card.',
      },
      {
        num: '02',
        title: 'Deposit Funds via MoMo or Bank',
        desc: 'Fund your wallet with instant settlements via MTN Mobile Money, Telecel Cash, or direct bank wire.',
        detail: 'Direct custodial trust account allocation with instant credit balance updates.',
      },
      {
        num: '03',
        title: 'Explore the Market & Watchlists',
        desc: 'Browse all 33 GSE-listed companies with clean financial metrics, ratios, and dividend histories.',
        detail: 'Group your favorite securities into custom watchlists with automated change indicators.',
      },
      {
        num: '04',
        title: 'Set Price-Target Alerts',
        desc: 'Receive immediate push and SMS notifications when a stock reaches your entry or exit price.',
        detail: 'Trigger logic runs 24/7 on our low-latency market surveillance pipeline.',
      },
      {
        num: '05',
        title: 'Place an Order with Clear Status',
        desc: 'Execute market or limit orders with straightforward confirmation and real-time execution status.',
        detail: 'Direct order routing to GSE broker gateway with full audit traceability.',
      },
      {
        num: '06',
        title: 'Track Portfolio & Dividends',
        desc: 'Monitor capital appreciation, daily P&L, and dividend payouts credited directly to your account.',
        detail: 'Explainable accounting calculations back to specific execution timestamps and share quantities.',
      },
    ];

    return (
      <div className="w-full text-white font-jetbrains border-t border-zinc-900 mt-8 pt-12 pb-24 bg-[#070709]">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={false} />

          {/* Editorial numbered header */}
          <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_180px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-zinc-800">
            <span className="text-emerald-500 font-mono font-bold text-xs mt-1">02</span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">HOW IT WORKS</span>
            <div>
              <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                Six steps from zero<br />to your first trade.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[560px]">A paperless, mobile-first onboarding journey designed for retail investors in Ghana. Ghana Card KYC, instant MoMo funding, and direct GSE order routing in one app.</p>
            </div>
          </div>

          {/* Steps with editorial list style */}
          <div className="space-y-0 mb-16">
            {steps.map((s, i) => (
              <div key={s.num} className={`grid grid-cols-[56px_1fr] md:grid-cols-[80px_180px_1fr] gap-x-8 gap-y-2 py-8 ${i < steps.length - 1 ? 'border-b border-zinc-800' : ''}`}>
                <span className="text-emerald-500 font-mono font-bold text-xs mt-0.5">{s.num}</span>
                <h3 className="font-general font-semibold text-lg text-white hidden md:block">{s.title}</h3>
                <div>
                  <h3 className="font-general font-semibold text-lg text-white mb-2 md:hidden">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-2">{s.desc}</p>
                  <p className="text-zinc-600 text-xs font-mono">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Conversion CTA */}
          <div className="border border-emerald-900/40 bg-[#0c1a11] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">READY TO BEGIN?</div>
              <h3 className="font-general font-semibold text-2xl text-white">Open your account in under 3 minutes.</h3>
              <p className="text-zinc-400 text-xs mt-1">Have your Ghana Card ready for instant digital identity verification.</p>
            </div>
            <button
              onClick={() => onNavigate('download')}
              className="bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-bold px-8 py-3.5 uppercase tracking-wider transition-colors shrink-0"
            >
              GET THE APP NOW
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ── 8.3 SECURITY & TRUST ──────────────────────────────
  if (page === 'security') {
    return (
      <div className="w-full text-white font-jetbrains border-t border-zinc-900 mt-8 pt-12 pb-24 bg-[#070709]">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={false} />

          {/* Editorial numbered header */}
          <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_180px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-zinc-800">
            <span className="text-purple-500 font-mono font-bold text-xs mt-1">03</span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">SECURITY</span>
            <div>
              <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                Four layers between<br />you and any threat.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[560px]">TLS 1.3 transport encryption, biometric 2FA, statutory account segregation, and full Securities Industry Act 2016 (Act 929) compliance form the core of our security posture.</p>
            </div>
          </div>

          {/* 4-Layer Expanded Model */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border border-purple-900/40 bg-[#0c0c0e] p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-purple-400 font-bold">LAYER 01 // TRANSPORT</span>
                <Lock className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="font-general font-semibold text-xl text-white mb-3">Transport Security</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                All client interactions, API payloads, and market data streams pass exclusively through TLS 1.3 encrypted tunnels with automated certificate rotation.
              </p>
              <ul className="text-xs text-zinc-400 space-y-2 font-mono">
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> AES-256 GCM Payload Encryption</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> HSTS Enforced on all Subdomains</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> DDoS Shielding via AWS CloudFront</li>
              </ul>
            </div>

            <div className="border border-purple-900/40 bg-[#0c0c0e] p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-purple-400 font-bold">LAYER 02 // APPLICATION</span>
                <Shield className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="font-general font-semibold text-xl text-white mb-3">Application Defense</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Multi-factor authentication (2FA), biometric challenge checks on withdrawals, and rotating cryptographic session tokens prevent unauthorized access.
              </p>
              <ul className="text-xs text-zinc-400 space-y-2 font-mono">
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Biometric Face ID & Fingerprint auth</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Short-lived JWT with Hardware Binding</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Automated Suspicious Device Lockouts</li>
              </ul>
            </div>

            <div className="border border-purple-900/40 bg-[#0c0c0e] p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-purple-400 font-bold">LAYER 03 // DATA</span>
                <Database className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="font-general font-semibold text-xl text-white mb-3">Data Governance & Custody</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Client funds and shares are strictly segregated from Princeton Systems Ltd operational accounts per Bank of Ghana and SEC statutory directives.
              </p>
              <ul className="text-xs text-zinc-400 space-y-2 font-mono">
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Statutory Account Segregation</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Encrypted Database at Rest (AWS KMS)</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Zero Third-Party Advertising Data Sharing</li>
              </ul>
            </div>

            <div className="border border-purple-900/40 bg-[#0c0c0e] p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-purple-400 font-bold">LAYER 04 // COMPLIANCE</span>
                <Landmark className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="font-general font-semibold text-xl text-white mb-3">Regulatory Compliance</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Aligned with the Securities Industry Act, 2016 (Act 929) and anti-money laundering (AML) guidelines established by the Financial Intelligence Centre.
              </p>
              <ul className="text-xs text-zinc-400 space-y-2 font-mono">
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Securities Industry Act 2016 (Act 929)</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> AML / Counter-Terrorist Financing Rules</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Annual External Financial & Security Audits</li>
              </ul>
            </div>
          </div>

          {/* Compliance Readiness Notice */}
          <div className="border border-zinc-800 bg-[#0c0c0e] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-general font-semibold text-lg text-white mb-1">Want to learn more about our corporate background?</h4>
              <p className="text-zinc-400 text-xs">Review the Princeton Systems Ltd company page and licensing status.</p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors shrink-0"
            >
              ABOUT / COMPANY →
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ── 8.4 ABOUT / COMPANY ───────────────────────────────
  if (page === 'about') {
    return (
      <div className="w-full text-black font-jetbrains border-t border-zinc-200 mt-8 pt-12 pb-24" style={{ backgroundColor: '#e8e8e4' }}>
        <div className="max-w-[1536px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />

          {/* Editorial numbered header */}
          <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_200px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-black/10">
            <span className="text-black/40 font-mono font-bold text-xs mt-1">04</span>
            <span className="text-black/40 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">COMPANY</span>
            <div>
              <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                Building modern capital markets for West Africa.
              </h2>
              <p className="text-black/60 text-sm leading-relaxed max-w-[560px]">Princeton Systems Ltd is a financial technology firm founded in 2019, focused on democratising equity ownership across Ghana through transparent, mobile-first infrastructure.</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 mb-12">
            {[{val:'2019',label:'FOUNDED'},{val:'Accra',label:'HEADQUARTERS'},{val:'SEC Ghana',label:'REGULATORY SCOPE'},{val:'33 Listed',label:'GSE COVERAGE'}].map(s => (
              <div key={s.label} className="bg-[#e8e8e4] p-8 text-center">
                <div className="text-3xl font-bold font-general text-black mb-1">{s.val}</div>
                <div className="text-[10px] text-black/40 font-mono tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Three editorial feature sections */}
          {[
            { num: '01', label: 'CONTEXT', heading: '"Purpose-built for the Ghana Stock Exchange."', body: 'Princeton Systems Ltd designs high-availability trading infrastructure, direct market access pipelines, and clean mobile interfaces that connect retail and institutional investors to the GSE.' },
            { num: '02', label: 'ARCHITECTURE', heading: '"Broker-ready from day one."', body: 'Our platform is engineered for direct integration with licensed Ghanaian broker-dealers, enabling real-time order routing through the GSE Automated Trading System (ATS) using FIX 4.4/5.0 protocol.' },
            { num: '03', label: 'COMPLIANCE', heading: '"SEC Ghana aligned, not just compliant."', body: 'Every product decision is anchored to the Securities Industry Act 2016 (Act 929) and the Bank of Ghana client asset protection guidelines, ensuring statutory segregation of all client funds.' },
          ].map(f => (
            <div key={f.num} className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_200px_1fr] gap-x-8 gap-y-2 py-10 border-b border-black/10 last:border-b-0">
              <span className="text-black/30 font-mono font-bold text-xs mt-1">{f.num}</span>
              <span className="text-black/40 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">{f.label}</span>
              <div>
                <h3 className="font-general font-semibold text-2xl text-black leading-tight mb-3">{f.heading}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-black hover:bg-zinc-800 text-white text-xs font-mono font-bold px-8 py-4 uppercase transition-colors"
            >
              CONTACT MANAGEMENT
            </button>
            <button
              onClick={() => onNavigate('careers')}
              className="border border-black/30 hover:border-black text-black text-xs font-mono font-bold px-8 py-4 uppercase transition-colors"
            >
              CAREERS AT PRINCETON →
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ── 8.5 DOWNLOAD / GET THE APP ────────────────────────
  if (page === 'download') {
    return (
      <div className="w-full text-white font-jetbrains bg-[#070709] min-h-screen">
        <div className="flex flex-col md:flex-row">

          {/* Left sidebar: hidden on mobile, visible from md */}
          <aside className="hidden md:flex md:w-[200px] shrink-0 border-r border-zinc-800 flex-col justify-between px-5 py-10">
            <div>
              <PageBackButton onClick={() => onNavigate('home')} isLight={false} />
              <div className="mt-10">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">05 / GET THE APP</span>
              </div>
              <div className="mt-8">
                <div className="w-10 h-10 bg-[#c97b4b] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">EARLY ACCESS</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">IOS + ANDROID</div>
            </div>
          </aside>

          {/* Right main content */}
          <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12">

            {/* Back button for mobile only */}
            <div className="md:hidden mb-6">
              <PageBackButton onClick={() => onNavigate('home')} isLight={false} />
            </div>

            {/* Eyebrow + headline */}
            <div className="mb-8">
              <div className="text-[10px] font-mono text-[#c97b4b] uppercase tracking-widest font-bold mb-3">GHANA STOCK EXCHANGE // MOBILE TRADING</div>
              <h1 className="font-general font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-4">
                Trade Ghana's best<br />companies from your phone.
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[520px]">
                The Princeton Systems Ltd app puts the full GSE trading dashboard in your pocket. Ghana Card KYC in 3 minutes. Instant MoMo funding. Real-time order execution.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 mb-8">
              {[
                { label: 'KYC', value: 'GHANA CARD' },
                { label: 'PLATFORMS', value: 'iOS + ANDROID' },
                { label: 'DEPOSITS', value: 'MOMO + BANK' },
                { label: 'STATUS', value: 'EARLY ACCESS' },
              ].map(s => (
                <div key={s.label} className="bg-[#0c0c0e] px-4 py-3">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{s.label}</div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-white">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Waitlist form */}
            <div className="mb-3">
              <div className="text-[10px] font-mono text-[#c97b4b] uppercase tracking-widest font-bold mb-3">REGISTER FOR EARLY ACCESS</div>
              <form
                onSubmit={(e) => { e.preventDefault(); setWaitlistSuccess(true); }}
                className="flex flex-col sm:flex-row border border-zinc-700"
              >
                <div className="flex items-center px-4 flex-1 bg-[#0c0c0e]">
                  <span className="text-zinc-600 font-mono text-sm mr-2">&gt;</span>
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={e => setWaitlistEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-transparent text-sm text-white placeholder-zinc-600 outline-none font-mono flex-1 py-3"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#c97b4b] hover:bg-[#b06a3f] text-white text-xs font-mono font-bold px-6 py-3 uppercase tracking-widest transition-colors shrink-0"
                >
                  {waitlistSuccess ? 'REGISTERED ✓' : 'JOIN WAITLIST ›'}
                </button>
              </form>
              <p className="text-[10px] text-zinc-600 font-mono mt-2">
                Powered by Princeton Systems Ltd. 
                <span onClick={() => onNavigate('privacy')} className="text-zinc-400 underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

            {/* Store badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="border border-zinc-800 px-4 py-2.5 bg-[#0c0c0e] flex items-center gap-3 cursor-pointer hover:border-zinc-600 transition-colors">
                <Smartphone className="w-4 h-4 text-zinc-500" />
                <div>
                  <div className="text-[8px] text-zinc-600 font-mono uppercase">DOWNLOAD ON</div>
                  <div className="text-xs font-bold text-white font-mono">App Store</div>
                </div>
              </div>
              <div className="border border-zinc-800 px-4 py-2.5 bg-[#0c0c0e] flex items-center gap-3 cursor-pointer hover:border-zinc-600 transition-colors">
                <Smartphone className="w-4 h-4 text-zinc-500" />
                <div>
                  <div className="text-[8px] text-zinc-600 font-mono uppercase">GET IT ON</div>
                  <div className="text-xs font-bold text-white font-mono">Google Play</div>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    );
  }


  // ── 8.6 LEGAL PAGES (TERMS, PRIVACY, RISK DISCLOSURE) ─
  if (page === 'terms' || page === 'privacy' || page === 'risk-disclosure') {
    return (
      <div className="w-full text-black font-jetbrains border-t border-black/10 mt-8 pt-12 pb-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />

          <div className="flex items-center gap-4 mb-8 text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-black font-bold">LEGAL DOCUMENTATION</span>
            <span>PUBLISHED &amp; REGULATED</span>
          </div>

          {page === 'terms' && (
            <div className="space-y-8 text-zinc-600 text-xs sm:text-sm leading-relaxed">
              <h2 className="font-general font-bold text-2xl text-black">Terms of Service</h2>
              <p className="text-zinc-500 text-xs font-mono">Last Updated: August 2026 // Version 2.1</p>
              <div className="border-t border-black/10 pt-6 space-y-4">
                <h3 className="font-semibold text-black text-base">1. Agreement to Terms</h3>
                <p>By accessing or using the Princeton Systems Ltd web portal, applications, or API interfaces, you agree to be bound by these Terms of Service and all statutory provisions under Ghanaian law.</p>
                <h3 className="font-semibold text-black text-base">2. Eligibility &amp; Account Security</h3>
                <p>Users must be at least 18 years old and possess a valid National Identification Authority (NIA) Ghana Card to establish a trading account. Users are solely responsible for maintaining the confidentiality of their credentials and two-factor tokens.</p>
                <h3 className="font-semibold text-black text-base">3. Market Data &amp; Staging Notice</h3>
                <p>Market data presented on the marketing site is illustrative or delayed. Trading order execution operates through licensed broker-dealer counterparties regulated by the Securities and Exchange Commission (SEC) Ghana.</p>
              </div>
            </div>
          )}

          {page === 'privacy' && (
            <div className="space-y-8 text-zinc-600 text-xs sm:text-sm leading-relaxed">
              <h2 className="font-general font-bold text-2xl text-black">Privacy Policy</h2>
              <p className="text-zinc-500 text-xs font-mono">Last Updated: August 2026 // Compliance Scope: Data Protection Act, 2012 (Act 843)</p>
              <div className="border-t border-black/10 pt-6 space-y-4">
                <h3 className="font-semibold text-black text-base">1. Information We Collect</h3>
                <p>We collect personal information necessary to satisfy mandatory Know-Your-Customer (KYC) and Anti-Money Laundering (AML) statutory rules, including full legal name, national ID details, contact information, and device security identifiers.</p>
                <h3 className="font-semibold text-black text-base">2. Use and Protection of Data</h3>
                <p>Personal data is strictly used for identity verification, fraud prevention, and order settlement routing. Data at rest is encrypted using AES-256 keys managed in secure hardware modules.</p>
                <h3 className="font-semibold text-black text-base">3. No Third-Party Selling</h3>
                <p>Princeton Systems Ltd does not sell, lease, or monetize user personal or financial records to any third-party advertisers.</p>
              </div>
            </div>
          )}

          {page === 'risk-disclosure' && (
            <div className="space-y-8 text-zinc-600 text-xs sm:text-sm leading-relaxed">
              <div className="border border-red-200 bg-red-50 p-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-general font-bold text-xl text-black mb-2">Statutory Investment Risk Disclosure</h2>
                  <p className="text-red-600 text-xs">Required under Securities Industry Act, 2016 (Act 929) and SEC Ghana guidelines.</p>
                </div>
              </div>
              <div className="border-t border-black/10 pt-6 space-y-4">
                <h3 className="font-semibold text-black text-base">1. Capital at Risk</h3>
                <p>Trading in securities on the Ghana Stock Exchange involves substantial risk of loss. The value of shares and equities can fluctuate significantly based on company performance, macroeconomic conditions, and currency exchange rates. You may lose part or all of your invested capital.</p>
                <h3 className="font-semibold text-black text-base">2. No Guarantee of Returns</h3>
                <p>Past financial performance, historical dividend payouts, and chart indicators do not guarantee future returns. Investors should carefully consider their financial situation and risk tolerance before executing orders.</p>
                <h3 className="font-semibold text-black text-base">3. Market Liquidity Considerations</h3>
                <p>Certain GSE equities may experience periods of low trading volume, affecting the speed and pricing at which sell orders can be matched on the exchange.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // ── 8.7 HELP CENTRE / FAQ ─────────────────────────────
  if (page === 'faq') {
    const faqs = [
      {
        cat: 'getting-started',
        q: 'What do I need to open a trading account?',
        a: 'You need a valid Ghana Card issued by the National Identification Authority (NIA), an active mobile phone number, and a Mobile Money wallet or bank account in your legal name.',
      },
      {
        cat: 'getting-started',
        q: 'Is there a minimum deposit required?',
        a: 'No, Princeton Systems Ltd does not impose a mandatory minimum account balance. You can fund your wallet with as little as GH₵ 50 to purchase your first shares.',
      },
      {
        cat: 'markets',
        q: 'What are the Ghana Stock Exchange trading hours?',
        a: 'The GSE continuous trading session operates Monday through Friday from 10:00 AM to 3:00 PM GMT, excluding official Ghanaian public holidays.',
      },
      {
        cat: 'orders',
        q: 'What is the difference between a Market Order and a Limit Order?',
        a: 'A Market Order executes immediately at the best available current price on the exchange. A Limit Order executes only at your specified target price or better.',
      },
      {
        cat: 'fees',
        q: 'What brokerage and exchange fees apply?',
        a: 'Trading fees follow the statutory Ghana Stock Exchange and SEC fee schedule (brokerage commission, CSD levy, SEC fee, and GSE trading levy), transparently itemized prior to every order confirmation.',
      },
      {
        cat: 'security',
        q: 'How are my shares and deposits protected?',
        a: 'Client deposits are held in segregated custodian bank trust accounts. Equities are registered under your unique Central Securities Depository (CSD) account number.',
      },
    ];

    const filteredFaqs = faqs.filter(f => {
      const matchCat = activeFaqCategory === 'all' || f.cat === activeFaqCategory;
      const matchSearch = f.q.toLowerCase().includes(searchFaq.toLowerCase()) || f.a.toLowerCase().includes(searchFaq.toLowerCase());
      return matchCat && matchSearch;
    });

    return (
      <div className="w-full text-black font-jetbrains border-t border-black/10 mt-8 pt-12 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />

          <div className="flex items-center gap-4 mb-8 text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-black font-bold">HELP CENTRE</span>
            <span>SEARCHABLE SUPPORT</span>
          </div>

          <div className="mb-10">
            <input
              type="text"
              value={searchFaq}
              onChange={e => setSearchFaq(e.target.value)}
              placeholder="Search answers (e.g. Ghana Card, fees, trading hours, deposit)..."
              className="w-full bg-zinc-100 border border-black/20 text-sm text-black px-5 py-4 outline-none font-mono focus:border-black transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8 text-xs font-mono">
            {['all', 'getting-started', 'markets', 'orders', 'fees', 'security'].map(c => (
              <button
                key={c}
                onClick={() => setActiveFaqCategory(c)}
                className={`px-4 py-2 uppercase border transition-all ${
                  activeFaqCategory === c
                    ? 'border-black bg-black text-white font-bold'
                    : 'border-black/20 text-zinc-500 hover:border-black'
                }`}
              >
                {c.replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="space-y-4 mb-16">
            {filteredFaqs.map((f, i) => (
              <div key={i} className="border border-black/10 bg-zinc-50 p-6">
                <h4 className="font-general font-semibold text-base text-black mb-2">{f.q}</h4>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="border border-black/10 bg-zinc-50 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-general font-semibold text-lg text-black mb-1">Still have questions?</h4>
              <p className="text-zinc-500 text-xs">Reach out directly to our client support team in Accra.</p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-black hover:bg-zinc-800 text-white text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors shrink-0"
            >
              CONTACT SUPPORT →
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ── 8.8 CONTACT ───────────────────────────────────────
  if (page === 'contact') {
    return (
      <div className="w-full text-black font-jetbrains border-t border-black/10 mt-8 pt-12 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />

          <div className="flex items-center gap-4 mb-12 text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-black font-bold">CONTACT &amp; SUPPORT</span>
            <span>ACCRA DESK</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-general font-bold text-3xl text-black mb-3">Get in touch with our team.</h2>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  Whether you are an individual retail investor, institutional broker, or regulator, we are available to answer your questions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border border-black/10 bg-zinc-50 p-5 flex items-start gap-4">
                  <Mail className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase">SUPPORT &amp; INQUIRIES</div>
                    <div className="text-sm font-bold text-black mt-1">support@princetonsystemsltd.com</div>
                  </div>
                </div>

                <div className="border border-black/10 bg-zinc-50 p-5 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase">OFFICE HEADQUARTERS</div>
                    <div className="text-sm font-bold text-black mt-1">Accra Financial Centre, Greater Accra, Ghana</div>
                  </div>
                </div>

                <div className="border border-black/10 bg-zinc-50 p-5 flex items-start gap-4">
                  <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase">OPERATING HOURS</div>
                    <div className="text-sm font-bold text-black mt-1">Monday to Friday: 8:30 AM to 5:00 PM GMT</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black/10 bg-zinc-50 p-8">
              <h3 className="font-general font-semibold text-xl text-black mb-6">Send us a message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you. Your message has been received.');
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5">FULL LEGAL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Kwame Mensah"
                    className="w-full bg-white border border-black/20 text-xs text-black p-3 outline-none font-mono focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="kwame@domain.com"
                    className="w-full bg-white border border-black/20 text-xs text-black p-3 outline-none font-mono focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5">MESSAGE / INQUIRY</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you with trading, onboarding, or institutional integration?"
                    className="w-full bg-white border border-black/20 text-xs text-black p-3 outline-none font-mono focus:border-black transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-zinc-800 text-white text-xs font-mono font-bold py-3.5 uppercase transition-colors"
                >
                  SUBMIT MESSAGE
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ── 8.9 FOR DEVELOPERS ────────────────────────────────
  if (page === 'developers') {
    const devTools = [
      {
        icon: '⬡',
        iconBg: '#1a1a2e',
        iconColor: '#c97b4b',
        label: 'FIX PROTOCOL',
        title: 'FIX 4.4 / 5.0 Order Routing',
        desc: 'Direct Financial Information eXchange protocol connectivity to the GSE Automated Trading System.',
        badge: 'PRODUCTION',
      },
      {
        icon: '◈',
        iconBg: '#1a2e1a',
        iconColor: '#4ade80',
        label: 'STREAMING API',
        title: 'REST & WebSocket Market Data',
        desc: 'Real-time tick-level market depth, trade prints, and order book streaming via persistent WebSocket connections.',
        badge: 'LIVE',
      },
      {
        icon: '◎',
        iconBg: '#2e1a2e',
        iconColor: '#a78bfa',
        label: 'TESTING',
        title: 'GSE Sandbox Environment',
        desc: 'Simulated GSE matching engine with synthetic order flow for automated strategy backtesting and integration testing.',
        badge: 'BETA',
      },
      {
        icon: '⊞',
        iconBg: '#1a2430',
        iconColor: '#60a5fa',
        label: 'MANAGEMENT',
        title: 'Portfolio & Account API',
        desc: 'Programmatic access to positions, P&L, dividend records, transaction history, and custodian account management.',
        badge: 'EARLY ACCESS',
      },
    ];

    return (
      <div className="w-full text-white font-jetbrains bg-[#070709] min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 pt-8 md:pt-12 pb-24">
          <PageBackButton onClick={() => onNavigate('home')} isLight={false} />

          {/* Numbered section header */}
          <div className="flex items-center gap-6 mb-4 pt-4 md:pt-6">
            <span className="text-zinc-600 font-mono font-bold text-xs">09</span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">DEVELOPER TOOLS</span>
          </div>

          <div className="mb-10 md:mb-16 border-b border-zinc-800 pb-8 md:pb-12">
            <h1 className="font-general font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-4">
              APIs for the full<br className="hidden sm:block" /> GSE trading workflow.
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[480px]">
              Connect faster, check market data, and move from sandbox integration to production order routing.
            </p>
          </div>

          {/* Tool list */}
          <div className="space-y-0">
            {devTools.map((tool, i) => (
              <div
                key={i}
                className="flex items-start sm:items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-zinc-800 group cursor-pointer hover:bg-zinc-900/30 transition-colors px-2 -mx-2"
              >
                {/* Icon box */}
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center text-lg sm:text-xl font-bold mt-0.5 sm:mt-0"
                  style={{ backgroundColor: tool.iconBg, color: tool.iconColor }}
                >
                  {tool.icon}
                </div>

                {/* Label + title + desc */}
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-0.5">{tool.label}</div>
                  <div className="font-general font-semibold text-base sm:text-lg text-white mb-0.5">{tool.title}</div>
                  <div className="text-zinc-500 text-xs leading-relaxed hidden sm:block">{tool.desc}</div>
                </div>

                {/* Badge + arrow — badge hidden on very small screens */}
                <div className="shrink-0 flex items-center gap-2 sm:gap-4">
                  <span className="hidden xs:inline-block text-[8px] sm:text-[9px] font-mono font-bold px-2 py-1 border border-zinc-700 text-zinc-500 uppercase">{tool.badge}</span>
                  <span className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all text-base sm:text-lg">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Code sample */}
          <div className="mt-10 md:mt-16 border border-zinc-800 bg-[#0c0c0e] p-4 sm:p-6 font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 border-b border-zinc-800 pb-3 mb-5">
              <span>SAMPLE // WEBSOCKET TICK STREAM</span>
              <span className="text-[#c97b4b] font-bold">SANDBOX BETA</span>
            </div>
            <div className="text-zinc-400 text-[11px] leading-relaxed min-w-[280px]">
              <p className="text-zinc-600">// Connect to live GSE order stream</p>
              <p><span className="text-[#c97b4b]">const</span> stream = <span className="text-yellow-400">new</span> GSEMarketStream(&#123;</p>
              <p className="pl-4">apiKey: <span className="text-emerald-400">"psl_live_key_..."</span>,</p>
              <p className="pl-4">symbols: [<span className="text-emerald-400">"GCB"</span>, <span className="text-emerald-400">"MTNGH"</span>]</p>
              <p>&#125;);</p>
              <p>stream.on(<span className="text-emerald-400">'tick'</span>, data =&gt; &#123; <span className="text-zinc-600">/* handle */</span> &#125;);</p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800 text-[9px] text-zinc-600 uppercase tracking-widest">
              REQUEST API KEY →{' '}
              <span onClick={() => onNavigate('contact')} className="text-[#c97b4b] cursor-pointer underline">CONTACT INSTITUTIONAL DESK</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ── 8.10 BLOG / INSIGHTS ──────────────────────────────
  if (page === 'blog') {
    const changelog = [
      {
        tags: [{ label: 'APP', color: '#c97b4b' }, { label: 'MINOR', color: '#3f3f46' }],
        version: '2.4.1',
        date: '19 AUG 2026',
        type: 'IMPROVED',
        items: [
          'Waitlist: multi-step registration with Ghana Card pre-fill.',
          'Market dashboard: new compact card view with dividend yield.',
        ],
      },
      {
        tags: [{ label: 'PLATFORM', color: '#4ade80' }, { label: 'MAJOR', color: '#3f3f46' }],
        version: '2.4.0',
        date: '10 AUG 2026',
        type: 'ADDED',
        items: [
          'Watchlist: multi-group drag-to-reorder.',
          'Watchlist: auto axis detection for portrait vs landscape.',
          'Order history: RTL layout support.',
        ],
      },
      {
        tags: [{ label: 'API', color: '#60a5fa' }, { label: 'PATCH', color: '#3f3f46' }],
        version: '2.3.5',
        date: '02 AUG 2026',
        type: 'FIXED',
        items: [
          'WebSocket tick stream: reconnect on stale heartbeat.',
          'FIX 4.4: order reject message parsing edge case.',
        ],
      },
    ];

    const articles = [
      {
        tag: 'MARKET EDUCATION',
        title: 'How the Ghana Stock Exchange Works: A Beginner Guide',
        desc: 'Understand how shares are listed, how prices move on the trading floor, and why equity investing builds long-term wealth in West Africa.',
        date: 'AUGUST 19, 2026',
        author: 'PRINCETON RESEARCH',
        read: '5 min read',
        accentColor: '#c97b4b',
      },
      {
        tag: 'MACRO INSIGHTS',
        title: 'Inflation, Treasury Yields, and Dividend Equities in Ghana',
        desc: 'Comparing fixed income returns against dividend-paying blue-chip equities on the GSE during periods of high inflation.',
        date: 'AUGUST 12, 2026',
        author: 'PRINCETON RESEARCH',
        read: '8 min read',
        accentColor: '#4ade80',
      },
      {
        tag: 'PLATFORM UPDATES',
        title: 'Building Broker-Ready Direct Market Access Architecture',
        desc: 'A technical overview of our FIX 4.4/5.0 order routing pipeline and institutional custodian trust account integrations.',
        date: 'JULY 28, 2026',
        author: 'ENGINEERING TEAM',
        read: '6 min read',
        accentColor: '#a78bfa',
      },
    ];

    return (
      <div className="w-full text-white font-jetbrains bg-[#070709] min-h-screen">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10 pt-8 md:pt-12 pb-24">
          <PageBackButton onClick={() => onNavigate('home')} isLight={false} />

          {/* Two-column layout: stacks to single col on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-6 border border-zinc-800">

            {/* LEFT: CHANGELOG */}
            <div className="border-b md:border-b-0 md:border-r border-zinc-800">
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">CHANGELOG</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">⊞ RSS</span>
              </div>

              <div className="divide-y divide-zinc-800">
                {changelog.map((entry, i) => (
                  <div key={i} className="px-5 py-6">
                    <div className="flex items-center gap-2 mb-3">
                      {entry.tags.map(t => (
                        <span
                          key={t.label}
                          className="text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider"
                          style={{ backgroundColor: t.color, color: '#fff' }}
                        >{t.label}</span>
                      ))}
                    </div>
                    <div className="font-general font-bold text-3xl sm:text-4xl text-white mb-1 tabular-nums">{entry.version}</div>
                    <div
                      className="h-0.5 w-14 mb-3"
                      style={{ background: 'repeating-linear-gradient(90deg, #c97b4b 0, #c97b4b 4px, transparent 4px, transparent 8px)' }}
                    />
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{entry.date}</div>
                    <div className="text-[10px] font-mono text-[#c97b4b] uppercase font-bold mb-3">{entry.type}</div>
                    <ul className="space-y-1.5">
                      {entry.items.map((item, j) => (
                        <li key={j} className="text-xs text-zinc-400 flex items-start gap-2">
                          <span className="text-zinc-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: MAGAZINE */}
            <div>
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">MAGAZINE</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">⊞ RSS</span>
              </div>
              <div className="divide-y divide-zinc-800">
                {articles.map((a, i) => (
                  <div key={i} className="p-5 group cursor-pointer hover:bg-zinc-900/30 transition-colors">
                    <div
                      className="w-full h-20 sm:h-28 mb-4 flex items-end p-4"
                      style={{
                        background: `linear-gradient(135deg, ${a.accentColor}22 0%, ${a.accentColor}08 100%)`,
                        borderLeft: `3px solid ${a.accentColor}`,
                      }}
                    >
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest" style={{ color: a.accentColor }}>
                        {a.tag}
                      </span>
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex flex-wrap items-center gap-2">
                      <span style={{ color: a.accentColor }}>■</span>
                      <span>{a.tag}</span>
                      <span className="text-zinc-700">·</span>
                      <span>{a.date}</span>
                    </div>
                    <h3 className="font-general font-semibold text-base sm:text-lg text-white mb-2 group-hover:text-zinc-200 transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed mb-3">{a.desc}</p>
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-600 uppercase">
                      <span>{a.author}</span>
                      <span className="group-hover:translate-x-1 transition-transform text-zinc-400">{a.read} →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ── 8.11 CAREERS ──────────────────────────────────────
  if (page === 'careers') {
    const roles = [
      {
        title: 'Senior Backend Engineer (Go / AWS)',
        team: 'Trading Infrastructure',
        loc: 'Accra, Ghana // Hybrid',
      },
      {
        title: 'Mobile Engineer (Flutter / React Native)',
        team: 'Client Applications',
        loc: 'Accra, Ghana // Hybrid',
      },
      {
        title: 'Compliance & AML Officer',
        team: 'Legal & Risk',
        loc: 'Accra, Ghana // On-site',
      },
      {
        title: 'Financial Market Analyst',
        team: 'Research & Content',
        loc: 'Accra, Ghana // Hybrid',
      },
    ];

    return (
      <div className="w-full text-black font-jetbrains border-t border-black/10 mt-8 pt-12 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />

          <div className="flex items-center gap-4 mb-12 text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-black font-bold">CAREERS</span>
            <span>JOIN OUR TEAM IN ACCRA</span>
          </div>

          <div className="mb-12">
            <h2 className="font-general font-bold text-3xl text-black mb-4">
              Help build Ghana's modern capital market platform.
            </h2>
            <p className="text-zinc-500 text-sm max-w-[600px] leading-relaxed">
              We are assembling a passionate team of software engineers, compliance professionals, and financial analysts in Accra to empower millions of investors.
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {roles.map((r, i) => (
              <div key={i} className="border border-black/10 bg-zinc-50 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-black/30 transition-all">
                <div>
                  <h4 className="font-general font-semibold text-lg text-black mb-1">{r.title}</h4>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                    <span>{r.team}</span>
                    <span>•</span>
                    <span className="text-zinc-400">{r.loc}</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="border border-black hover:bg-black hover:text-white text-black text-xs font-mono font-bold px-5 py-2.5 uppercase transition-colors shrink-0"
                >
                  APPLY NOW →
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // ── INDIVIDUAL RETAIL TIER PAGE ────────────────────────
  if (page === 'individual') {
    return (
      <div className="w-full text-black font-jetbrains border-t border-black/10 mt-8 pt-12 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />
          <div className="flex items-center gap-4 mb-12 text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-[#c49a00] font-bold">RETAIL TIER // INDIVIDUAL TRADING</span>
            <span>ZERO MINIMUM BALANCE</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="font-general font-bold text-3xl sm:text-4xl text-black leading-tight mb-6">
                Start investing in Ghana's top companies from your phone.
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Designed for retail investors in Ghana. Complete fast, paperless KYC identity verification with your Ghana Card in under 3 minutes.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Deposit and withdraw instantly with MTN Mobile Money or Telecel Cash. Buy shares in GCB, MTN Ghana, TotalEnergies, Enterprise Group, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('download')}
                  className="bg-[#ffc506] hover:bg-yellow-400 text-black text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors"
                >
                  DOWNLOAD THE APP
                </button>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="border border-black/30 hover:border-black text-black text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors"
                >
                  SEE HOW IT WORKS →
                </button>
              </div>
            </div>

            <div className="border border-black/10 bg-zinc-50 p-8 space-y-4 font-mono text-xs">
              <div className="text-[10px] text-zinc-500 uppercase border-b border-black/10 pb-3 font-bold">
                INDIVIDUAL ACCOUNT SPECIFICATIONS
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-zinc-500">MINIMUM DEPOSIT:</span>
                <span className="text-[#c49a00] font-bold">GH₵ 0.00</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-zinc-500">KYC VERIFICATION:</span>
                <span className="text-black font-bold">Ghana Card (NIA) Instant</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-zinc-500">PAYMENT CHANNELS:</span>
                <span className="text-black font-bold">MTN MoMo, Telecel Cash, Bank</span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/10">
                <span className="text-zinc-500">SETTLEMENT TIMELINE:</span>
                <span className="text-black font-bold">Instant Wallet / GSE T+2 Equities</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-500">DIVIDEND PAYOUTS:</span>
                <span className="text-[#c49a00] font-bold">Automated Wallet Credit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── CORPORATE BROKERAGE TIER PAGE ─────────────────────
  if (page === 'corporate') {
    return (
      <div className="w-full text-black font-jetbrains border-t border-black/10 mt-8 pt-12 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />
          <div className="flex items-center gap-4 mb-12 text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-black font-bold">CORPORATE TIER // ENTITY &amp; SME BROKERAGE</span>
            <span>MULTI-SIGNATORY GOVERNANCE</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="font-general font-bold text-3xl sm:text-4xl text-black leading-tight mb-6">
                Institutional-grade treasury and equity management for companies.
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Tailored for Ghanaian registered businesses, family offices, NGOs, and trusts seeking returns in capital markets.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Equipped with dual-authorization approval workflows, dedicated account officers, and automated tax withholding statements for seamless auditing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-black hover:bg-zinc-800 text-white text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors"
                >
                  CONTACT CORPORATE DESK
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="border border-black/30 hover:border-black text-black text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors"
                >
                  ABOUT PRINCETON →
                </button>
              </div>
            </div>

            <div className="border border-black/10 bg-zinc-50 p-8 space-y-4 font-mono text-xs">
              <div className="text-[10px] text-zinc-500 uppercase border-b border-black/10 pb-3 font-bold">CORPORATE ACCOUNT FEATURES</div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">ACCOUNT TYPE:</span><span className="text-black font-bold">Corporate Entity / Trust</span></div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">SIGNATORY WORKFLOW:</span><span className="text-black font-bold">Dual / Multi-User Approvals</span></div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">RELATIONSHIP MANAGER:</span><span className="text-black font-bold">Dedicated Broker Officer</span></div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">TAX &amp; AUDIT REPORTS:</span><span className="text-black font-bold">Quarterly Consolidated Statements</span></div>
              <div className="flex justify-between py-2"><span className="text-zinc-500">DEPOSIT CHANNELS:</span><span className="text-black font-bold">Bank Wire / Electronic Transfer</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── INSTITUTIONAL & DMA TIER PAGE ─────────────────────
  if (page === 'institutional') {
    return (
      <div className="w-full text-black font-jetbrains border-t border-black/10 mt-8 pt-12 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <PageBackButton onClick={() => onNavigate('home')} isLight={true} />
          <div className="flex items-center gap-4 mb-12 text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-black font-bold">INSTITUTIONAL TIER // DIRECT MARKET ACCESS</span>
            <span>FIX 4.4 / 5.0 CONNECTIVITY</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="font-general font-bold text-3xl sm:text-4xl text-black leading-tight mb-6">
                Direct market execution for asset managers and funds.
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                High-throughput FIX and REST protocol order routing to the Ghana Stock Exchange Automated Trading System (ATS).
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Segregated custodian trust accounts, algorithmic order staging, block trades, and real-time tick-level depth streaming.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('developers')}
                  className="bg-black hover:bg-zinc-800 text-white text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors"
                >
                  VIEW API DOCUMENTATION
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="border border-black/30 hover:border-black text-black text-xs font-mono font-bold px-6 py-3.5 uppercase transition-colors"
                >
                  CONTACT INSTITUTIONAL DESK →
                </button>
              </div>
            </div>

            <div className="border border-black/10 bg-zinc-50 p-8 space-y-4 font-mono text-xs">
              <div className="text-[10px] text-zinc-500 uppercase border-b border-black/10 pb-3 font-bold">INSTITUTIONAL SPECIFICATIONS</div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">CONNECTIVITY PROTOCOL:</span><span className="text-black font-bold">FIX 4.4 / 5.0 &amp; WebSocket</span></div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">ORDER ROUTING:</span><span className="text-black font-bold">Direct to GSE ATS Engine</span></div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">LATENCY PROFILE:</span><span className="text-black font-bold">Sub-Millisecond Order Staging</span></div>
              <div className="flex justify-between py-2 border-b border-black/10"><span className="text-zinc-500">CUSTODIAN ACCOUNTS:</span><span className="text-black font-bold">Statutory Segregated Trust</span></div>
              <div className="flex justify-between py-2"><span className="text-zinc-500">ALGORITHMIC TRADING:</span><span className="text-black font-bold">VWAP, TWAP, Block Matching</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
