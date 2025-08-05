export function PartnersSection() {
  const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-white mb-12">Trusted By Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-12 w-32 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
