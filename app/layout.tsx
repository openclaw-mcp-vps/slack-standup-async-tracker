import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupTrack — Async Standup Tracker for Remote Teams',
  description: 'Automatically track when team members post standups in Slack, send reminders to late posters, and generate weekly participation reports.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0ae46d1e-79a2-4e57-a823-01765cd81fad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
