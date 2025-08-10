import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, BarChart3, Smartphone, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Sitios web optimizados para conversión con diseños modernos y responsive",
    features: ["Diseño responsive", "SEO optimizado", "Carga rápida", "Analytics"],
    color: "bg-primary"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas con carrito de compras y pasarelas de pago",
    features: ["Carrito de compras", "Pagos seguros", "Gestión de inventario", "Panel admin"],
    color: "bg-secondary"
  },
  {
    icon: BarChart3,
    title: "Sistemas de Ventas",
    description: "CRM y sistemas de gestión empresarial personalizados",
    features: ["Dashboard analytics", "Gestión de clientes", "Reportes", "Automatización"],
    color: "bg-accent"
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas para iOS y Android con funcionalidades avanzadas",
    features: ["Multiplataforma", "Push notifications", "Offline support", "App Store"],
    color: "bg-gradient-primary"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones digitales completas para impulsar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="floating-card border-0 bg-gradient-card hover:shadow-vibrant group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center justify-center">
                        <Zap className="w-3 h-3 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Más Info
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-muted/50 rounded-full px-8 py-4 mb-8">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">Proyectos entregados con garantía y soporte técnico</span>
          </div>
          
          <Button size="lg" className="btn-secondary">
            Solicita tu Cotización Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;