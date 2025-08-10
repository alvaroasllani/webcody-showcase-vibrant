import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/300c1245-a286-48c3-89c5-18be3e01eeec.png" 
            alt="WebCody Logo" 
            className="w-12 h-12 animate-float"
          />
          <h1 className="text-2xl font-bold gradient-text">WebCody</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors duration-300">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors duration-300">
            Servicios
          </a>
          <a href="#proyectos" className="text-foreground hover:text-primary transition-colors duration-300">
            Proyectos
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors duration-300">
            Contacto
          </a>
        </nav>

        <Button className="btn-hero">
          Contáctanos
        </Button>
      </div>
    </header>
  );
};

export default Header;