import Link from "next/link";

export default function NotFound() {
  return (
    <main className="portfolio-shell not-found-page">
      <section aria-labelledby="not-found-title">
        <p className="project-view-kicker">404</p>
        <h1 id="not-found-title">This pixel scene could not be found.</h1>
        <p>Return to the portfolio or get in touch about a new project.</p>
        <nav aria-label="404 navigation">
          <Link href="/#work">View work</Link>
          <Link href="/about">About</Link>
          <a href="mailto:imnotapan@gmail.com?subject=Project%20inquiry">Start a project</a>
        </nav>
      </section>
    </main>
  );
}
