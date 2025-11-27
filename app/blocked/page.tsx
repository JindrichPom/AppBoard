export default function Blocked() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 px-6 text-center text-white">
      <h1 className="text-4xl font-semibold">Access limited to Switzerland</h1>
      <p className="max-w-xl text-base text-slate-200">
        AppBoard is only available when you connect from Switzerland. If you are travelling,
        hop on the family VPN to regain access.
      </p>
    </main>
  );
}
