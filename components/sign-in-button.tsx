"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      onClick={() => signIn("apple")}
      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
    >
      <span aria-hidden></span>
      Continue with Apple
    </button>
  );
}
