import crest from './assets/img/filton-athletic-crest.jpg'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-6">
          <img src={crest} alt="Filton Athletic FC crest" className="h-16 w-16 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Filton Athletic FC</h1>
            <p className="text-sm text-slate-500">Est. Filton, Bristol</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Site under construction</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Fixtures, results, news and club info for Filton Athletic FC are coming soon.
        </p>
      </main>
    </div>
  )
}

export default App
