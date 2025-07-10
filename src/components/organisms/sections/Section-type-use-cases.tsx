"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Store, TramFront, PartyPopper } from "lucide-react";
import { JSX } from "react";

type UseCase = {
  id: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
  description: string;
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
};

const content: {
  title: string;
  subtitle: string;
  primaryCta: string;
  cases: UseCase[];
} = {
  title: "Applicazioni per ogni settore",
  subtitle:
    "Dalla vendita al dettaglio ai grandi eventi, la nostra tecnologia si adatta per fornirti le informazioni di cui hai bisogno per crescere e ottimizzare.",
  primaryCta: "Inizia la tua prova gratuita",
  cases: [
    {
      id: "retail",
      icon: (props) => <Store {...props} />,
      title: "Negozi e Retail",
      description:
        "Analizza i flussi dei clienti, ottimizza il layout del tuo negozio e migliora l'esperienza d'acquisto per aumentare le vendite.",
      media: {
        type: "image",
        src: "/images/localstore.jpg",
        alt: "Interno di un negozio locale ben illuminato",
      },
    },
    {
      id: "transport",
      icon: (props) => <TramFront {...props} />,
      title: "Trasporti e Spazi Pubblici",
      description:
        "Monitora l'affluenza nelle stazioni, ottimizza gli orari e migliora la sicurezza gestendo i flussi di persone in tempo reale.",
      media: {
        type: "image",
        src: "/images/visitors-heatmap.png",
        alt: "Heatmap che mostra i flussi di visitatori in un'area",
      },
    },
    {
      id: "events",
      icon: (props) => <PartyPopper {...props} />,
      title: "Eventi e Fiere",
      description:
        "Ottieni una visione chiara sulla partecipazione, gestisci le code e misura il successo del tuo evento con dati accurati e live.",
      media: {
        type: "video",
        src: "/videos/accuracy.mp4",
        alt: "Video dimostrativo dell'analisi dei flussi durante un evento",
      },
    },
  ],
};

const UseCaseItem = ({
  useCase,
  index,
}: {
  useCase: UseCase;
  index: number;
}) => {
  return (
    <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Punto di connessione sulla linea verticale (per desktop) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full hidden lg:block" />

      <div
        className={cn(
          "flex items-center justify-center",
          index % 2 !== 0 && "lg:order-last", // Alterna la posizione
        )}
      >
        <div className="relative w-full">
          <div className="absolute -inset-4 bg-accent/10 rounded-4xl blur-2xl -z-10" />
          {useCase.media.type === "video" ? (
            <div className="relative w-full aspect-video bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={useCase.media.src} type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </div>
          ) : (
            <Image
              src={useCase.media.src}
              alt={useCase.media.alt}
              width={550}
              height={310}
              className="aspect-video w-full rounded-3xl object-cover shadow-lg border border-border"
            />
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col space-y-4 text-center",
          index % 2 !== 0 ? "lg:text-right" : "lg:text-left",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3 justify-center",
            index % 2 !== 0 ? "lg:justify-end" : "lg:justify-start",
          )}
        >
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {useCase.title}
          </h3>
        </div>
        <p className="text-muted-foreground md:text-lg leading-relaxed">
          {useCase.description}
        </p>
      </div>
    </div>
  );
};

export const SectionTypeUseCases = () => {
  return (
    <section id="use-cases" className="w-full bg-background py-24 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Intestazione della sezione */}
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg leading-relaxed text-muted-foreground">
            {content.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`#final-cta`}
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {content.primaryCta}
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32 relative">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-border hidden lg:block"
          />
          {content.cases.map((useCase, index) => (
            <UseCaseItem key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
