import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-lg">Digitech</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Transformăm afaceri prin soluții digitale moderne. De la analiză la implementare, suntem partenerul tău de încredere în digitalizare.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@digitech.app</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+40 721 234 567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>București, România</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Proiectare soluții</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Digitalizare procese</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Automatizare</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Dashboard-uri</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Companie</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Despre noi</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Portofoliu</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Digitech. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Politica de confidențialitate</a>
            <a href="#" className="hover:text-foreground transition-colors">Termeni și condiții</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
