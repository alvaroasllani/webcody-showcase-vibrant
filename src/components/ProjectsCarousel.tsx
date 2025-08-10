import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Globe, ShoppingCart, BarChart3, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma de ventas online completa con carrito de compras, gestión de productos y pagos integrados",
    icon: ShoppingCart,
    color: "bg-secondary",
    image: "/img/ecomerce/0.PNG",
    tags: ["React", "Node.js", "PayPal", "Stripe"],
    url: "https://plantilla-e-comerce.vercel.app/"
  },
  {
    id: 2,
    title: "Sistema de Gestión Sayqa",
    description: "Sistema integral de gestión empresarial con dashboard analytics y control de inventarios",
    icon: BarChart3,
    color: "bg-accent",
    image: "/img/sayqa/1.PNG",
    tags: ["Vue.js", "Chart.js", "MySQL", "API REST"],
    url: "https://sayqa-medicina-natural.netlify.app/"
  },
  {
    id: 3,
    title: "App90 - Aplicación Móvil",
    description: "Aplicación móvil nativa con funcionalidades avanzadas y experiencia de usuario optimizada",
    icon: Smartphone,
    color: "bg-gradient-primary",
    image: "/img/app90/1.PNG",
    tags: ["React Native", "Firebase", "Push Notifications", "Offline"]
  }
];

const ProjectsCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Nuestros Proyectos</span>
          </h2>
                      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre algunos de los proyectos reales que hemos desarrollado con tecnologías modernas
            </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <Card className="border-0 shadow-none bg-gradient-card">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                          {/* Project Info */}
                          <div className="p-12 flex flex-col justify-center space-y-6">
                            <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center animate-pulse-glow`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            
                            <div>
                              <h3 className="text-3xl font-bold mb-4 text-foreground">
                                {project.title}
                              </h3>
                              <p className="text-lg text-muted-foreground mb-6">
                                {project.description}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag) => (
                                <span 
                                  key={tag}
                                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {project.url ? (
                              <Button 
                                className="btn-hero w-fit group"
                                onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                              >
                                Ver Proyecto
                                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            ) : (
                              <Button className="btn-hero w-fit group" disabled>
                                Próximamente
                                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            )}
                          </div>

                          {/* Project Image */}
                          <div className="relative overflow-hidden">
                            <img 
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            onClick={prevProject}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            onClick={nextProject}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;