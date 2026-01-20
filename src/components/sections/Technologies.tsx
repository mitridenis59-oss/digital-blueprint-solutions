import { motion } from "framer-motion";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "REST API", category: "Integration" },
  { name: "Cloud", category: "Infrastructure" },
];

const Technologies = () => {
  return (
    <section id="tehnologii" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Tehnologii</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Stack <span className="gradient-text">modern</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Folosim cele mai noi tehnologii pentru aplicații performante și scalabile.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <div className="text-xl font-semibold mb-1">{tech.name}</div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Plus integrări cu: <span className="text-foreground">Stripe</span>, <span className="text-foreground">SendGrid</span>, <span className="text-foreground">OpenAI</span>, <span className="text-foreground">AWS</span> și altele.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
