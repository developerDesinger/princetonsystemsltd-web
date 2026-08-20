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
              <span className="w-1.5 h-1.5 bg-[#ffc506]" />
              <span>BUILT FOR GHANA STOCK EXCHANGE</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-emerald-400" />
              <span>BANK-GRADE SECURITY (2FA & AES-256)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-blue-400" />
              <span>OPERATED BY PRINCETON SYSTEMS LTD</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-purple-400" />
              <span>SEC GHANA REGULATORY ALIGNMENT</span>
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

              {/* Blank image / chart placeholder frame */}
              <div className="border border-zinc-900 bg-[#0c0c0e] p-6 flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900 pb-3">
                  <span>[STOCK DETAIL // CHART PREVIEW]</span>
                  <span className="text-blue-400">GCB: 5.20 (+0.80%)</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center my-4 text-center text-zinc-650 font-mono text-[10px]">
                  <div className="w-full h-24 border border-dashed border-zinc-900 flex items-center justify-center">
                    <span>[GSE CANDLESTICK CHART PLACEHOLDER]</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-3 border-t border-zinc-900">
                  <span>INDICATOR: RSI / MACD</span>
                  <span>DELAY: 15-MIN SAMPLE FEED</span>
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

              {/* Blank image / alert preview slot */}
              <div className="border border-zinc-900 bg-[#0c0c0e] p-6 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900 pb-3">
                  <span>[WATCHLIST & ALERT TRIGGER PREVIEW]</span>
                  <span className="text-emerald-400">ACTIVE ALERTS: 4</span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2.5 my-4">
                  <div className="border border-zinc-900 bg-zinc-950 p-3 flex items-center justify-between">
                    <div className="text-[11px] font-mono">
                      <span className="text-white font-bold">MTNGH</span>
                      <span className="text-zinc-500 text-[9px] ml-2">Target Price &ge; GH₵ 1.45</span>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-mono">SMS + PUSH</span>
                  </div>
                  <div className="border border-zinc-900 bg-zinc-950 p-3 flex items-center justify-between">
                    <div className="text-[11px] font-mono">
                      <span className="text-white font-bold">TOTAL</span>
                      <span className="text-zinc-500 text-[9px] ml-2">Dividend Declaration Announced</span>
                    </div>
                    <span className="text-[9px] text-blue-400 font-mono">PUSH</span>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-zinc-650 pt-3 border-t border-zinc-900">
                  NOTIFICATION ENGINE: AWS SNS & FIREBASE APNS
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

              {/* Blank image / portfolio preview slot */}
              <div className="border border-zinc-900 bg-[#0c0c0e] p-6 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900 pb-3">
                  <span>[PORTFOLIO PERFORMANCE]</span>
                  <span className="text-purple-400">+18.4% YTD</span>
                </div>
                <div className="my-4 text-center text-zinc-650 font-mono text-[10px] border border-dashed border-zinc-900 p-4">
                  <span>[PORTFOLIO ALLOCATION DOUGHNUT & TIMELINE MOCKUP]</span>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-3 border-t border-zinc-900">
                  <span>CAPITAL: GH₵ 48,250.00</span>
                  <span>DIVIDEND YIELD: 6.8%</span>
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

              {/* Blank image / DMA preview slot */}
              <div className="border border-zinc-900 bg-[#0c0c0e] p-6 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900 pb-3">
                  <span>[ORDER ROUTING & DMA ENGINE]</span>
                  <span className="text-amber-400">STAGE: BROKER-READY</span>
                </div>
                <div className="my-4 border border-dashed border-zinc-900 p-4 text-center text-zinc-650 font-mono text-[10px]">
                  <div className="text-white font-bold text-xs mb-1">Direct Market Access Protocol</div>
                  <p className="text-[9px] text-zinc-500">GSE Automated Trading System Integration</p>
                </div>
                <div className="text-[9px] font-mono text-zinc-650 pt-3 border-t border-zinc-900">
                  COMPLIANCE: SEGREGATED CLIENT CUSTODY
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
