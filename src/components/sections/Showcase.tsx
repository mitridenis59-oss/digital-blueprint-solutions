import { motion } from "framer-motion";
import { TrendingUp, Users, Activity, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

const kpis = [
  { label: "Venituri totale", value: "€245,890", change: "+12.5%", positive: true, icon: DollarSign },
  { label: "Utilizatori activi", value: "8,432", change: "+8.2%", positive: true, icon: Users },
  { label: "Conversie", value: "24.8%", change: "-2.1%", positive: false, icon: Activity },
  { label: "Creștere lunară", value: "18.3%", change: "+5.4%", positive: true, icon: TrendingUp },
];

const tableData = [
  { id: "PRJ-001", project: "Dashboard Analytics", status: "Activ", progress: 85 },
  { id: "PRJ-002", project: "Sistem CRM", status: "În lucru", progress: 62 },
  { id: "PRJ-003", project: "Portal Clienți", status: "Activ", progress: 100 },
  { id: "PRJ-004", project: "Automatizare HR", status: "Planificat", progress: 15 },
];

const Showcase = () => {
  return (
    <section id="solutii" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Showcase</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Aplicații web <span className="gradient-text">în acțiune</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Exemplu de dashboard modern cu KPI-uri, tabele și grafice - exact ce construim pentru clienți.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
          
          {/* Dashboard Container */}
          <div className="relative glass-card rounded-2xl border border-border/50 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted-foreground">dashboard.digitech.app</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {kpis.map((kpi, index) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-secondary/50 rounded-xl p-4 border border-border/30"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <kpi.icon className="w-5 h-5 text-muted-foreground" />
                      <span className={`text-xs flex items-center gap-1 ${kpi.positive ? 'text-accent' : 'text-destructive'}`}>
                        {kpi.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {kpi.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold">{kpi.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{kpi.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart + Table Grid */}
              <div className="grid lg:grid-cols-5 gap-6">
                {/* Chart Area */}
                <div className="lg:col-span-3 bg-secondary/30 rounded-xl p-6 border border-border/30">
                  <h4 className="text-sm font-medium mb-4">Performanță lunară</h4>
                  <div className="h-48 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                    <span>Ian</span>
                    <span>Dec</span>
                  </div>
                </div>

                {/* Table Area */}
                <div className="lg:col-span-2 bg-secondary/30 rounded-xl p-6 border border-border/30">
                  <h4 className="text-sm font-medium mb-4">Proiecte recente</h4>
                  <div className="space-y-3">
                    {tableData.map((row, i) => (
                      <motion.div
                        key={row.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="text-xs text-muted-foreground w-16">{row.id}</span>
                        <span className="flex-1 truncate">{row.project}</span>
                        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            style={{ width: `${row.progress}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real Images Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1661961112951-fd8c5a1c07dd" 
              alt="Modern tech workspace" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="font-semibold">Medii de lucru moderne</h4>
              <p className="text-sm text-muted-foreground">Infrastructură cloud scalabilă</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
              alt="Data analytics dashboard" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="font-semibold">Analiză de date</h4>
              <p className="text-sm text-muted-foreground">Vizualizări interactive și rapoarte</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
