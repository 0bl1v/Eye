import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-3xl">
            Build Private Applications From The Ground Up
          </h1>
          <p className="text-xl text-zinc-200 max-w-[600px]">
            Experience the future of blockchain development with our zero-knowledge platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
