import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <Link
              href="https://instagram.com/canes_motorsports/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/cane-s-motorsports/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm">© 2024 Canes Motorsports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
