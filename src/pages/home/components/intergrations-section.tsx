import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function IntegrationsSection() {
  const platforms = [
    { name: "Google Ads", icon: "/placeholder.svg" },
    { name: "Facebook", icon: "/placeholder.svg" },
    { name: "Instagram", icon: "/placeholder.svg" },
    { name: "TikTok", icon: "/placeholder.svg" },
    { name: "Excel", icon: "/placeholder.svg" },
    { name: "Google Analytics", icon: "/placeholder.svg" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50" id="integrations">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite platforms and tools to centralize your marketing data
          </p>
        </div>
        <Card className="border-2 border-dashed p-8">
          <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

