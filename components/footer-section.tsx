import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                <Discord className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; 2024 Aleo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
