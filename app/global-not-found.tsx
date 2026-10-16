import type { Metadata } from "next";
import Link from "next/link";
import { RootDocument } from "./components/RootDocument";
import { PlayableRunner } from "./components/PlayableRunner";

export const metadata: Metadata = {
  title: "404 — Lost level | IMNOTAPAN",
  description: "This pixel scene could not be found.",
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <main id="main" className="not-found">
        <p className="kicker">Error 404 · Lost level</p>
        <h1>This pixel scene could not be found.</h1>
        <p>While you’re here, help the lab rat escape — then head back to the portfolio.</p>
        <PlayableRunner isSpanish={false} />
        <div className="button-row">
          <Link className="button button-primary" href="/#work">View the work</Link>
          <Link className="button button-ghost" href="/es">Ver en español</Link>
        </div>
      </main>
    </RootDocument>
  );
}
