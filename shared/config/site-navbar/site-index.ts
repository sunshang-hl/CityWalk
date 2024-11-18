// city-walk/shared/config/site-navbar/site-index.ts
import { enSharedNavbar } from './en'
import { zhSharedNavbar } from './zh'
import { deSharedNavbar } from './de'
// Import other language navbars as needed

// export const navbarData = {
//   en: enSharedNavbar,
//   zh: zhSharedNavbar,
//   // Add other languages here
//   de: deSharedNavbar,

export const getNavbarData = (language: string) => {
  const navbarData = {
    en: enSharedNavbar,
    zh: zhSharedNavbar,
    de: deSharedNavbar,
    // Add other languages here
  };

  return navbarData[language] || null;
}