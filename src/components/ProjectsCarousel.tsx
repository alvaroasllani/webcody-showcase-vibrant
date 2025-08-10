import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Globe, ShoppingCart, BarChart3, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Landing Page Moderna",
    description: "Sitio web corporativo con diseño minimalista y alta conversión",
    icon: Globe,
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    tags: ["React", "Tailwind", "Animations"]
  },
  {
    id: 2,
    title: "E-commerce Avanzado",
    description: "Plataforma de ventas online con carrito y pagos integrados",
    icon: ShoppingCart,
    color: "bg-secondary",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    tags: ["Next.js", "Stripe", "Database"]
  },
  {
    id: 3,
    title: "Sistema de Ventas",
    description: "CRM completo con dashboard analytics y gestión de clientes",
    icon: BarChart3,
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    tags: ["Vue.js", "Chart.js", "API REST"]
  },
  {
    id: 4,
    title: "Aplicación Móvil",
    description: "App nativa multiplataforma con funcionalidades avanzadas",
    icon: Smartphone,
    color: "bg-gradient-primary",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
    tags: ["React Native", "Firebase", "Push Notifications"]
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
            Descubre algunos de los trabajos que hemos realizado para nuestros clientes
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

                            <Button className="btn-hero w-fit group">
                              Ver Proyecto
                              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
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