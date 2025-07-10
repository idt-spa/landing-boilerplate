"use client";

import { BarChart3, Code, ShieldCheck, Cpu, Scaling, AppWindow } from "lucide-react";

type Feature = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const content = {
  title: "Tutto ciò di cui hai bisogno, e anche di più",
  subtitle: "La nostra piattaforma è progettata per essere potente, flessibile e sicura. Scopri le funzionalità che ci rendono la scelta ideale per il tuo progetto.",

  features: [
    {
      id: "accuracy",
      icon: Cpu,
      title: "Precisione IA Avanzata",
      description: "Sfrutta modelli di intelligenza artificiale all'avanguardia per ottenere risultati precisi e affidabili in ogni analisi."
    },
    {
      id: "realTime",
      icon: AppWindow,
      title: "Dashboard in Tempo Reale",
      description: "Monitora le performance e visualizza i dati istantaneamente attraverso una dashboard intuitiva e completamente personalizzabile."
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analisi Dettagliate",
      description: "Accedi a report approfonditi e analytics complete per prendere decisioni basate sui dati e ottimizzare le tue strategie."
    },
    {
      id: "integration",
      icon: Code,
      title: "Integrazione Semplice",
      description: "Connetti facilmente la nostra piattaforma ai tuoi strumenti esistenti grazie a API potenti e documentazione chiara."
    },
    {
      id: "privacy",
      icon: ShieldCheck,
      title: "Privacy e Sicurezza",
      description: "I tuoi dati sono al sicuro. Applichiamo i più alti standard di sicurezza e rispettiamo la privacy in ogni fase del processo."
    },
    {
      id: "scalability",
      icon: Scaling,
      title: "Scalabilità Garantita",
      description: "La nostra architettura cloud-native si adatta alla crescita del tuo business, garantendo performance ottimali a qualsiasi scala."
    },
  ] as const,
};

const DottedBackground = () => (
  <div
    className="absolute inset-0 -z-10"
    aria-hidden="true"
    style={{
      backgroundImage:
        "radial-gradient(circle at center, var(--color-border) 1px, transparent 1px)",
      backgroundSize: "2rem 2rem",
    }}
  />
);


export const SectionFeatures = () => {
  return (
    <section
      id="features"
      className="relative w-full bg-background py-24 sm:py-32"
    >
      <DottedBackground />
      <div className="container mx-auto px-6">
        {/* --- Intestazione della Sezione --- */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {/* Il testo viene prelevato direttamente dalla variabile `content` */}
            {content.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="group relative bg-card p-8 border border-border rounded-3xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6 transition-colors duration-300 group-hover:bg-primary">
                <Icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}