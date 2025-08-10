import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ExternalLink, Globe, ShoppingCart, BarChart3, Smartphone, X, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma de ventas online completa con carrito de compras, gestión de productos y pagos integrados",
    icon: ShoppingCart,
    color: "bg-secondary",
    image: "/img/ecomerce/0.PNG",
    images: [
      "/img/ecomerce/0.PNG",
      "/img/ecomerce/1.PNG",
      "/img/ecomerce/2.PNG",
      "/img/ecomerce/3.PNG"
    ],
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
    images: [
      "/img/sayqa/1.PNG",
      "/img/sayqa/2.PNG",
      "/img/sayqa/3.PNG",
      "/img/sayqa/4.PNG"
    ],
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
    images: [
      "/img/app90/1.PNG",
      "/img/app90/2.PNG"
    ],
    tags: ["React Native", "Firebase", "Push Notifications", "Offline"]
  }
];

const ProjectsCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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

  const openImagePreview = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowImagePreview(true);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
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
                        <div className="grid md:grid-cols-2 gap-0 h-[500px]">
                          {/* Project Info */}
                          <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center animate-pulse-glow`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                                {project.title}
                              </h3>
                              <p className="text-base md:text-lg text-muted-foreground mb-6">
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

                            <div className="flex flex-col sm:flex-row gap-3">
                              {project.url ? (
                                <Button 
                                  className="btn-hero group"
                                  onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                                >
                                  Ver Proyecto
                                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              ) : (
                                <Button className="btn-hero group" disabled>
                                  Próximamente
                                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              )}
                              <Button 
                                variant="outline" 
                                className="group"
                                onClick={() => openImagePreview(project)}
                              >
                                Ver Imágenes
                                <Eye className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                              </Button>
                            </div>
                          </div>

                          {/* Project Image */}
                          <div className="relative overflow-hidden h-[500px]">
                            <img 
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                              onClick={() => openImagePreview(project)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                              {project.images.length} imágenes
                            </div>
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

        {/* Image Preview Dialog */}
        <Dialog open={showImagePreview} onOpenChange={setShowImagePreview}>
          <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden">
            <DialogHeader className="absolute top-0 left-0 right-0 z-10 bg-background/95 backdrop-blur-sm border-b p-4">
              <DialogTitle className="text-center">
                {selectedProject?.title} - Imágenes del Proyecto
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="relative w-full h-full pt-16">
                {/* Main Image */}
                <div className="relative h-full flex items-center justify-center bg-muted/30">
                  <img 
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {/* Navigation Buttons */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm"
                        onClick={nextImage}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Image Counter and Thumbnails */}
                <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-4">
                  <div className="text-center text-sm text-muted-foreground mb-3">
                    {currentImageIndex + 1} de {selectedProject.images.length}
                  </div>
                  
                  {/* Thumbnails */}
                  <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex 
                            ? 'border-primary ring-2 ring-primary/20' 
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img 
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsCarousel;