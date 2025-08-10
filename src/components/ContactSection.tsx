import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para comenzar tu próximo proyecto? Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="floating-card border-0 bg-gradient-card shadow-vibrant">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Envíanos un mensaje</h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono (opcional)
                  </label>
                  <Input
                    id="phone"
                    placeholder="+591 12345678"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Servicio de interés
                  </label>
                  <select className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-primary transition-colors">
                    <option value="">Selecciona un servicio</option>
                    <option value="landing">Landing Page</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="sistema">Sistema de Ventas</option>
                    <option value="app">App Móvil</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button className="btn-hero w-full group">
                  Enviar mensaje
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="floating-card border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center animate-pulse-glow">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Oficina Principal</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Edificio Skybox Piso7, Oficina 9,<br />
                  Avenida Heroinas y Calle Antezana
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center animate-pulse-glow">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">WhatsApp</h3>
                </div>
                <a 
                  href="https://wa.me/59163970427" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                >
                  +591 63970427
                </a>
              </CardContent>
            </Card>

            <Card className="floating-card border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center animate-pulse-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                </div>
                <a 
                  href="mailto:alvarowebcody@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                >
                  alvarowebcody@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="floating-card border-0 bg-gradient-primary">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Respuesta Garantizada</h3>
                </div>
                <p className="text-white/90 text-sm">
                  Nos comprometemos a responder tu consulta en menos de 24 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
