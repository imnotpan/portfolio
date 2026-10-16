import Link from "next/link";
import { copy } from "../lib/copy";
import { localePath, type Locale } from "../lib/site";

type SiteHeaderProps = {
  locale: Locale;
  /** Same page in the other language. */
  alternatePath: string;
};

/** Four links fit on every screen, so there is no menu to open: contact is always one tap away. */
export function SiteHeader({ locale, alternatePath }: SiteHeaderProps) {
  const t = copy[locale].nav;
  const home = localePath(locale, "/");

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">{t.skip}</a>
      <Link className="brand" href={home}>
        <span className="brand-name">KEVIN MEDINA</span>
        <span className="brand-alias">aka IMNOTAPAN</span>
      </Link>

      <nav className="site-nav" aria-label="Main">
        <Link className="nav-work" href={`${home}#work`}>{t.work}</Link>
        <Link className="nav-anim" href={`${home}#animation`}>{t.animation}</Link>
        <Link href={localePath(locale, "/about")}>{t.about}</Link>
        <Link className="lang-link" href={alternatePath} hrefLang={locale === "en" ? "es" : "en"} lang={locale === "en" ? "es" : "en"}>
          <span aria-hidden="true">{t.languageShort}</span>
          <span className="sr-only">{t.language}</span>
        </Link>
        <Link className="nav-contact" href={`${home}#contact`}>{t.contact}</Link>
      </nav>
    </header>
  );
}
