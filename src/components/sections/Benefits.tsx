import { useState, useEffect } from "react";
import { Clock, DollarSign, MessageCircle, BookOpen, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BenefitItem = ({ icon: Icon, title, description, delay }) => {
  return (
    <div className="flex flex-col items-center p-6 reveal text-center" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("benefits");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Atendimento Sem Pausas",
      description: "Disponibilidade completa, 24 horas por dia, todos os dias da semana."
    },
    {
      icon: DollarSign,
      title: "Custo Drasticamente Reduzido",
      description: "Apenas R$ 0,44 por hora, contra R$ 14,55 de um SDR humano."
    },
    {
      icon: MessageCircle,
      title: "Follow-up Inteligente",
      description: "Sistema automatizado que aumenta suas taxas de conversão."
    },
    {
      icon: BookOpen,
      title: "Treinamento Contínuo Incluso",
      description: "A IA aprende constantemente, sem taxas adicionais."
    },
    {
      icon: Zap,
      title: "Integração Simples e Rápida",
      description: "Configure com seu WhatsApp em poucos minutos."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Benefícios do followop
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia avançada com resultados imediatos para seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className={`flex justify-center ${isVisible ? 'reveal active' : 'reveal'}`}>
              <BenefitItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
