import { CheckCircle2, Sparkles, Clock, Shield, HeartHandshake, Award } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Sparkles,
      title: "[Diferencial 1]",
      description: "[Descreva este diferencial do seu atendimento ou clínica]",
    },
    {
      icon: Shield,
      title: "[Diferencial 2]",
      description: "[Descreva este diferencial do seu atendimento ou clínica]",
    },
    {
      icon: HeartHandshake,
      title: "[Diferencial 3]",
      description: "[Descreva este diferencial do seu atendimento ou clínica]",
    },
    {
      icon: Clock,
      title: "[Diferencial 4]",
      description: "[Descreva este diferencial do seu atendimento ou clínica]",
    },
    {
      icon: Award,
      title: "[Diferencial 5]",
      description: "[Descreva este diferencial do seu atendimento ou clínica]",
    },
    {
      icon: CheckCircle2,
      title: "[Diferencial 6]",
      description: "[Descreva este diferencial do seu atendimento ou clínica]",
    },
  ];

  return (
    <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="opacity-0 animate-fade-up inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium mb-6">
            Por Que Me Escolher
          </span>
          <h2 className="opacity-0 animate-fade-up animation-delay-100 font-display text-3xl md:text-4xl font-semibold mb-6">
            [Título da Seção de Diferenciais]
          </h2>
          <p className="opacity-0 animate-fade-up animation-delay-200 text-primary-foreground/70 text-lg">
            [Descrição geral sobre o que diferencia você e sua clínica]
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-up p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 group"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
