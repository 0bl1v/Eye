import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "Developer",
      price: "Free",
      features: ["Basic development tools", "Community support", "Limited API access", "Public network only"],
    },
    {
      name: "Professional",
      price: "$99/month",
      features: [
        "Advanced development tools",
        "Priority support",
        "Unlimited API access",
        "Private network support",
        "Custom integrations",
      ],
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-zinc-400">Choose the plan that's right for you</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-zinc-300">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
