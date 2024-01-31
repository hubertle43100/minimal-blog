"use client";

import React, { useState } from "react";

const Newsletter = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    setState("loading");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
      }),
    });

    setState("ready");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Join our community</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
