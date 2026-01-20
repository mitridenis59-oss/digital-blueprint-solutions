import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Settings, 
  Globe, 
  Zap, 
  BarChart3,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Proiectare soluții digitale",
    description: "Analizăm nevoile și proiectăm arhitectura ideală pentru afacerea ta.",
  },
  {
    icon: Settings,
    title: "Digitalizare procese",
    description: "Transformăm procesele manuale în fluxuri digitale eficiente.",
  },
  {
    icon: Globe,
    title: "Platforme web & sisteme interne",
    description: "Dezvoltăm aplicații web scalabile pentru echipe și clienți.",
  },
  {
    icon: Zap,
    title: "Automatizare fluxuri",
    description: "Eliminăm munca repetitivă cu automatizări inteligente.",
  },
  {
    icon: BarChart3,
    title: "Dashboard-uri & raportare",
    description: "Vizualizează datele cheie în dashboard-uri interactive.",
  },
];

const Services = () => {
  return (
    <section id="servicii" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Servicii</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Soluții complete de <span className="gradient-text">digitalizare</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De la analiză la implementare, acoperim întregul ciclu de dezvoltare al soluțiilor digitale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
