import Image from "next/image"

export function ClientsSection() {
  const clients = [
    { name: "OPPO", logo: "/placeholder.svg" },
    { name: "ANKER", logo: "/placeholder.svg" },
    { name: "ONEPLUS", logo: "/placeholder.svg" },
    { name: "FARFETCH", logo: "/placeholder.svg" },
  ]

  return (
    <section className="py-16 bg-gray-50" id="clients">
      <div className="container">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Acknowledged by Marketers at Leading Global Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

