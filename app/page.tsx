import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { SignInPanel } from "../components/sign-in-panel";
import { SignOutButton } from "../components/sign-out-button";

const destinations = [
  {
    title: "Family Wiki",
    description: "Curated HTML notes hosted on the static site.",
    href: "/wiki",
    cta: "Open HTML Tab"
  },
  {
    title: "Home Assistant Kiosk",
    description: "Launch the home dashboard in kiosk mode.",
    href: "https://homeassistant.local:8123/kiosk",
    cta: "Go to Home Assistant"
  },
  {
    title: "iCloud Family Calendar",
    description: "View family events in the shared Apple Calendar.",
    href: "https://www.icloud.com/calendar/",
    cta: "Open iCloud"
  },
  {
    title: "Microsoft 365 Calendar",
    description: "Access the shared calendar for work and school.",
    href: "https://outlook.office.com/calendar/",
    cta: "Open Outlook"
  }
];

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <SignInPanel />;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-200">AppBoard</p>
        <h1 className="text-4xl font-semibold">Family Control Center</h1>
        <p className="text-lg text-slate-200">
          Welcome back, {session.user?.name ?? session.user?.email}! Launch your services
          from one secure hub.
        </p>
        <div className="flex justify-center">
          <SignOutButton />
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {destinations.map((destination) => (
          <article
            key={destination.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">{destination.title}</h2>
                <p className="text-sm text-slate-200">{destination.description}</p>
              </div>
              <Link
                href={destination.href}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                {destination.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
