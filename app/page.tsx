export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Benim Projem</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Buraya kendi tanıtım yazını ekle.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500">
          Başla
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Özellikler</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-700 rounded-lg">Özellik 1</div>
          <div className="p-6 bg-gray-700 rounded-lg">Özellik 2</div>
          <div className="p-6 bg-gray-700 rounded-lg">Özellik 3</div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center">İş Ortaklarımız</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-gray-700 p-6 rounded-lg">Logo 1</div>
          <div className="bg-gray-700 p-6 rounded-lg">Logo 2</div>
          <div className="bg-gray-700 p-6 rounded-lg">Logo 3</div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Fiyatlar</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-700 rounded-lg">Paket 1</div>
          <div className="p-6 bg-gray-700 rounded-lg">Paket 2</div>
          <div className="p-6 bg-gray-700 rounded-lg">Paket 3</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-center text-gray-500">
        © {new Date().getFullYear()} Benim Sitem
      </footer>
    </main>
  )
}
