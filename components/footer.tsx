import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              oxb contabilidade<span className="text-blue-400">.</span>
            </Link>
            <p className="text-white/50 leading-relaxed">
              Aumentando a regua da contabilidade consultiva.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#work" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Redes Sociais</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Fale conoosco</h4>
            <p className="text-white/60 mb-4">Quer conversar com a gente?</p>
            <a
              href="oxbcontabilidade@gmail.com.br"
              className="text-xl font-medium hover:text-blue-400 transition-colors"
            >
              oxbcontabilidade@gmail.com.br
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2026 OXB Contabilidade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Politica de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
