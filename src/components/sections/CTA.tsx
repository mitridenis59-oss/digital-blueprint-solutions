import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transformă procesele în{" "}
            <span className="gradient-text">soluții digitale eficiente</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Hai să discutăm despre cum putem digitaliza și optimiza procesele din compania ta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <MessageSquare className="w-5 h-5" />
              Discută proiectul tău
            </Button>
            <Button variant="heroOutline" size="lg">
              Programează un call
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-4">De încredere pentru companii din:</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/60">
              {["Fintech", "Retail", "Logistică", "Producție", "Servicii"].map((industry) => (
                <span key={industry} className="text-sm font-medium">
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
