import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              [Sua Especialidade Aqui]
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up animation-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            [Título Principal do Seu Site]
          </h1>

          <p className="opacity-0 animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            [Sua mensagem principal aqui. Descreva brevemente sua proposta de valor, 
            o que você oferece e por que os pacientes devem escolher você.]
          </p>

          <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Agendar Consulta
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Conheça os Procedimentos
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="opacity-0 animate-fade-up animation-delay-400 mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-semibold text-foreground">[X]+</span>
                <span>Anos de<br />Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-semibold text-foreground">[X]+</span>
                <span>Pacientes<br />Atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-semibold text-foreground">[CRM]</span>
                <span>Registro<br />Profissional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
