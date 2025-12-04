import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Procedures = () => {
  const procedures = [
    {
      title: "[Procedimento 1]",
      description: "[Descrição breve do procedimento e seus benefícios]",
      image: null,
    },
    {
      title: "[Procedimento 2]",
      description: "[Descrição breve do procedimento e seus benefícios]",
      image: null,
    },
    {
      title: "[Procedimento 3]",
      description: "[Descrição breve do procedimento e seus benefícios]",
      image: null,
    },
    {
      title: "[Procedimento 4]",
      description: "[Descrição breve do procedimento e seus benefícios]",
      image: null,
    },
    {
      title: "[Procedimento 5]",
      description: "[Descrição breve do procedimento e seus benefícios]",
      image: null,
    },
    {
      title: "[Procedimento 6]",
      description: "[Descrição breve do procedimento e seus benefícios]",
      image: null,
    },
  ];

  return (
    <section id="procedimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="opacity-0 animate-fade-up inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            Procedimentos
          </span>
          <h2 className="opacity-0 animate-fade-up animation-delay-100 font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            [Título da Seção de Procedimentos]
          </h2>
          <p className="opacity-0 animate-fade-up animation-delay-200 text-muted-foreground text-lg">
            [Descrição geral sobre os procedimentos oferecidos e sua abordagem]
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className="opacity-0 animate-scale-in group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl text-muted-foreground/50">
                    [Imagem]
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {procedure.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {procedure.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 opacity-0 animate-fade-up" style={{ animationDelay: "900ms" }}>
          <Button variant="hero" size="xl">
            Ver Todos os Procedimentos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
