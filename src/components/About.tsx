import { Award, GraduationCap, Heart, Shield } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "[Sua Formação]",
      description: "[Descreva sua formação acadêmica e especializações]",
    },
    {
      icon: Award,
      title: "[Suas Certificações]",
      description: "[Liste suas principais certificações e títulos]",
    },
    {
      icon: Heart,
      title: "[Sua Abordagem]",
      description: "[Descreva sua filosofia de atendimento]",
    },
    {
      icon: Shield,
      title: "[Sua Experiência]",
      description: "[Mencione sua experiência e casos atendidos]",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative opacity-0 animate-fade-up">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-muted to-secondary overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display text-4xl text-primary">[Foto]</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    [Adicione sua foto profissional aqui]
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="opacity-0 animate-fade-up inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              Sobre o Médico
            </span>

            <h2 className="opacity-0 animate-fade-up animation-delay-100 font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              [Dr./Dra. Seu Nome Completo]
            </h2>

            <p className="opacity-0 animate-fade-up animation-delay-200 text-muted-foreground text-lg leading-relaxed mb-6">
              [Escreva aqui uma breve biografia profissional. Conte sobre sua trajetória, 
              motivações e o que te levou a se especializar em cirurgia plástica. 
              Mostre seu lado humano e profissional.]
            </p>

            <p className="opacity-0 animate-fade-up animation-delay-300 text-muted-foreground leading-relaxed mb-8">
              [Continue descrevendo sua filosofia de trabalho, compromisso com os 
              pacientes e diferenciais do seu atendimento. Mencione membros de 
              sociedades médicas e outras credenciais relevantes.]
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className={`opacity-0 animate-fade-up animation-delay-${(index + 4) * 100} flex gap-4`}
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
