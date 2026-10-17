import Link from "next/link";
import { services } from "../data/services";
import { copy } from "../lib/copy";
import { contactEmail, localePath, socialLinks, type Locale } from "../lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = localePath(locale, "/");

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">IMNOTAPAN</p>
          <p className="footer-note">Kevin Medina · {locale === "es" ? "Artista de pixel art y animador" : "Pixel artist & animator"} · {t.footer.location}</p>
          <a className="footer-mail" href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
        <nav aria-label={locale === "es" ? "Secciones" : "Sections"} className="footer-links">
          <Link href={`${home}#work`}>{t.nav.work}</Link>
          <Link href={`${home}#animation`}>{t.nav.animation}</Link>
          <Link href={`${home}#contact`}>{t.nav.contact}</Link>
          <Link href={localePath(locale, "/about")}>{t.nav.about}</Link>
          {services.map((service) => (
            <Link key={service.slug} href={localePath(locale, `/${service.slug}`)}>{service.name[locale]}</Link>
          ))}
        </nav>
        <nav aria-label={locale === "es" ? "Redes" : "Social"} className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer me">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
      <p className="footer-legal">© {new Date().getFullYear()} · {t.footer.rights}</p>
    </footer>
  );
}
