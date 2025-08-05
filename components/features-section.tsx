import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      title: "Zero-Knowledge Proofs",
      description: "Build applications with privacy at their core using our advanced zero-knowledge technology",
      image:
        "https://sjc.microlink.io/6KgXqAuAvsCVyrP_Ug_cOg0ZsEurE2Ho8JqBwOLlEWIjaXgydKid8EBC6ZMQ_vkV9PvSejsEhqZg0HMlOZAfrQ.jpeg",
    },
    {
      title: "Developer Tools",
      description: "Access comprehensive development tools and SDKs to streamline your building process",
      image:
        "https://sjc.microlink.io/6KgXqAuAvsCVyrP_Ug_cOg0ZsEurE2Ho8JqBwOLlEWIjaXgydKid8EBC6ZMQ_vkV9PvSejsEhqZg0HMlOZAfrQ.jpeg",
    },
    {
      title: "Scalable Infrastructure",
      description: "Deploy with confidence on our highly scalable and secure infrastructure",
      image:
        "https://sjc.microlink.io/6KgXqAuAvsCVyrP_Ug_cOg0ZsEurE2Ho8JqBwOLlEWIjaXgydKid8EBC6ZMQ_vkV9PvSejsEhqZg0HMlOZAfrQ.jpeg",
    },
  ]

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-zinc-300">{feature.description}</p>
                  </div>
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
