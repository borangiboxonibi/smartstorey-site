import Link from "next/link";
export default function NotFound() {
  return <section className="page-hero"><div className="wrap"><p className="mono eyebrow">404</p><h1>This storey <span className="o">isn&apos;t built yet.</span></h1><div className="row"><Link className="btn" href="/">Back home</Link></div></div></section>;
}
