export default function AidedByMemoryMap() {
  const memories = [
    {
      title: "Cubao Under Rain",
      location: "Cubao, Quezon City",
      time: "October 2024 · 8:42 PM",
      emotion: "uncertainty",
      weather: "Light Rain · 24°C",
      song: "Longing For — Ourselves the Elves",
      reflection:
        "You revisited this area often during periods of uncertainty.",
      x: "28%",
      y: "44%",
    },
    {
      title: "Makati Night Commute",
      location: "Ayala Avenue",
      time: "January 2025 · 10:17 PM",
      emotion: "drift",
      weather: "Humid Night · 27°C",
      song: "Old Playlist #14",
      reflection:
        "Your nighttime walks increased during your transition into corporate work.",
      x: "62%",
      y: "58%",
    },
    {
      title: "Taft Avenue Window Seat",
      location: "LRT-1 Southbound",
      time: "July 2023 · 6:13 PM",
      emotion: "longing",
      weather: "Overcast · 29°C",
      song: "Transit Mix",
      reflection:
        "Rain appears repeatedly in memories connected to transition.",
      x: "74%",
      y: "32%",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-200 overflow-hidden relative font-sans">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(60,60,90,0.35),transparent_50%)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl">
        <div>
          <h1 className="text-2xl tracking-[0.3em] uppercase text-zinc-100">
            Aided by Memory Map
          </h1>
          <p className="text-sm text-zinc-500 mt-1 italic">
            wherever you go, there you are
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest">
          <span>Longing Mode</span>
          <span>Archive</span>
          <span>Reconstructed Evenings</span>
        </div>
      </header>

      {/* Main Layout */}
      <div className="relative z-10 grid grid-cols-12 h-[calc(100vh-89px)]">
        {/* Sidebar */}
        <aside className="col-span-3 border-r border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 overflow-y-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
              Emotional Era
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-lg text-zinc-100 mb-1">
                Corporate Dissociation Era
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                The period where nighttime commutes became emotional processing.
                Rain, transit stations, and old playlists recur frequently.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
              Timeline
            </p>

            <div className="space-y-3">
              {[
                "University Drift Era · 2021",
                "Leaving Home Era · 2022",
                "Late Commute Era · 2024",
                "Healing Slowly Era · 2025",
              ].map((era) => (
                <div
                  key={era}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.05] transition"
                >
                  <p className="text-sm text-zinc-300">{era}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
              AI Reflection
            </p>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5">
              <p className="text-sm leading-relaxed text-zinc-300 italic">
                “You associate rainfall with emotional processing. Most of your
                significant memories occur during transit or movement.”
              </p>
            </div>
          </div>
        </aside>

        {/* Map Area */}
        <main className="col-span-6 relative overflow-hidden bg-[#06070a]">
          {/* Simulated Map Grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* Transit Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40">
            <path
              d="M120 200 C 280 300, 450 120, 600 340"
              stroke="rgba(180,180,255,0.3)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M250 500 C 350 400, 500 420, 700 200"
              stroke="rgba(120,160,255,0.2)"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Memory Pins */}
          {memories.map((memory) => (
            <div
              key={memory.title}
              className="absolute group"
              style={{ left: memory.x, top: memory.y }}
            >
              <div className="relative flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(180,200,255,0.9)] animate-pulse" />

                <div className="mt-3 opacity-0 group-hover:opacity-100 transition duration-300 w-72 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl p-5 shadow-2xl">
                  <div className="mb-3">
                    <h3 className="text-zinc-100 text-lg">{memory.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                      {memory.location}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-zinc-400">
                    <p>{memory.time}</p>
                    <p>{memory.weather}</p>
                    <p>{memory.song}</p>
                  </div>

                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="italic text-zinc-300 text-sm leading-relaxed">
                      “{memory.reflection}”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
              <span>Timeline Navigation</span>
              <span>2019 — 2026</span>
            </div>

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[68%] bg-gradient-to-r from-blue-200/60 to-zinc-500/50 rounded-full" />
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <section className="col-span-3 bg-white/[0.03] backdrop-blur-xl border-l border-white/10 p-6 overflow-y-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
              Reconstructed Evening
            </p>

            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950">
              <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

              <div className="p-5">
                <div className="flex items-center justify-between mb-4 text-xs uppercase tracking-widest text-zinc-500">
                  <span>October 14, 2024</span>
                  <span>8:42 PM</span>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
                  <p>
                    You left the office at 8:42 PM. It was raining lightly.
                    You replayed the same song three times during the commute.
                  </p>

                  <p>
                    Your camera roll contains blurred train window photos and a
                    screenshot of a conversation you never revisited.
                  </p>

                  <p className="italic text-zinc-400">
                    “This evening appears repeatedly in memories connected to
                    uncertainty and emotional transition.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
              Attached Artifacts
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden"
                >
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
