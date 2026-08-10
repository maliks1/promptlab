"use client";

import { useState } from "react";

const MODELS = ["gemini-3.5-flash-lite", "gemini-2.0-flash", "gemini-2.5-pro"];
const CONTOH = "buatkan caption jualan kopi";

// Custom SVG Icons
const SparklesIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const KeyIcon = () => (
  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m-5 4a5 5 0 01-10 0 5 5 0 0110 0zm0 0l2 2m0 0l2-2m-2 2v-4m-2 2h.01" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
  </svg>
);

export default function Home() {
  const [tab, setTab] = useState("improve");
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [model, setModel] = useState(MODELS[0]);
  const [temperature, setTemperature] = useState(0.7);

  // Responsive mobile states
  const [showMobileSettings, setShowMobileSettings] = useState(false);

  // Tab Improver States
  const [raw, setRaw] = useState("");
  const [clean, setClean] = useState("");
  const [notes, setNotes] = useState("");
  const [loadingImp, setLoadingImp] = useState(false);
  const [errImp, setErrImp] = useState("");

  // Tab Comparator States
  const [pa, setPa] = useState("");
  const [pb, setPb] = useState("");
  const [test, setTest] = useState("");
  const [outA, setOutA] = useState("");
  const [outB, setOutB] = useState("");
  const [loadingCmp, setLoadingCmp] = useState(false);
  const [errCmp, setErrCmp] = useState("");

  // Global Copied States
  const [copiedStates, setCopiedStates] = useState({
    clean: false,
    outA: false,
    outB: false,
    pa: false,
    pb: false
  });

  const triggerCopy = (text, key) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  async function improve() {
    setErrImp("");
    if (!raw.trim()) return setErrImp("Isi prompt mentah terlebih dahulu.");
    setLoadingImp(true);
    try {
      const res = await fetch("/api/improve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: raw, apiKey, model, temperature }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      // Split cleanly
      const parts = data.result.split("## Catatan Perubahan");
      setClean((parts[0] || "").trim());
      setNotes((parts[1] || "").trim());
    } catch (e) {
      setErrImp(e.message);
    } finally {
      setLoadingImp(false);
    }
  }

  async function compare() {
    setErrCmp("");
    if (!pa.trim() || !pb.trim()) return setErrCmp("Isi Prompt A dan Prompt B.");
    setLoadingCmp(true);
    try {
      const suffix = test.trim() ? "\n\nInput user:\n" + test : "";
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: pa + suffix, b: pb + suffix, apiKey, model, temperature }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setOutA(data.a);
      setOutB(data.b);
    } catch (e) {
      setErrCmp(e.message);
    } finally {
      setLoadingCmp(false);
    }
  }

  const words = (s) => (s ? s.trim().split(/\s+/).filter(Boolean).length : 0);
  const chars = (s) => (s ? s.length : 0);

  // Helper to color temperature level descriptions
  const getTempDesc = (val) => {
    if (val <= 0.3) return { label: "Fokus / Konsisten", color: "text-blue-400" };
    if (val <= 0.8) return { label: "Seimbang / Standar", color: "text-indigo-400" };
    return { label: "Kreatif / Imajinatif", color: "text-amber-400" };
  };

  // Parsing markdown list notes to bullet cards
  const renderNotes = (notesText) => {
    if (!notesText) return null;
    const lines = notesText
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    return (
      <div className="space-y-2">
        {lines.map((line, idx) => {
          const cleanLine = line.replace(/^[-*+•]|^[0-9]+\.\s*/, "").trim();
          return (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
            >
              <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-bold">
                ✓
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">{cleanLine}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col lg:flex-row relative font-sans antialiased">
      
      {/* SIDEBAR */}
      <aside className="w-full lg:w-80 bg-zinc-900 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col lg:fixed lg:inset-y-0 lg:left-0 z-30">
        
        {/* Sidebar Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧪</span>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
                PromptLab
              </h1>
              <p className="text-[10px] text-zinc-500 font-medium">Prompt Engineering Workbench</p>
            </div>
          </div>
          {/* Mobile settings toggle */}
          <button
            onClick={() => setShowMobileSettings(!showMobileSettings)}
            className="lg:hidden p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 cursor-pointer"
            title="Toggle Settings"
          >
            <SettingsIcon />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="p-4 flex flex-row lg:flex-col gap-1.5 border-b lg:border-b-0 border-zinc-800 overflow-x-auto lg:overflow-x-visible">
          <button
            onClick={() => setTab("improve")}
            className={`flex items-center justify-center lg:justify-start px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex-1 lg:flex-none ${
              tab === "improve"
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/35 border border-indigo-500/20"
                : "bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 border border-transparent"
            }`}
          >
            <SparklesIcon />
            Improver
          </button>
          <button
            onClick={() => setTab("compare")}
            className={`flex items-center justify-center lg:justify-start px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex-1 lg:flex-none ${
              tab === "compare"
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/35 border border-indigo-500/20"
                : "bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 border border-transparent"
            }`}
          >
            <ScaleIcon />
            A/B Comparator
          </button>
        </div>

        {/* Configurations - Sidebar Main (Desktop) */}
        <div className="p-5 flex-1 flex-col gap-5 overflow-y-auto hidden lg:flex">
          <div className="flex items-center gap-1.5 text-zinc-400 uppercase tracking-widest text-[10px] font-bold">
            <span>⚙️</span>
            <span>Konfigurasi API</span>
          </div>

          {/* API Key */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-medium">Gemini API Key</span>
              <a
                className="text-[10px] text-indigo-400 hover:underline hover:text-indigo-300 flex items-center gap-0.5"
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noreferrer"
              >
                Dapatkan Key
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <KeyIcon />
              </span>
              <input
                type={showApiKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full text-xs rounded-lg bg-zinc-950 border border-zinc-800 pl-9 pr-8 py-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1.5 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-zinc-500 hover:text-zinc-300 cursor-pointer"
              >
                {showApiKey ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <p className="text-[10px] text-zinc-500 italic leading-relaxed">
              {apiKey ? "✓ API Key kustom aktif." : "Menggunakan default API Key server jika tersedia."}
            </p>
          </div>

          {/* Model */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-zinc-400">Pilih Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full text-xs rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2 text-zinc-200 focus:outline-none focus:ring-1.5 focus:ring-indigo-500 transition-all cursor-pointer"
            >
              {MODELS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Temperature */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-zinc-400">Suhu (Temperature)</span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-bold font-mono text-indigo-400">
                {temperature.toFixed(1)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1.5"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-zinc-500">
              <span className={getTempDesc(temperature).label === "Fokus / Konsisten" ? "text-blue-400 font-medium" : ""}>0.0</span>
              <span className={getTempDesc(temperature).label === "Seimbang / Standar" ? "text-indigo-400 font-medium" : ""}>0.7</span>
              <span className={getTempDesc(temperature).label === "Kreatif / Imajinatif" ? "text-amber-400 font-medium" : ""}>1.5</span>
            </div>
            <div className="p-2 rounded bg-zinc-950/60 border border-zinc-900 text-center">
              <span className={`text-[10px] font-semibold tracking-wide ${getTempDesc(temperature).color}`}>
                {getTempDesc(temperature).label}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Settings Drawer Overlay */}
        {showMobileSettings && (
          <div className="p-5 flex flex-col gap-4 bg-zinc-900 border-t border-zinc-800 lg:hidden">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Konfigurasi API</h3>
              <button
                onClick={() => setShowMobileSettings(false)}
                className="text-[10px] text-zinc-500 hover:text-white underline cursor-pointer"
              >
                Tutup
              </button>
            </div>

            {/* Mobile API Key */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Gemini API Key</span>
              </div>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full text-xs rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2 text-zinc-100"
              />
            </div>

            {/* Mobile Model */}
            <div className="space-y-1">
              <label className="text-xs text-zinc-400">Pilih Model</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full text-xs rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2"
              >
                {MODELS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Temperature */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Temperature: {temperature}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1.5"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>
          </div>
        )}

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-zinc-800 mt-auto hidden lg:block bg-zinc-900/30 text-center">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-950 border border-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-zinc-400 font-medium">Ready Workspace</span>
          </div>
          <p className="text-[9px] text-zinc-600 mt-2 font-mono">Portofolio Generative AI Engineer</p>
        </div>
      </aside>

      {/* MAIN WORKSPACE */}
      <main className="flex-1 lg:pl-80 min-h-screen flex flex-col bg-zinc-950 bg-grid-glow">
        
        {/* Workspace Sticky Header */}
        <header className="sticky top-0 z-20 px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Workspace</span>
            <h2 className="text-sm font-bold text-zinc-100 tracking-tight flex items-center gap-1.5 mt-0.5">
              {tab === "improve" ? (
                <>
                  <span className="text-indigo-400">✨</span> Prompt Improver
                </>
              ) : (
                <>
                  <span className="text-indigo-400">⚖️</span> A/B Comparator
                </>
              )}
            </h2>
          </div>

          {/* Quick Active Settings Badges */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800/80 text-[10px] text-zinc-400 font-medium flex items-center gap-1">
              <span className="text-[8px] text-indigo-400">●</span> Model: {model}
            </div>
            <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800/80 text-[10px] text-zinc-400 font-medium flex items-center gap-1">
              <span className="text-[8px] text-violet-400">●</span> Temp: {temperature}
            </div>
          </div>
        </header>

        {/* WORKSPACE AREA CONTENT */}
        <div className="flex-1 p-6 md:p-8 max-w-6xl w-full mx-auto space-y-6">
          
          {/* TAB IMPROVER */}
          {tab === "improve" && (
            <div className="space-y-6">
              
              {/* Input Card */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden">
                {/* Header Input */}
                <div className="px-5 py-3.5 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/40">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-3 rounded-sm bg-indigo-500"></span>
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Prompt Mentah (Raw Prompt)
                    </label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setRaw(CONTOH)}
                      className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                    >
                      💡 Muat Contoh
                    </button>
                    {raw && (
                      <button
                        onClick={() => setRaw("")}
                        className="text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                        title="Hapus semua"
                      >
                        <TrashIcon />
                      </button>
                    )}
                  </div>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    rows={6}
                    value={raw}
                    onChange={(e) => setRaw(e.target.value)}
                    placeholder="Contoh: buatkan caption jualan kopi berkualitas tinggi untuk medsos..."
                    className="w-full bg-transparent border-0 px-5 py-4 text-sm text-zinc-100 placeholder-zinc-600 focus:ring-0 focus:outline-none font-mono leading-relaxed resize-y min-h-[140px]"
                  />
                </div>

                {/* Card Footer Statistics */}
                <div className="px-5 py-2.5 border-t border-zinc-800/40 bg-zinc-950/40 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <div>
                    {words(raw)} words
                  </div>
                  <div>
                    {chars(raw)} chars
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col items-center">
                <button
                  onClick={improve}
                  disabled={loadingImp || !raw.trim()}
                  className="w-full sm:w-auto min-w-[200px] px-6 py-3 rounded-lg text-sm font-semibold tracking-wide bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-98 disabled:opacity-40 disabled:pointer-events-none text-white shadow-lg shadow-indigo-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                >
                  {loadingImp ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Menyelaraskan prompt...
                    </>
                  ) : (
                    <>
                      <span>✨</span> Perbaiki Prompt
                    </>
                  )}
                </button>
                {errImp && (
                  <div className="mt-4 px-4 py-3 rounded-lg bg-red-950/30 border border-red-900/40 flex items-start gap-2.5 text-xs text-red-400 max-w-md">
                    <span className="mt-0.5">⚠️</span>
                    <p className="leading-relaxed">Gagal memproses: {errImp}</p>
                  </div>
                )}
              </div>

              {/* Outputs (Only shows when clean prompt exists) */}
              {clean && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-pulse-slow">
                  
                  {/* Improved Output Panel */}
                  <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden flex flex-col">
                    <div className="px-5 py-3.5 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/40">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-3 rounded-sm bg-emerald-500"></span>
                        <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          ✅ Hasil Optimasi Prompt
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => triggerCopy(clean, "clean")}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/80 text-zinc-300 text-[10px] font-semibold transition-all cursor-pointer"
                        >
                          {copiedStates.clean ? (
                            <>
                              <CheckIcon /> Tersalin
                            </>
                          ) : (
                            <>
                              <CopyIcon /> Salin
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => {
                            setPa(raw);
                            setPb(clean);
                            setTab("compare");
                          }}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-indigo-600/10 border border-indigo-500/20 hover:bg-indigo-600/20 text-indigo-400 text-[10px] font-semibold transition-all cursor-pointer"
                        >
                          <span>Kirim ke Comparator</span>
                          <span className="text-[9px]">→</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-5 flex-1 bg-zinc-950/70 font-mono">
                      <pre className="whitespace-pre-wrap text-xs text-zinc-200 leading-relaxed select-all">
                        {clean}
                      </pre>
                    </div>

                    <div className="px-5 py-2.5 border-t border-zinc-800/40 bg-zinc-950/40 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                      <span>{words(clean)} words</span>
                      <span>{chars(clean)} chars</span>
                    </div>
                  </div>

                  {/* Notes / Change Log Panel */}
                  <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 p-5 flex flex-col gap-4">
                    <div>
                      <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wider">Saran & Perubahan</span>
                      <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-0.5">
                        📝 Catatan Perbaikan
                      </h3>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                      {notes ? (
                        renderNotes(notes)
                      ) : (
                        <p className="text-xs text-zinc-500 italic">Tidak ada catatan perubahan yang dilaporkan.</p>
                      )}
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* TAB COMPARATOR */}
          {tab === "compare" && (
            <div className="space-y-6">
              
              {/* Prompt Inputs Side-by-Side (Desktop layout prioritized) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Prompt A */}
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/40">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 rounded-sm bg-rose-500"></span>
                      <label className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                        Prompt A (Original)
                      </label>
                    </div>
                    {pa && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => triggerCopy(pa, "pa")}
                          className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                          title="Salin Prompt A"
                        >
                          {copiedStates.pa ? <CheckIcon /> : <CopyIcon />}
                        </button>
                        <button
                          onClick={() => setPa("")}
                          className="text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                          title="Hapus"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    )}
                  </div>
                  <textarea
                    rows={6}
                    value={pa}
                    onChange={(e) => setPa(e.target.value)}
                    placeholder="Tulis atau salin Prompt A di sini..."
                    className="w-full bg-transparent border-0 px-5 py-4 text-xs text-zinc-100 placeholder-zinc-600 focus:ring-0 focus:outline-none font-mono leading-relaxed resize-y"
                  />
                  <div className="px-5 py-2 border-t border-zinc-800/30 bg-zinc-950/20 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                    <span>{words(pa)} words</span>
                    <span>{chars(pa)} chars</span>
                  </div>
                </div>

                {/* Prompt B */}
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/40">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 rounded-sm bg-emerald-500"></span>
                      <label className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Prompt B (Improved)
                      </label>
                    </div>
                    {pb && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => triggerCopy(pb, "pb")}
                          className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                          title="Salin Prompt B"
                        >
                          {copiedStates.pb ? <CheckIcon /> : <CopyIcon />}
                        </button>
                        <button
                          onClick={() => setPb("")}
                          className="text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                          title="Hapus"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    )}
                  </div>
                  <textarea
                    rows={6}
                    value={pb}
                    onChange={(e) => setPb(e.target.value)}
                    placeholder="Tulis atau salin Prompt B di sini..."
                    className="w-full bg-transparent border-0 px-5 py-4 text-xs text-zinc-100 placeholder-zinc-600 focus:ring-0 focus:outline-none font-mono leading-relaxed resize-y"
                  />
                  <div className="px-5 py-2 border-t border-zinc-800/30 bg-zinc-950/20 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                    <span>{words(pb)} words</span>
                    <span>{chars(pb)} chars</span>
                  </div>
                </div>

              </div>

              {/* Optional Test Input Case */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden">
                <div className="px-5 py-3 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/40">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-3 rounded-sm bg-indigo-500"></span>
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Input Uji Coba / Test Case (Opsional)
                    </label>
                  </div>
                  {test && (
                    <button
                      onClick={() => setTest("")}
                      className="text-zinc-500 hover:text-red-400 cursor-pointer"
                    >
                      <TrashIcon />
                    </button>
                  )}
                </div>
                <textarea
                  rows={2}
                  value={test}
                  onChange={(e) => setTest(e.target.value)}
                  placeholder="Contoh: nama produk: Kopi Susu Aren Madu, target market: mahasiswa aktif..."
                  className="w-full bg-transparent border-0 px-5 py-3 text-xs text-zinc-100 placeholder-zinc-600 focus:ring-0 focus:outline-none font-mono"
                />
              </div>

              {/* Action Button Compare */}
              <div className="flex flex-col items-center">
                <button
                  onClick={compare}
                  disabled={loadingCmp || !pa.trim() || !pb.trim()}
                  className="w-full sm:w-auto min-w-[200px] px-6 py-3 rounded-lg text-sm font-semibold tracking-wide bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-98 disabled:opacity-40 disabled:pointer-events-none text-white shadow-lg shadow-indigo-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                >
                  {loadingCmp ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Membandingkan Output...
                    </>
                  ) : (
                    <>
                      <span>⚖️</span> Jalankan A/B Test
                    </>
                  )}
                </button>
                {errCmp && (
                  <div className="mt-4 px-4 py-3 rounded-lg bg-red-950/30 border border-red-900/40 flex items-start gap-2.5 text-xs text-red-400 max-w-md">
                    <span className="mt-0.5">⚠️</span>
                    <p className="leading-relaxed">Gagal membandingkan: {errCmp}</p>
                  </div>
                )}
              </div>

              {/* Comparison Outputs (Desktop Side-by-Side prioritize) */}
              {(outA || outB) && (
                <div className="space-y-4">
                  {/* Summary Comparison Header */}
                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📊</span>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-300">Statistik Komparasi Output</h4>
                        <p className="text-[10px] text-zinc-500">Hasil tes respons berdasarkan model Gemini aktif</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs font-mono">
                      <div className="text-right">
                        <span className="text-zinc-500 text-[10px] block">Selisih Kata</span>
                        <span className="text-indigo-400 font-bold">
                          {Math.abs(words(outA) - words(outB))} kata ({words(outA) > words(outB) ? "A lebih panjang" : "B lebih panjang"})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Output A Panel */}
                    <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden shadow-xl shadow-black/40 flex flex-col">
                      <div className="px-5 py-3 border-b border-zinc-800/60 flex justify-between items-center bg-zinc-900/40">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-3 rounded-sm bg-rose-500"></span>
                          <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Output A (Original)</h3>
                        </div>
                        {outA && (
                          <button
                            onClick={() => triggerCopy(outA, "outA")}
                            className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-semibold cursor-pointer"
                          >
                            {copiedStates.outA ? <CheckIcon /> : <CopyIcon />}
                          </button>
                        )}
                      </div>
                      <div className="p-5 flex-1 bg-zinc-950/60 text-xs text-zinc-300 leading-relaxed font-sans whitespace-pre-wrap select-all min-h-[160px]">
                        {outA || <span className="text-zinc-600 italic">Belum ada output A.</span>}
                      </div>
                      <div className="px-5 py-2 border-t border-zinc-800/30 bg-zinc-950/20 flex justify-between text-[10px] font-mono text-zinc-500">
                        <span>{words(outA)} kata</span>
                        <span>{chars(outA)} karakter</span>
                      </div>
                    </div>

                    {/* Output B Panel */}
                    <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden shadow-xl shadow-black/40 flex flex-col">
                      <div className="px-5 py-3 border-b border-zinc-800/60 flex justify-between items-center bg-zinc-900/40">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-3 rounded-sm bg-emerald-500"></span>
                          <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Output B (Improved)</h3>
                        </div>
                        {outB && (
                          <button
                            onClick={() => triggerCopy(outB, "outB")}
                            className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-semibold cursor-pointer"
                          >
                            {copiedStates.outB ? <CheckIcon /> : <CopyIcon />}
                          </button>
                        )}
                      </div>
                      <div className="p-5 flex-1 bg-zinc-950/60 text-xs text-zinc-300 leading-relaxed font-sans whitespace-pre-wrap select-all min-h-[160px]">
                        {outB || <span className="text-zinc-600 italic">Belum ada output B.</span>}
                      </div>
                      <div className="px-5 py-2 border-t border-zinc-800/30 bg-zinc-950/20 flex justify-between text-[10px] font-mono text-zinc-500">
                        <span>{words(outB)} kata</span>
                        <span>{chars(outB)} karakter</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </main>

    </div>
  );
}