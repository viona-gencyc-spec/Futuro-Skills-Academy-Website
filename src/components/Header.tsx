import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/courses', label: t('nav.courses') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group"
          >
            <div className="w-44 h-26 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 bg-transparent flex items-center justify-center">
              <img
                src={theme === 'dark' ? "/assets/logo-2.png" : "/assets/logo.png"}
                alt="Futuro Skills Academy Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
              title={`Switch to ${language === 'en' ? 'French' : 'English'}`}
            >
              <div className="w-4 h-4 rounded-full overflow-hidden">
                {language === 'en' ? (
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="https://flagcdn.com/w20/fr.png"
                    alt="French"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/courses"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {t('home.hero.cta2')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-4 h-4 rounded-full overflow-hidden">
                    {language === 'en' ? (
                      <img
                        src="https://flagcdn.com/w20/gb.png"
                        alt="English"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="https://flagcdn.com/w20/fr.png"
                        alt="French"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {language.toUpperCase()}
                  </span>
                </button>
                
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  {theme === 'light' ? (
                    <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              </div>
              
              <Link
                to="/courses"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home.hero.cta2')}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;