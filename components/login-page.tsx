"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Login</h1>
        <div className="space-y-4">
          <button
            onClick={() => signIn("google")}
            className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("facebook")}
            className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
          >
            <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
