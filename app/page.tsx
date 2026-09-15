'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'kundli' | 'tarot' | 'numerology' | 'vastu' | 'rashifal' | 'compatibility'>('kundli')

  // Auth State
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [authEmail, setAuthEmail] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authName, setAuthName] = useState('')
  const [authMsg, setAuthMsg] = useState('')

  // 1. Kundli State
  const [kName, setKName] = useState('दिव्य जातक')
  const [kDOB, setKDOB] = useState('1995-10-24')
  const [kTOB, setKTOB] = useState('10:30')
  const [kCity, setKCity] = useState('नई दिल्ली')
  const [kundliData, setKundliData] = useState<any>(null)
  const [kLoading, setKLoading] = useState(false)

  // 2. Tarot State
  const [tSpread, setTSpread] = useState('THREE_CARD')
  const [tQuestion, setTQuestion] = useState('')
  const [tarotData, setTarotData] = useState<any>(null)
  const [tLoading, setTLoading] = useState(false)

  // 3. Numerology State
  const [numName, setNumName] = useState('राहुल शर्मा')
  const [numDOB, setNumDOB] = useState('1995-10-24')
  const [numData, setNumData] = useState<any>(null)
  const [numLoading, setNumLoading] = useState(false)

  // 4. Vastu State
  const [vRoom, setVRoom] = useState('पूजा घर (Mandir)')
  const [vDir, setVDir] = useState('NE')
  const [vastuData, setVastuData] = useState<any>(null)
  const [vLoading, setVLoading] = useState(false)

  // 5. Rashifal State
  const [selectedRashi, setSelectedRashi] = useState('Aries')
  const [rashifalData, setRashifalData] = useState<any>(null)
  const [rLoading, setRLoading] = useState(false)

  // 6. Compatibility State
  const [p1Name, setP1Name] = useState('वर (Groom)')
  const [p1DOB, setP1DOB] = useState('1994-08-15')
  const [p2Name, setP2Name] = useState('कन्या (Bride)')
  const [p2DOB, setP2DOB] = useState('1996-03-22')
  const [compatData, setCompatData] = useState<any>(null)
  const [cLoading, setCLoading] = useState(false)

  // Handle Auth
  async function handleAuthSubmit(e: React.FormEvent) {
    e.preventDefault()
    setAuthMsg('')
    const url = authMode === 'login' ? '/api/auth/login' : '/api/auth/signup'
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: authEmail,
          password: authPassword,
          name: authName || authEmail.split('@')[0],
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setUser(data.user)
        setShowAuthModal(false)
        alert(`🙏 स्वागत है, ${data.user.name}!`)
      } else {
        setAuthMsg(data.error || 'प्रमाणीकरण विफल')
      }
    } catch (err: any) {
      setAuthMsg(err.message || 'नेटवर्क त्रुटि')
    }
  }

  // Calculate Kundli
  async function handleKundliSubmit(e: React.FormEvent) {
    e.preventDefault()
    setKLoading(true)
    try {
      const res = await fetch('/api/kundli/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: kName,
          dateOfBirth: kDOB,
          timeOfBirth: kTOB,
          placeOfBirth: kCity,
        }),
      })
      const json = await res.json()
      if (json.success) setKundliData(json.kundli)
      else alert(json.error)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setKLoading(false)
    }
  }

  // Draw Tarot Cards
  async function handleTarotDraw() {
    setTLoading(true)
    try {
      const res = await fetch('/api/tarot/reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          spreadType: tSpread,
          question: tQuestion,
        }),
      })
      const json = await res.json()
      if (json.success) setTarotData(json.reading)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setTLoading(false)
    }
  }

  // Calculate Numerology
  async function handleNumerologySubmit(e: React.FormEvent) {
    e.preventDefault()
    setNumLoading(true)
    try {
      const res = await fetch('/api/numerology/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: numName,
          dateOfBirth: numDOB,
        }),
      })
      const json = await res.json()
      if (json.success) setNumData(json.result)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setNumLoading(false)
    }
  }

  // Analyze Vastu
  async function handleVastuSubmit(e: React.FormEvent) {
    e.preventDefault()
    setVLoading(true)
    try {
      const res = await fetch('/api/vastu/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomType: vRoom,
          direction: vDir,
        }),
      })
      const json = await res.json()
      if (json.success) setVastuData(json.analysis)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setVLoading(false)
    }
  }

  // Generate Rashifal
  async function handleRashifalSubmit(rashi: string) {
    setSelectedRashi(rashi)
    setRLoading(true)
    try {
      const res = await fetch('/api/rashifal/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rashi }),
      })
      const json = await res.json()
      if (json.success) setRashifalData(json.rashifal)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setRLoading(false)
    }
  }

  // Check 36 Guna Compatibility
  async function handleCompatSubmit(e: React.FormEvent) {
    e.preventDefault()
    setCLoading(true)
    try {
      const res = await fetch('/api/compatibility/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          person1Name: p1Name,
          person1DOB: p1DOB,
          person2Name: p2Name,
          person2DOB: p2DOB,
        }),
      })
      const json = await res.json()
      if (json.success) setCompatData(json.result)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setCLoading(false)
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* App Header */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-amber-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center text-2xl font-bold shadow-md shadow-amber-500/20">
            ॐ
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-amber-800 tracking-tight">
              दिव्य दृष्टि ज्योतिष महा-मंच
            </h1>
            <p className="text-xs md:text-sm text-slate-500">
              Online Vedic Kundli, Tarot, Numerology, Vastu, Rashifal & Kundli Milan Platform
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-lg transition"
          >
            🖨️ प्रिंट / PDF
          </button>
          <button
            onClick={() => setShowAuthModal(true)}
            className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:brightness-105 rounded-lg shadow-sm"
          >
            {user ? `👤 ${user.name}` : '🔐 लॉगिन / साइन अप'}
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex gap-2 overflow-x-auto pb-3 mb-8 border-b border-amber-200 scrollbar-thin">
        {[
          { id: 'kundli', label: '🔮 जन्म कुंडली (Kundli)' },
          { id: 'tarot', label: '🃏 टैरो कार्ड्स (Tarot)' },
          { id: 'numerology', label: '🔢 अंकशास्त्र (Numerology)' },
          { id: 'vastu', label: '🧭 वास्तु शास्त्र (Vastu)' },
          { id: 'rashifal', label: '♈ दैनिक राशिफल (Rashifal)' },
          { id: 'compatibility', label: '💑 36 गुण मिलान (Matching)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all shadow-sm ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-amber-600/30'
                : 'bg-white text-slate-700 border border-amber-200/80 hover:bg-amber-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* TAB 1: KUNDLI */}
      {activeTab === 'kundli' && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-lg font-bold text-amber-800 mb-4 border-b pb-2">
              📜 जन्म विवरण दर्ज करें
            </h2>
            <form onSubmit={handleKundliSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-slate-600 font-medium mb-1">जातक का नाम:</label>
                <input
                  type="text"
                  value={kName}
                  onChange={(e) => setKName(e.target.value)}
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-600 font-medium mb-1">जन्म तारीख:</label>
                <input
                  type="date"
                  value={kDOB}
                  onChange={(e) => setKDOB(e.target.value)}
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-600 font-medium mb-1">जन्म समय:</label>
                <input
                  type="time"
                  value={kTOB}
                  onChange={(e) => setKTOB(e.target.value)}
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-600 font-medium mb-1">जन्म स्थान (शहर):</label>
                <input
                  type="text"
                  value={kCity}
                  onChange={(e) => setKCity(e.target.value)}
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={kLoading}
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl shadow-md hover:brightness-105 transition"
              >
                {kLoading ? 'गणना जारी है...' : '✨ संपूर्ण कुंडली गणना करें'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {kundliData ? (
              <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
                  <h3 className="text-xl font-bold text-amber-800">
                    🏛️ जन्म पत्रिका: {kName}
                  </h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                    {kundliData.summary}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-amber-50/50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">लग्न (Ascendant)</span>
                    <p className="font-bold text-amber-800">{kundliData.ascendant}</p>
                  </div>
                  <div className="p-3 bg-amber-50/50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">चंद्र राशि (Rashi)</span>
                    <p className="font-bold text-amber-800">{kundliData.rashi}</p>
                  </div>
                  <div className="p-3 bg-amber-50/50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">नक्षत्र (Nakshatra)</span>
                    <p className="font-bold text-amber-800">{kundliData.nakshatra}</p>
                  </div>
                  <div className="p-3 bg-amber-50/50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">महादशा (Dasha)</span>
                    <p className="font-bold text-amber-800">{kundliData.currentDasha}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-700 text-sm mb-2">🪐 ग्रहीय स्थिति (Planetary Degrees):</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <p><strong>सूर्य (Sun):</strong> {kundliData.sun}</p>
                    <p><strong>चंद्र (Moon):</strong> {kundliData.moon}</p>
                    <p><strong>मंगल (Mars):</strong> {kundliData.mars}</p>
                    <p><strong>बुध (Mercury):</strong> {kundliData.mercury}</p>
                    <p><strong>गुरु (Jupiter):</strong> {kundliData.jupiter}</p>
                    <p><strong>शुक्र (Venus):</strong> {kundliData.venus}</p>
                    <p><strong>शनि (Saturn):</strong> {kundliData.saturn}</p>
                    <p><strong>राहु (Rahu):</strong> {kundliData.rahu}</p>
                    <p><strong>केतु (Ketu):</strong> {kundliData.ketu}</p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs">
                  <h4 className="font-bold text-amber-800 mb-1">🔥 मांगलिक दोष स्थिति:</h4>
                  <p>{kundliData.mangalDosha ? "⚠️ कुंडली में मांगलिक दोष उपस्थित है।" : "✓ कुंडली मांगलिक दोष से मुक्त है।"}</p>
                </div>

                <pre className="p-4 bg-slate-900 text-amber-300 text-xs rounded-xl overflow-x-auto font-mono whitespace-pre-wrap">
                  {kundliData.fullReport}
                </pre>
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-amber-300 text-slate-500">
                <span className="text-4xl block mb-2">📜</span>
                <p className="font-medium">कृपया बाईं ओर जन्म विवरण भरकर 'संपूर्ण कुंडली गणना करें' बटन दबाएँ।</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAB 2: TAROT */}
      {activeTab === 'tarot' && (
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-lg font-bold text-amber-800 mb-4">🃏 दैवीय टैरो कार्ड रीडिंग</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4 text-sm">
              <div className="flex-1">
                <label className="block text-slate-600 font-medium mb-1">स्प्रेड का प्रकार चुनें:</label>
                <select
                  value={tSpread}
                  onChange={(e) => setTSpread(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                >
                  <option value="SINGLE">एकल कार्ड (Single Card Guidance)</option>
                  <option value="THREE_CARD">त्रिकाल स्प्रेड (3 Cards: Past, Present, Future)</option>
                  <option value="CELTIC_CROSS">सेल्टिक क्रॉस (Celtic Cross - 10 Cards Deep Analysis)</option>
                </select>
              </div>
              <div className="flex-[2]">
                <label className="block text-slate-600 font-medium mb-1">आपका प्रश्न (वैकल्पिक):</label>
                <input
                  type="text"
                  placeholder="उदा. मेरे करियर में आगे क्या अवसर हैं?"
                  value={tQuestion}
                  onChange={(e) => setTQuestion(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                />
              </div>
            </div>
            <button
              onClick={handleTarotDraw}
              disabled={tLoading}
              className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl shadow-md hover:brightness-105 transition"
            >
              {tLoading ? 'कार्ड्स का आह्वान जारी है...' : '🔮 कार्ड्स का प्रकटीकरण करें (Draw Cards)'}
            </button>
          </div>

          {tarotData && (
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-amber-800 border-b pb-2">
                ✨ {tarotData.spreadTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tarotData.cards.map((c: any, i: number) => (
                  <div key={i} className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{c.position}</span>
                    <h4 className="font-bold text-slate-800 text-base">{c.cardName}</h4>
                    <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded">
                      {c.orientation}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{c.meaning}</p>
                    <div className="pt-2 border-t border-amber-200/60 text-xs text-amber-800 font-medium">
                      💡 सुझाव: "{c.advice}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* TAB 3: NUMEROLOGY */}
      {activeTab === 'numerology' && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-lg font-bold text-amber-800 mb-4 border-b pb-2">
              🔢 अंकशास्त्र विवरण
            </h2>
            <form onSubmit={handleNumerologySubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-slate-600 font-medium mb-1">पूरा नाम (Full Name):</label>
                <input
                  type="text"
                  value={numName}
                  onChange={(e) => setNumName(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-600 font-medium mb-1">जन्म तारीख (Date of Birth):</label>
                <input
                  type="date"
                  value={numDOB}
                  onChange={(e) => setNumDOB(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={numLoading}
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl shadow-md hover:brightness-105 transition"
              >
                {numLoading ? 'गणना जारी है...' : '🔢 अंकशास्त्र व लो-शू फल निकालें'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            {numData ? (
              <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-amber-800 border-b pb-2">
                  अंकशास्त्र विश्लेषण: {numName}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">मूलांक (Life Path)</span>
                    <p className="text-2xl font-black text-amber-800">{numData.lifePathNum}</p>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">भाग्यांक (Destiny)</span>
                    <p className="text-2xl font-black text-amber-800">{numData.destinyNum}</p>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">नामांक (Expression)</span>
                    <p className="text-2xl font-black text-amber-800">{numData.expressionNum}</p>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                    <span className="text-xs text-slate-500">आत्म-अभिलाषा (Soul Urge)</span>
                    <p className="text-2xl font-black text-amber-800">{numData.soulUrgeNum}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <p><strong>मूलांक फल:</strong> {numData.lifePathDesc}</p>
                  <p><strong>भाग्यांक फल:</strong> {numData.destinyDesc}</p>
                  <p><strong>शुभ अंक:</strong> {numData.luckyNumbers.join(', ')} | <strong>शुभ रंग:</strong> {numData.luckyColors.join(', ')}</p>
                </div>

                {numData.loShuGrid && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-amber-800 text-sm">📐 लो-शू 3x3 मैजिक चक्र:</h4>
                    <div className="grid grid-cols-3 max-w-[240px] border-2 border-amber-700 rounded-lg text-center font-bold text-lg">
                      {numData.loShuGrid.row1.map((n: string, i: number) => (
                        <div key={i} className="p-3 border border-amber-600 bg-amber-50/50">{n || '-'}</div>
                      ))}
                      {numData.loShuGrid.row2.map((n: string, i: number) => (
                        <div key={i} className="p-3 border border-amber-600 bg-amber-50/50">{n || '-'}</div>
                      ))}
                      {numData.loShuGrid.row3.map((n: string, i: number) => (
                        <div key={i} className="p-3 border border-amber-600 bg-amber-50/50">{n || '-'}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-amber-300 text-slate-500">
                <span className="text-4xl block mb-2">🔢</span>
                <p className="font-medium">नाम व जन्म तारीख भरकर अंकशास्त्र रिपोर्ट देखें।</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAB 4: VASTU */}
      {activeTab === 'vastu' && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-lg font-bold text-amber-800 mb-4 border-b pb-2">
              🧭 16-जोन महावास्तु परीक्षक
            </h2>
            <form onSubmit={handleVastuSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-slate-600 font-medium mb-1">कमरे / स्थान का प्रकार:</label>
                <select
                  value={vRoom}
                  onChange={(e) => setVRoom(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                >
                  <option value="पूजा घर (Mandir)">पूजा घर (Mandir)</option>
                  <option value="रसोई घर (Kitchen)">रसोई घर (Kitchen)</option>
                  <option value="मास्टर बेडरूम (Master Bedroom)">मास्टर बेडरूम (Master Bedroom)</option>
                  <option value="शौचालय (Toilet)">शौचालय (Toilet)</option>
                  <option value="तिजोरी (Locker/Tijori)">तिजोरी (Locker/Tijori)</option>
                  <option value="मुख्य द्वार (Main Entrance)">मुख्य द्वार (Main Entrance)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-600 font-medium mb-1">दिशा (Direction):</label>
                <select
                  value={vDir}
                  onChange={(e) => setVDir(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                >
                  <option value="N">उत्तर (North)</option>
                  <option value="NNE">उत्तर-उत्तर-पूर्व (NNE)</option>
                  <option value="NE">ईशान कोण (North-East)</option>
                  <option value="ENE">पूर्व-उत्तर-पूर्व (ENE)</option>
                  <option value="E">पूर्व (East)</option>
                  <option value="ESE">पूर्व-दक्षिण-पूर्व (ESE)</option>
                  <option value="SE">आग्नेय कोण (South-East)</option>
                  <option value="SSE">दक्षिण-दक्षिण-पूर्व (SSE)</option>
                  <option value="S">दक्षिण (South)</option>
                  <option value="SSW">दक्षिण-दक्षिण-पश्चिम (SSW)</option>
                  <option value="SW">नैऋत्य कोण (South-West)</option>
                  <option value="WSW">पश्चिम-दक्षिण-पश्चिम (WSW)</option>
                  <option value="W">पश्चिम (West)</option>
                  <option value="WNW">पश्चिम-उत्तर-पश्चिम (WNW)</option>
                  <option value="NW">वायव्य कोण (North-West)</option>
                  <option value="NNW">उत्तर-उत्तर-पश्चिम (NNW)</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={vLoading}
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl shadow-md hover:brightness-105 transition"
              >
                {vLoading ? 'मूल्यांकन जारी है...' : '🧭 वास्तु अनुकूलता जांचें'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            {vastuData ? (
              <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-amber-800">{vastuData.roomType}</h3>
                    <p className="text-xs text-slate-500">दिशा: {vastuData.direction}</p>
                  </div>
                  <span className="text-2xl font-black text-amber-700">
                    स्कोर: {vastuData.score}/10
                  </span>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-800 text-sm mb-1">वास्तु निष्कर्ष: {vastuData.rating}</h4>
                  <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                    {vastuData.recommendations.map((r: string, idx: number) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-amber-300 text-slate-500">
                <span className="text-4xl block mb-2">🧭</span>
                <p className="font-medium">कमरा और दिशा चुनकर वास्तु स्कोर व उपाय देखें।</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAB 5: RASHIFAL */}
      {activeTab === 'rashifal' && (
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-lg font-bold text-amber-800 mb-4 text-center">
              ♈ 12 राशियों का दैनिक राशिफल (Daily Horoscope)
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {[
                { key: 'Aries', label: 'मेष' },
                { key: 'Taurus', label: 'वृषभ' },
                { key: 'Gemini', label: 'मिथुन' },
                { key: 'Cancer', label: 'कर्क' },
                { key: 'Leo', label: 'सिंह' },
                { key: 'Virgo', label: 'कन्या' },
                { key: 'Libra', label: 'तुला' },
                { key: 'Scorpio', label: 'वृश्चिक' },
                { key: 'Sagittarius', label: 'धनु' },
                { key: 'Capricorn', label: 'मकर' },
                { key: 'Aquarius', label: 'कुंभ' },
                { key: 'Pisces', label: 'मीन' },
              ].map((r) => (
                <button
                  key={r.key}
                  onClick={() => handleRashifalSubmit(r.key)}
                  className={`p-3 rounded-xl text-xs font-bold border transition ${
                    selectedRashi === r.key
                      ? 'bg-amber-600 text-white border-amber-600 shadow'
                      : 'bg-amber-50/50 text-slate-700 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {rashifalData && (
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-xl font-bold text-amber-800">
                  {rashifalData.hindiName} ({rashifalData.rashi})
                </h3>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                  स्वामी: {rashifalData.lord}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong className="text-amber-800">💼 करियर व व्यवसाय:</strong>
                  <p className="text-xs text-slate-600 mt-1">{rashifalData.career}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong className="text-amber-800">💰 वित्त व धन:</strong>
                  <p className="text-xs text-slate-600 mt-1">{rashifalData.finance}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong className="text-amber-800">❤️ प्रेम व संबंध:</strong>
                  <p className="text-xs text-slate-600 mt-1">{rashifalData.relationships}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong className="text-amber-800">🌿 स्वास्थ्य:</strong>
                  <p className="text-xs text-slate-600 mt-1">{rashifalData.health}</p>
                </div>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs font-medium text-amber-900 flex justify-around">
                <span>🎨 शुभ रंग: {rashifalData.luckyColor}</span>
                <span>🔢 शुभ अंक: {rashifalData.luckyNumber}</span>
                <span>📅 शुभ वार: {rashifalData.luckyDay}</span>
              </div>
            </div>
          )}
        </section>
      )}

      {/* TAB 6: COMPATIBILITY */}
      {activeTab === 'compatibility' && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-lg font-bold text-amber-800 mb-4 border-b pb-2">
              💑 36 गुण अष्टकूट कुंडली मिलान
            </h2>
            <form onSubmit={handleCompatSubmit} className="space-y-4 text-sm">
              <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
                <h4 className="font-bold text-amber-800 text-xs">वर का विवरण (Groom):</h4>
                <input
                  type="text"
                  placeholder="वर का नाम"
                  value={p1Name}
                  onChange={(e) => setP1Name(e.target.value)}
                  className="w-full p-2 border rounded-lg text-xs"
                  required
                />
                <input
                  type="date"
                  value={p1DOB}
                  onChange={(e) => setP1DOB(e.target.value)}
                  className="w-full p-2 border rounded-lg text-xs"
                  required
                />
              </div>
              <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
                <h4 className="font-bold text-amber-800 text-xs">कन्या का विवरण (Bride):</h4>
                <input
                  type="text"
                  placeholder="कन्या का नाम"
                  value={p2Name}
                  onChange={(e) => setP2Name(e.target.value)}
                  className="w-full p-2 border rounded-lg text-xs"
                  required
                />
                <input
                  type="date"
                  value={p2DOB}
                  onChange={(e) => setP2DOB(e.target.value)}
                  className="w-full p-2 border rounded-lg text-xs"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={cLoading}
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl shadow-md hover:brightness-105 transition"
              >
                {cLoading ? 'गणना जारी है...' : '💑 36 गुण मिलान परिणाम देखें'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            {compatData ? (
              <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-amber-800">{compatData.person1Name} & {compatData.person2Name}</h3>
                    <p className="text-xs text-slate-500">श्रेणी: {compatData.compatibility}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-amber-700">{compatData.totalScore}</span>
                    <span className="text-sm font-semibold text-slate-500"> / 36 गुण</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-slate-50 border rounded-lg">वर्ण: <strong>{compatData.varnaGuna}/1</strong></div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">वश्य: <strong>{compatData.vasyaGuna}/2</strong></div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">तारा: <strong>{compatData.taraGuna}/3</strong></div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">योनि: <strong>{compatData.yoniGuna}/4</strong></div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">ग्रहमैत्री: <strong>{compatData.grahaMaitri}/5</strong></div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">गण: <strong>{compatData.ganaGuna}/6</strong></div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">भकूट: <strong>{compatData.bhakutGuna}/7</strong></div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">नाड़ी: <strong>{compatData.nadiGuna}/8</strong></div>
                </div>

                {compatData.doshas.length > 0 && (
                  <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded-xl text-xs space-y-1">
                    <strong className="block text-red-900">दोष विश्लेषण:</strong>
                    {compatData.doshas.map((d: string, idx: number) => (
                      <p key={idx}>⚠️ {d}</p>
                    ))}
                  </div>
                )}

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs">
                  <strong className="text-amber-800 block mb-1">शास्त्रीय निष्कर्ष:</strong>
                  <p className="text-slate-700 leading-relaxed">{compatData.summary}</p>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-amber-300 text-slate-500">
                <span className="text-4xl block mb-2">💑</span>
                <p className="font-medium">वर व कन्या का विवरण भरकर 36 गुण मिलान रिपोर्ट देखें।</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-amber-200 max-w-md w-full p-6 shadow-xl relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-amber-800 mb-4">
              {authMode === 'login' ? '🔐 खाता लॉगिन करें' : '📝 नया खाता बनाएँ'}
            </h3>

            {authMsg && (
              <div className="p-3 mb-4 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                {authMsg}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-3 text-sm">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-slate-600 mb-1">आपका नाम:</label>
                  <input
                    type="text"
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    className="w-full p-2.5 border rounded-lg outline-none"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-slate-600 mb-1">ईमेल आईडी:</label>
                <input
                  type="email"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">पासवर्ड:</label>
                <input
                  type="password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  className="w-full p-2.5 border rounded-lg outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl shadow mt-2"
              >
                {authMode === 'login' ? 'लॉगिन करें' : 'साइन अप करें'}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t text-center text-xs text-slate-500">
              {authMode === 'login' ? (
                <p>
                  खाता नहीं है?{' '}
                  <button onClick={() => setAuthMode('signup')} className="text-amber-700 font-bold hover:underline">
                    यहाँ साइन अप करें
                  </button>
                </p>
              ) : (
                <p>
                  पहले से खाता है?{' '}
                  <button onClick={() => setAuthMode('login')} className="text-amber-700 font-bold hover:underline">
                    यहाँ लॉगिन करें
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
