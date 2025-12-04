import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "[Nome do Paciente 1]",
      procedure: "[Procedimento Realizado]",
      quote: "[Depoimento do paciente sobre sua experiência. Inclua detalhes sobre o atendimento, resultados e como se sentiu durante todo o processo.]",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 2]",
      procedure: "[Procedimento Realizado]",
      quote: "[Depoimento do paciente sobre sua experiência. Inclua detalhes sobre o atendimento, resultados e como se sentiu durante todo o processo.]",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 3]",
      procedure: "[Procedimento Realizado]",
      quote: "[Depoimento do paciente sobre sua experiência. Inclua detalhes sobre o atendimento, resultados e como se sentiu durante todo o processo.]",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="opacity-0 animate-fade-up inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            Depoimentos
          </span>
          <h2 className="opacity-0 animate-fade-up animation-delay-100 font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            [Título da Seção de Depoimentos]
          </h2>
          <p className="opacity-0 animate-fade-up animation-delay-200 text-muted-foreground text-lg">
            [Descrição sobre a importância dos depoimentos e satisfação dos pacientes]
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="opacity-0 animate-scale-in bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 relative"
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-display text-lg text-muted-foreground">
                    {testimonial.name.charAt(1)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.procedure}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
