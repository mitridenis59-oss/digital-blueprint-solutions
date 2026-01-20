import { motion } from "framer-motion";
import { Search, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analiză procese",
    description: "Înțelegem în detaliu fluxurile de lucru actuale și identificăm oportunitățile de digitalizare.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Proiectare soluție",
    description: "Creăm arhitectura tehnică și design-ul interfeței adaptate nevoilor echipei.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Dezvoltare aplicație",
    description: "Construim aplicația web folosind tehnologii moderne și practici de dezvoltare agile.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lansare & optimizare",
    description: "Lansăm soluția și oferim suport continuu pentru îmbunătățiri și scalare.",
  },
];

const Process = () => {
  return (
    <section id="proces" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Proces</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Cum <span className="gradient-text">lucrăm</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proces structurat care garantează rezultate predictibile și de calitate.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-8 text-center relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-secondary/80 flex items-center justify-center mx-auto mt-4 mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
