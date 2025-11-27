import { SignInButton } from "./sign-in-button";

export function SignInPanel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 py-16 text-center text-white">
      <div className="max-w-lg space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-200">AppBoard</p>
        <h1 className="text-4xl font-semibold">Family Access Only</h1>
        <p className="text-base text-slate-200">
          Sign in with your Apple ID to open the private family launchpad. Only allowlisted
          accounts can authenticate and every session stays within Switzerland via edge
          geofencing.
        </p>
      </div>
      <SignInButton />
    </main>
  );
}
