"use client";

import { BookMinus, Waypoints, BarChart3 } from "lucide-react";
import { JSX } from "react";

type Step = {
  id: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  number: string;
  title: string;
  description: string;
};

const content: {
  title: string;
  subtitle: string;
  steps: Step[];
} = {
  title: "Come funziona? Semplice.",
  subtitle:
    "Bastano tre passaggi per trasformare i tuoi dati grezzi in informazioni preziose e pronte all'uso.",
  steps: [
    {
      id: "step1",
      icon: (props) => <BookMinus {...props} />,
      number: "01",
      title: "Collega i tuoi dati",
      description:
        "Importa facilmente documenti, inserisci URL o connetti le tue fonti dati esistenti in pochi clic. La piattaforma si occupa del resto.",
    },
    {
      id: "step2",
      icon: (props) => <Waypoints {...props} />,
      number: "02",
      title: "Elabora e Analizza",
      description:
        "La nostra IA analizza e struttura i contenuti, estraendo le informazioni chiave e identificando i pattern più importanti per te.",
    },
    {
      id: "step3",
      icon: (props) => <BarChart3 {...props} />,
      number: "03",
      title: "Ottieni Risultati",
      description:
        "Visualizza i risultati attraverso dashboard interattive, ricevi report dettagliati e ottieni risposte immediate alle tue domande.",
    },
  ],
};

const StepConnector = () => (
  <div
    aria-hidden="true"
    className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px hidden lg:block"
  >
    <svg
      className="w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 1"
    >
      <path
        d="M 0,0.5 L 100,0.5"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </div>
);

export const SectionTypeHowIt = () => {
  return (
    <section id="how-it-works" className="w-full py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* --- Intestazione della Sezione --- */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {/* Testo prelevato dalla variabile `content` */}
            {content.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <StepConnector />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {/* Mappiamo sull'array `content.steps` */}
            {content.steps.map(
              ({ id, icon: Icon, number, title, description }) => (
                <div
                  key={id}
                  className="relative overflow-hidden bg-card border border-border rounded-3xl p-8 shadow-sm"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-4 text-8xl font-extrabold text-primary/5 -z-0"
                  >
                    {number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
