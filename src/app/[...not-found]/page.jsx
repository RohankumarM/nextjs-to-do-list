import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="ext-3xl">There was a problem.</h2>
      <p>We could not find what you were looking for.</p>
      <p>
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </main>
  );
}
