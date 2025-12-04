import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-display text-2xl font-semibold">
                [Seu Nome Aqui]
              </span>
              <p className="text-xs text-primary-foreground/60 tracking-widest uppercase mt-1">
                Cirurgia Plástica
              </p>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              [Breve descrição sobre você ou sua clínica. Uma frase que resuma sua proposta de valor.]
            </p>
            <p className="text-sm text-primary-foreground/50 mt-4">
              CRM: [Seu CRM] | RQE: [Seu RQE]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Procedimentos", "Depoimentos", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedures */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Procedimentos</h4>
            <ul className="space-y-3">
              {[
                "[Procedimento 1]",
                "[Procedimento 2]",
                "[Procedimento 3]",
                "[Procedimento 4]",
              ].map((proc) => (
                <li key={proc}>
                  <a
                    href="#procedimentos"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {proc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} [Seu Nome]. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1 text-sm text-primary-foreground/50">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>para você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
