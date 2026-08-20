import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCard } from './components/HeroCard';
import { FeaturesSection } from './components/FeaturesSection';
import { SubpageContent } from './components/SubpageContent';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';


export type Page =
  | 'home'
  | 'markets'
  | 'how-it-works'
  | 'security'
  | 'about'
  | 'download'
  | 'individual'
  | 'corporate'
  | 'institutional'
  | 'terms'
  | 'privacy'
  | 'risk-disclosure'
  | 'faq'
  | 'contact'
  | 'developers'
  | 'blog'
  | 'careers';

// Vibrant theme color behind the hero section and on the navbar
const THEME_BG: Record<Page, string> = {
  home:             '#ffc506', // Yellow
  markets:          '#1d4ed8', // Blue
  'how-it-works':   '#15803d', // Green
  security:         '#7c3aed', // Purple
  about:            '#e8e8e4', // Light gray
  download:         '#f5e6d3', // Cream peach
  // Non-navbar pages: white
  individual:       '#ffffff',
  corporate:        '#ffffff',
  institutional:    '#ffffff',
  terms:            '#ffffff',
  privacy:          '#ffffff',
  'risk-disclosure':'#ffffff',
  faq:              '#ffffff',
  contact:          '#ffffff',
  developers:       '#ffffff',
  blog:             '#ffffff',
  careers:          '#ffffff',
};

const NAVBAR_TEXT: Record<Page, string> = {
  home:             '#000000',
  markets:          '#000000',
  'how-it-works':   '#000000',
  security:         '#000000',
  about:            '#000000',
  download:         '#000000',
  individual:       '#000000',
  corporate:        '#000000',
  institutional:    '#000000',
  terms:            '#000000',
  privacy:          '#000000',
  'risk-disclosure':'#000000',
  faq:              '#000000',
  contact:          '#000000',
  developers:       '#000000',
  blog:             '#000000',
  careers:          '#000000',
};

// Accents passed to footer and highlights
const ACCENT: Record<Page, string> = {
  home:             '#ffc506',
  markets:          '#1d4ed8',
  'how-it-works':   '#15803d',
  security:         '#7c3aed',
  about:            '#18181b',
  download:         '#c97b4b', // Warm terracotta accent
  individual:       '#ffc506',
  corporate:        '#22c55e',
  institutional:    '#3b82f6',
  terms:            '#18181b',
  privacy:          '#18181b',
  'risk-disclosure':'#ef4444',
  faq:              '#1d4ed8',
  contact:          '#18181b',
  developers:       '#3b82f6',
  blog:             '#1d4ed8',
  careers:          '#22c55e',
};

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage]   = useState<Page>('home');
  const [isExiting, setIsExiting]       = useState(false);

  // Sync state with hash routing & Global Ctrl+K / Cmd+K search shortcut
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash;
      const hash = rawHash.replace('#', '').replace('/', '');
      const validPages: Page[] = [
        'home', 'markets', 'how-it-works', 'security', 'about', 'download',
        'individual', 'corporate', 'institutional', 'terms', 'privacy',
        'risk-disclosure', 'faq', 'contact', 'developers', 'blog', 'careers'
      ];
      
      let targetPage: Page = 'home';
      if (validPages.includes(hash as Page)) {
        targetPage = hash as Page;
      }

      setCurrentPage(prev => {
        if (prev !== targetPage) {
          return targetPage;
        }
        return prev;
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger initial check
    handleHashChange();

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigateTo = (page: Page) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsExiting(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.location.hash = page === 'home' ? '/' : `/${page}`;
      setIsExiting(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 380);
  };

  const isHome = currentPage === 'home';
  const currentThemeColor = THEME_BG[currentPage] || '#ffc506';
  // Pages with white/light background need inverted text defaults
  const isLightPage = currentThemeColor === '#ffffff' || currentThemeColor === '#e8e8e4' || currentThemeColor === '#f5e6d3';

  return (
    <div
      className={`relative min-h-screen font-jetbrains overflow-x-hidden flex flex-col selection:bg-black selection:text-[#ffc506] transition-colors duration-500 ${isLightPage ? 'text-black' : 'text-white'}`}
      style={{ backgroundColor: currentThemeColor }}
    >
      {/* Navbar with matching theme background */}
      <Navbar
        onSearchTrigger={() => setIsSearchOpen(true)}
        onNavigate={navigateTo}
        currentPage={currentPage}
        navbarBg={currentThemeColor}
        navbarTextColor={NAVBAR_TEXT[currentPage] || '#000000'}
      />

      {/* Hero Section on top of the vibrant theme background */}
      <main className="relative z-10 max-w-[1536px] w-full mx-auto px-4 md:px-10 pt-28 md:pt-36 pb-12 flex items-start">
        <HeroCard page={currentPage} isExiting={isExiting} onNavigate={navigateTo} />
      </main>

      {/* Home feature strip */}
      {isHome && (
        <div className="relative z-10 border-t border-black/15 w-full overflow-hidden bg-[#ffc506]">
          <div className="max-w-[1536px] mx-auto px-4 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/15">
              {[
                { label: 'ZERO MINIMUM BALANCE', sub: 'Start with any amount' },
                { label: 'INSTANT MOMO DEPOSITS', sub: 'MTN MoMo & Telecel Cash' },
                { label: 'GHANA CARD KYC', sub: 'Paperless in under 3 min' },
                { label: 'DIRECT GSE ACCESS', sub: 'All 33 listed equities' },
              ].map((f, i) => (
                <div key={i} className="py-4 px-6 flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold font-jetbrains tracking-widest uppercase text-black">{f.label}</span>
                  <span className="text-[10px] font-jetbrains text-black/60 uppercase tracking-wide">{f.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content body retains the sleek dark gray base (#070709) */}
      {isHome ? (
        <FeaturesSection onNavigate={navigateTo} />
      ) : (
        <SubpageContent page={currentPage} onNavigate={navigateTo} />
      )}

      {/* Footer matching page accent and with all routing links */}
      <Footer accentColor={ACCENT[currentPage] || '#3b82f6'} onNavigate={navigateTo} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        accentColor={ACCENT[currentPage] || '#ffc506'}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
