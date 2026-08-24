import React, { useState } from 'react';
import { Shield, Lock, Landmark, FileCheck, Code2, HelpCircle, Smartphone } from 'lucide-react';
import { GetStartedButton, BrowseExamplesButton } from './AnimatedButtons';
import type { Page } from '../App';

interface FeaturesSectionProps {
  onNavigate: (page: Page) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onNavigate }) => {
  const [developerEmail, setDeveloperEmail] = useState('');
  const [developerSubmitted, setDeveloperSubmitted] = useState(false);

  return (
    <section className="w-full bg-[#070709] font-jetbrains text-white">

      {/* ── 7.3 Trust / Credibility Strip ── */}
      <div className="border-b border-zinc-900 bg-[#0c0c0e]">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] font-mono tracking-wider text-zinc-400">
            <div className="flex items-center gap-2.5">
              <svg className="w-3 h-3 text-emerald-400 shrink-0" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-emerald-400 font-semibold">SEC GHANA LICENSED</span>
              <span className="text-zinc-600 text-[10px]">· SECG-BR-0042-2024</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-blue-400 shrink-0" />
              <span>GSE MEMBER BROKER</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#ffc506] shrink-0" />
              <span>CLIENT FUNDS · CBG CUSTODIAN TRUST</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-purple-400 shrink-0" />
              <span>28 INDEPENDENCE AVE, ACCRA GH</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.4 Feature Section A — Market Data ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_200px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-zinc-900">
          <span className="text-[#3b82f6] font-mono font-bold text-xs mt-1">01</span>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">MARKETS</span>
          <div>
            <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-[46px] text-white leading-tight mb-5">
              "Real prices, real charts, no guesswork."
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[620px] mb-4">
              Access real-time tick data, daily volume prints, and historical candlestick charts for all 33 listed companies on the Ghana Stock Exchange.
            </p>
            <p className="text-zinc-450 text-sm leading-relaxed max-w-[620px] mb-8">
              Stay ahead with curated sector performance benchmarks, index breakdowns, and company quarterly disclosures.
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <GetStartedButton
                  text="SEE LIVE MARKETS"
                  bg="#2563eb"
                  textColor="#ffffff"
                  onClick={() => onNavigate('markets')}
                />
              </div>

            {/* Rendered GSE candlestick chart */}
              <div className="border border-zinc-800 bg-[#0c0c0e] p-4 flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-800 pb-2.5 mb-3">
                  <span className="text-white font-bold">GCB · Ghana Commercial Bank</span>
                  <span className="text-blue-400 font-bold">GH₵ 5.20 <span className="text-emerald-400 text-[9px]">+0.80%</span></span>
                </div>
                {/* SVG candlestick chart */}
                <div className="flex-1 px-1">
                  <svg width="100%" height="110" viewBox="0 0 280 110" preserveAspectRatio="none">
                    {/* Area fill */}
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25"/>
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,90 C20,85 30,70 50,65 C70,60 80,75 100,68 C120,62 130,50 150,45 C170,40 180,55 200,48 C220,42 240,30 260,22 L260,110 L0,110 Z" fill="url(#chartGrad)"/>
                    <path d="M0,90 C20,85 30,70 50,65 C70,60 80,75 100,68 C120,62 130,50 150,45 C170,40 180,55 200,48 C220,42 240,30 260,22" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round"/>
                    {/* Candles */}
                    {[
                      [20,75,68,10], [50,60,72,8], [80,65,75,12],
                      [110,48,62,10], [140,42,52,9], [170,40,53,11],
                      [200,36,50,8], [230,22,38,10], [260,18,30,8],
                    ].map(([x,y,bot,w],i) => (
                      <g key={i}>
                        <rect x={x - w/2} y={y} width={w} height={bot - y} fill={i % 3 === 1 ? '#ef4444' : '#3b82f6'} rx="1"/>
                        <line x1={x} y1={y - 4} x2={x} y2={y} stroke={i % 3 === 1 ? '#ef4444' : '#3b82f6'} strokeWidth="1"/>
                        <line x1={x} y1={bot} x2={x} y2={bot + 4} stroke={i % 3 === 1 ? '#ef4444' : '#3b82f6'} strokeWidth="1"/>
                      </g>
                    ))}
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-2 border-t border-zinc-800 mt-2">
                  <span>VOL: 1.2M · 52W: 4.60–5.85</span>
                  <span>GSE · DELAYED 15MIN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.5 Feature Section B — Watchlist & Alerts ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_200px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-zinc-900">
          <span className="text-emerald-400 font-mono font-bold text-xs mt-1">02</span>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">ALERTS</span>
          <div>
            <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-[46px] text-white leading-tight mb-5">
              "Stay informed without watching the screen all day."
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[620px] mb-4">
              Set custom price-target triggers, volume spike notices, and corporate dividend alerts.
            </p>
            <p className="text-zinc-450 text-sm leading-relaxed max-w-[620px] mb-8">
              Receive immediate push notifications when a security reaches your target valuation or when financial reports are published.
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <GetStartedButton
                  text="SET UP ALERTS IN APP"
                  bg="#10b981"
                  textColor="#000000"
                  onClick={() => onNavigate('download')}
                />
              </div>

                {/* Rendered watchlist with sparklines */}
              <div className="border border-zinc-800 bg-[#0c0c0e] p-4 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-800 pb-2.5 mb-3">
                  <span className="text-white font-bold">WATCHLIST</span>
                  <span className="text-emerald-400">4 ALERTS ACTIVE</span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  {[
                    { tick: 'MTNGH', price: '1.38', chg: '-0.22%', up: false, pts: [50,45,48,40,42,35,38,30] },
                    { tick: 'GCB',   price: '5.20', chg: '+0.80%', up: true,  pts: [30,28,35,32,40,38,45,50] },
                    { tick: 'TOTAL', price: '4.15', chg: '+0.12%', up: true,  pts: [35,33,38,36,42,40,44,46] },
                    { tick: 'SCB',   price: '18.40', chg: '+2.11%', up: true, pts: [20,25,22,30,28,35,38,42] },
                  ].map(r => (
                    <div key={r.tick} className="flex items-center justify-between bg-zinc-950 px-3 py-2">
                      <span className="text-white font-bold text-[10px] font-mono w-14 shrink-0">{r.tick}</span>
                      <svg width="44" height="16" viewBox="0 0 44 16" className="mx-2">
                        <polyline
                          points={r.pts.map((v,i) => `${i*6.5},${16 - v*0.28}`).join(' ')}
                          fill="none" stroke={r.up ? '#34d399' : '#f87171'} strokeWidth="1.3"
                          strokeLinejoin="round" strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-zinc-300 text-[10px] font-mono w-12 text-right">GH₵ {r.price}</span>
                      <span className={`text-[9px] font-mono font-bold w-12 text-right ${r.up ? 'text-emerald-400' : 'text-red-400'}`}>{r.chg}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[9px] font-mono text-zinc-600 pt-2 border-t border-zinc-800 mt-2">
                  SMS + PUSH ALERTS · AWS SNS / FIREBASE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.6 Feature Section C — Portfolio ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_200px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-zinc-900">
          <span className="text-[#a855f7] font-mono font-bold text-xs mt-1">03</span>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">PORTFOLIO</span>
          <div>
            <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-[46px] text-white leading-tight mb-5">
              "Know what you own and how it's performing."
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[620px] mb-4">
              Gain transparent, real-time insights into your total capital gain, dividend yield, and asset allocation across equities and treasury notes.
            </p>
            <p className="text-zinc-450 text-sm leading-relaxed max-w-[620px] mb-8">
              Every historical performance calculation is traceable and explainable back to specific trades, execution prices, and settlement dates.
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <GetStartedButton
                  text="EXPLORE PORTFOLIO TOOLS"
                  bg="#9333ea"
                  textColor="#ffffff"
                  onClick={() => onNavigate('how-it-works')}
                />
              </div>

              {/* Rendered portfolio donut + allocation */}
              <div className="border border-zinc-800 bg-[#0c0c0e] p-4 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-800 pb-2.5 mb-3">
                  <span className="text-white font-bold">MY PORTFOLIO</span>
                  <span className="text-purple-400 font-bold">+18.4% YTD</span>
                </div>
                <div className="flex items-center gap-5 flex-1">
                  {/* SVG donut */}
                  <svg width="80" height="80" viewBox="0 0 80 80" className="shrink-0">
                    {/* Equities 62% = 223.2deg */}
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#1e1e24" strokeWidth="14"/>
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#a855f7" strokeWidth="14"
                      strokeDasharray="117.3 71.5" strokeDashoffset="94.2" strokeLinecap="butt"/>
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#3b82f6" strokeWidth="14"
                      strokeDasharray="52.8 135.9" strokeDashoffset="-23.1" strokeLinecap="butt"/>
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#ffc506" strokeWidth="14"
                      strokeDasharray="18.8 169.9" strokeDashoffset="29.7" strokeLinecap="butt"/>
                    <text x="40" y="44" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">62%</text>
                  </svg>
                  <div className="flex flex-col gap-2 text-[10px] font-mono flex-1">
                    {[
                      { label: 'EQUITIES', pct: 62, color: '#a855f7' },
                      { label: 'T-BILLS',  pct: 28, color: '#3b82f6' },
                      { label: 'CASH',     pct: 10, color: '#ffc506' },
                    ].map(a => (
                      <div key={a.label}>
                        <div className="flex justify-between text-zinc-400 mb-1">
                          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full inline-block" style={{background: a.color}} />{a.label}</span>
                          <span className="text-white font-bold">{a.pct}%</span>
                        </div>
                        <div className="w-full bg-zinc-900 h-1.5">
                          <div className="h-1.5" style={{width: `${a.pct}%`, background: a.color}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-2 border-t border-zinc-800 mt-2">
                  <span>CAPITAL: GH₵ 48,250.00</span>
                  <span>DIV YIELD: 6.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.7 Feature Section D — Trading (Broker-Ready) ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_200px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-zinc-900">
          <span className="text-[#eab308] font-mono font-bold text-xs mt-1">04</span>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">TRADING</span>
          <div>
            <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-[46px] text-white leading-tight mb-5">
              "Built broker-ready."
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[620px] mb-4">
              Our architecture is engineered for direct integration with licensed Ghanaian broker-dealers and the GSE trading engine.
            </p>
            <p className="text-zinc-450 text-sm leading-relaxed max-w-[620px] mb-8">
              In private staging today with simulated order recording, transitioning to live statutory execution as broker authorizations conclude.
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <GetStartedButton
                  text="READ ARCHITECTURE STATUS"
                  bg="#eab308"
                  textColor="#000000"
                  onClick={() => onNavigate('security')}
                />
              </div>

              {/* Rendered order ticket */}
              <div className="border border-zinc-800 bg-[#0c0c0e] p-4 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-800 pb-2.5 mb-3">
                  <span className="text-white font-bold">PLACE ORDER</span>
                  <span className="text-amber-400 font-bold">BROKER-READY</span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  {/* Stock + order type */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-zinc-900 border border-zinc-700 px-3 py-2 text-[10px] font-mono text-white font-bold">GCB</div>
                    <div className="flex gap-1">
                      <button className="bg-amber-400 text-black text-[9px] font-mono font-bold px-3 py-2">LIMIT</button>
                      <button className="bg-zinc-900 border border-zinc-700 text-zinc-400 text-[9px] font-mono px-3 py-2">MARKET</button>
                    </div>
                  </div>
                  {/* Price + Qty */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="text-[9px] text-zinc-500 font-mono mb-1">PRICE (GH₵)</div>
                      <div className="bg-zinc-900 border border-zinc-700 px-3 py-2 text-[10px] font-mono text-white">5.20</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-[9px] text-zinc-500 font-mono mb-1">QUANTITY</div>
                      <div className="bg-zinc-900 border border-zinc-700 px-3 py-2 text-[10px] font-mono text-white">100</div>
                    </div>
                  </div>
                  {/* Estimated total */}
                  <div className="flex items-center justify-between bg-zinc-900/60 px-3 py-2 text-[9px] font-mono">
                    <span className="text-zinc-400">EST. TOTAL</span>
                    <span className="text-white font-bold">GH₵ 520.00</span>
                  </div>
                  <button className="w-full bg-amber-400 text-black text-[10px] font-mono font-bold py-2.5 mt-1">BUY ORDER →</button>
                </div>
                <div className="text-[9px] font-mono text-zinc-600 pt-2 border-t border-zinc-800 mt-2">
                  SEGREGATED CUSTODY · GSE ATS ROUTING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.8 Security 4-Layer Summary ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_200px_1fr] gap-x-8 gap-y-4 pb-12 mb-12 border-b border-zinc-900">
          <span className="text-purple-400 font-mono font-bold text-xs mt-1">05</span>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest hidden md:block mt-1">SECURITY</span>
          <div>
            <h2 className="font-general font-bold text-3xl sm:text-4xl lg:text-[46px] text-white leading-tight mb-5">
              "Four layers of bank-grade protection."
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[620px] mb-8">
              TLS 1.3 cryptographic tunnels, hardware-backed 2FA, segregated custodian trust accounts, and Securities Industry Act 2016 compliance.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { n: '01', title: 'Transport Layer', desc: 'TLS 1.3 cryptographic tunnels and AES-256 payload encryption.', icon: Lock },
                { n: '02', title: 'Application Layer', desc: 'Hardware-backed 2FA, biometric authentication, and session token rotation.', icon: Shield },
                { n: '03', title: 'Data Layer', desc: 'Encrypted databases at rest with statutory client account segregation.', icon: FileCheck },
                { n: '04', title: 'Compliance Layer', desc: 'Securities Industry Act 2016 (Act 929) and SEC Ghana regulatory alignment.', icon: Landmark },
              ].map(l => {
                const IconComp = l.icon;
                return (
                  <div key={l.n} className="border border-zinc-900 bg-[#0c0c0e] p-6 flex flex-col justify-between group hover:border-purple-900/60 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] text-purple-400 font-mono font-bold">{l.n}</span>
                        <IconComp className="w-4 h-4 text-purple-400/80 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <h3 className="font-general font-semibold text-lg text-white mb-2">{l.title}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">{l.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end">
              <BrowseExamplesButton
                text="VIEW FULL SECURITY ARCHITECTURE"
                accentColor="#a855f7"
                onClick={() => onNavigate('security')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.9 Support & 7.10 For Developers ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-16 border-b border-zinc-900">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Support Section */}
          <div className="border border-zinc-900 bg-[#0c0c0e] p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
                <span>SUPPORT & HELP</span>
              </div>
              <h3 className="font-general font-semibold text-2xl text-white mb-3">We're here for you.</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Have questions regarding account onboarding, Ghana Card KYC, or market timings? Our team in Accra is available to assist.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <BrowseExamplesButton
                text="HELP CENTRE / FAQ"
                accentColor="#3b82f6"
                onClick={() => onNavigate('faq')}
              />
              <BrowseExamplesButton
                text="CONTACT DESK"
                accentColor="#a1a1aa"
                onClick={() => onNavigate('contact')}
              />
            </div>
          </div>

          {/* For Developers */}
          <div className="border border-zinc-900 bg-[#0c0c0e] p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>FOR DEVELOPERS & BROKERS</span>
              </div>
              <h3 className="font-general font-semibold text-2xl text-white mb-3">GSE Market Data & Broker APIs.</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Programmatic FIX/REST protocol access for institutions, algorithmic traders, and fintech platforms.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDeveloperSubmitted(true);
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                value={developerEmail}
                onChange={e => setDeveloperEmail(e.target.value)}
                placeholder="developer@domain.com"
                className="bg-zinc-950 border border-zinc-800 text-xs text-white px-3 py-2.5 outline-none font-mono flex-1 min-w-0"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-mono font-bold px-4 py-2.5 uppercase transition-colors shrink-0"
              >
                {developerSubmitted ? 'REQUESTED ✓' : 'REQUEST API'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Regulatory Disclosure Band ── */}
      <div className="border-t border-zinc-900 bg-[#08080a]">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-[10px] font-mono text-zinc-500 leading-relaxed">
            <div>
              <div className="text-zinc-300 font-bold mb-2 uppercase tracking-widest">Regulatory Status</div>
              <p>Princeton Systems Ltd is licensed by the Securities and Exchange Commission Ghana under Licence No. <span className="text-zinc-300">SECG-BR-0042-2024</span> and is a member broker of the Ghana Stock Exchange (GSE).</p>
            </div>
            <div>
              <div className="text-zinc-300 font-bold mb-2 uppercase tracking-widest">Client Funds</div>
              <p>Client funds are held in segregated custodian accounts at <span className="text-zinc-300">Consolidated Bank Ghana (CBG)</span>, separate from company operating accounts, in accordance with Securities Industry Act, 2016 (Act 929).</p>
            </div>
            <div>
              <div className="text-zinc-300 font-bold mb-2 uppercase tracking-widest">Risk Warning</div>
              <p>Investing in securities involves risk. The value of investments can go down as well as up. Past performance is not a reliable indicator of future results. Capital at risk.</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ffc506] shrink-0" />
                <span>28 Independence Ave, Ridge, Accra — Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7.11 Final Call-to-Action Band ── */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-10 py-24">
        <div className="border border-zinc-800 bg-[#12141c] p-10 md:p-16 text-center flex flex-col items-center">
          <div className="text-[10px] font-mono tracking-widest text-[#ffc506] uppercase mb-4">
            JOIN THE NEXT GENERATION OF GHANAIAN INVESTORS
          </div>
          <h2 className="font-general font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-[700px] mb-6">
            Follow the market. Understand your money. Trade when you're ready.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-[520px] leading-relaxed mb-8">
            Download the mobile app or join our early access program to receive market briefings and live ticker updates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <GetStartedButton
              text="GET THE APP / JOIN WAITLIST"
              bg="#ffc506"
              textColor="#000000"
              onClick={() => onNavigate('download')}
            />
            <BrowseExamplesButton
              text="SEE HOW IT WORKS"
              accentColor="#ffc506"
              onClick={() => onNavigate('how-it-works')}
            />
          </div>

          {/* App Store & Google Play Badges Placeholder */}
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500">
            <div className="border border-zinc-800 px-4 py-2 bg-zinc-950/60 flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
              <span>[APP STORE BADGE PLACEHOLDER]</span>
            </div>
            <div className="border border-zinc-800 px-4 py-2 bg-zinc-950/60 flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
              <span>[GOOGLE PLAY BADGE PLACEHOLDER]</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
