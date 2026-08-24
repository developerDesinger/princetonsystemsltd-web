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

// Single consistent neutral for all pages — regulated fintech pattern.
// Brand colour lives in the hero card accent text, not the page background.
const PAGE_BG = '#f9f8f6'; // Barely-there warm white (Goldman, Morgan Stanley, Bamboo reference)

const THEME_BG: Record<Page, string> = {
  home:             PAGE_BG,
  markets:          PAGE_BG,
  'how-it-works':   PAGE_BG,
  security:         PAGE_BG,
  about:            PAGE_BG,
  download:         PAGE_BG,
  individual:       PAGE_BG,
  corporate:        PAGE_BG,
  institutional:    PAGE_BG,
  terms:            PAGE_BG,
  privacy:          PAGE_BG,
  'risk-disclosure':PAGE_BG,
  faq:              PAGE_BG,
  contact:          PAGE_BG,
  developers:       PAGE_BG,
  blog:             PAGE_BG,
  careers:          PAGE_BG,
};

const NAVBAR_TEXT: Record<Page, string> = {
  home:             '#0d0d0d',
  markets:          '#0d0d0d',
  'how-it-works':   '#0d0d0d',
  security:         '#0d0d0d',
  about:            '#0d0d0d',
  download:         '#0d0d0d',
  individual:       '#0d0d0d',
  corporate:        '#0d0d0d',
  institutional:    '#0d0d0d',
  terms:            '#0d0d0d',
  privacy:          '#0d0d0d',
  'risk-disclosure':'#0d0d0d',
  faq:              '#0d0d0d',
  contact:          '#0d0d0d',
  developers:       '#0d0d0d',
  blog:             '#0d0d0d',
  careers:          '#0d0d0d',
};

// Two-tone professional accent system:
//   #ffc506  — brand gold  (product, retail, CTA pages)
//   #0f2d52  — deep navy   (institutional, legal, compliance pages)
const ACCENT: Record<Page, string> = {
  home:             '#ffc506', // Brand gold — primary identity
  markets:          '#ffc506', // Brand gold — live data pages
  'how-it-works':   '#ffc506', // Brand gold — onboarding
  security:         '#0f2d52', // Deep navy — trust/compliance
  about:            '#0f2d52', // Deep navy — corporate
  download:         '#ffc506', // Brand gold — conversion
  individual:       '#ffc506', // Brand gold — retail
  corporate:        '#0f2d52', // Deep navy — corporate
  institutional:    '#0f2d52', // Deep navy — institutional
  terms:            '#0f2d52', // Deep navy — legal
  privacy:          '#0f2d52', // Deep navy — legal
  'risk-disclosure':'#0f2d52', // Deep navy — statutory
  faq:              '#0f2d52', // Deep navy — support
  contact:          '#0f2d52', // Deep navy — contact
  developers:       '#0f2d52', // Deep navy — technical
  blog:             '#ffc506', // Brand gold — content
  careers:          '#ffc506', // Brand gold — culture
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
  // All pages now use light/neutral backgrounds — text is always dark
  const isLightPage = true;

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
        navbarTextColor={NAVBAR_TEXT[currentPage] || '#0d0d0d'}
      />

      {/* Hero Section on top of the vibrant theme background */}
      <main className="relative z-10 max-w-[1536px] w-full mx-auto px-4 md:px-10 pt-28 md:pt-36 pb-12 flex items-start">
        <HeroCard page={currentPage} isExiting={isExiting} onNavigate={navigateTo} />
      </main>

      {/* Home feature strip */}
      {isHome && (
        <div className="relative z-10 border-t border-black/10 w-full overflow-hidden bg-[#ffc506]">
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
