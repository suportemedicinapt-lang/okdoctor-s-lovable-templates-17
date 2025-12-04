import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Endereço",
      value: "[Seu endereço completo aqui]",
      href: "[Link do Google Maps]",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "[Seu telefone aqui]",
      href: "tel:[Seu telefone]",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "[Seu e-mail aqui]",
      href: "mailto:[Seu e-mail]",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "[Seus horários de atendimento]",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "[Seu Instagram]", label: "Instagram" },
    { icon: Facebook, href: "[Seu Facebook]", label: "Facebook" },
    { icon: Linkedin, href: "[Seu LinkedIn]", label: "LinkedIn" },
  ];

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="opacity-0 animate-fade-up inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              Contato
            </span>
            <h2 className="opacity-0 animate-fade-up animation-delay-100 font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              [Título da Seção de Contato]
            </h2>
            <p className="opacity-0 animate-fade-up animation-delay-200 text-muted-foreground text-lg mb-10">
              [Mensagem convidando o paciente a entrar em contato para agendar uma consulta ou tirar dúvidas]
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-up flex items-start gap-4"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-up mt-10 pt-10 border-t border-border" style={{ animationDelay: "700ms" }}>
              <p className="text-sm text-muted-foreground mb-4">Siga nas redes sociais</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-scale-in animation-delay-300 bg-card rounded-2xl p-8 lg:p-10 shadow-elevated">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Agende sua Consulta
            </h3>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário abaixo que entraremos em contato
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Procedimento de Interesse
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option value="">Selecione um procedimento</option>
                  <option value="proc1">[Procedimento 1]</option>
                  <option value="proc2">[Procedimento 2]</option>
                  <option value="proc3">[Procedimento 3]</option>
                  <option value="outro">Outro / Não sei ainda</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos mais sobre o que você procura..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                Enviar Mensagem
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
