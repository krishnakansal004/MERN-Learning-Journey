import React, { useState } from 'react'
import { Link } from 'react-router'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = { email, password }
    console.log('Login submitted', payload)
    // Add login API call or navigation logic here
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-lg">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Welcome back</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Sign in to your account</h1>
          <p className="mt-2 text-sm text-slate-400">Enter your email and password to continue.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="loginEmail" className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="loginEmail"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="loginPassword" className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              id="loginPassword"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-radial from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
          >
            Sign In
          </button>
          <p>Don't have an account? <Link to="/register">Click here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
