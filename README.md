# Next.js Landing Boilerplate

## 1. Descrizione

Questa è un'applicazione web moderna costruita con Next.js, React, e TypeScript. La caratteristica principale del progetto è il suo supporto all'internazionalizzazione (i18n), con gestione delle lingue inglese (`en`) e italiana (`it`). Il routing è basato sulla lingua selezionata nell'URL (es. `/en/...` o `/it/...`).

Lo stile è gestito tramite Tailwind CSS e l'interfaccia utente è costruita utilizzando componenti React riutilizzabili, seguendo le best practice di sviluppo moderno.

## 2. Tecnologie Principali

- **Framework:** [Next.js](https://nextjs.org/)
- **Libreria UI:** [React](https://react.dev/)
- **Linguaggio:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Internazionalizzazione (i18n):** [next-intl](https://next-intl-docs.vercel.app/)
- **Componenti UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Icone:** [Lucide React](https://lucide.dev/)

## 3. Prerequisiti

Prima di iniziare, assicurati di avere installato sul tuo sistema:
- [Node.js](https://nodejs.org/) (versione 18.x o superiore)
- [npm](https://www.npmjs.com/) (generalmente incluso con Node.js)

## 4. Installazione ed Esecuzione

Segui questi passaggi per far girare il progetto in locale:

1.  **Clona il repository:**
    ```bash
    git clone <URL_DEL_TUO_REPOSITORY>
    cd <NOME_DELLA_CARTELLA>
    ```

2.  **Installa le dipendenze:**
    ```bash
    npm install
    ```

3.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    ```

4.  **Apri l'applicazione nel browser:**
    L'applicazione sarà disponibile ai seguenti indirizzi:
    - Per la versione italiana: [http://localhost:3000/it](http://localhost:3000/it)
    - Per la versione inglese: [http://localhost:3000/en](http://localhost:3000/en)

## 5. Script Disponibili

- `npm run dev`: Avvia l'applicazione in modalità sviluppo.
- `npm run build`: Compila l'applicazione per la produzione.
- `npm run start`: Avvia un server di produzione dopo la build.
- `npm run lint`: Esegue l'analisi statica del codice per trovare errori.

## 7. Internazionalizzazione (i18n)

- Le traduzioni sono gestite tramite i file `en.json` e `it.json` nella cartella `src/messages`.
- La logica per caricare i messaggi corretti in base alla lingua è definita in `src/request.ts`.
- Il layout principale in `src/app/[locale]/layout.tsx` gestisce la generazione delle pagine statiche per ogni lingua supportata e imposta la lingua nel tag `<html>`.

---

## 🔒 Prompt per l'Assistente AI

**(Da usare per ricaricare rapidamente il contesto del progetto)**

---

**Profilo del Progetto:**

*   **Stack Tecnologico:** Applicazione web basata su Next.js (~15) con App Router, React (~19), e TypeScript.
*   **Styling:** Utilizza Tailwind CSS per l'utility-first styling, con `clsx` e `tailwind-merge` per la gestione delle classi.
*   **Funzionalità Chiave:** Internazionalizzazione (i18n) implementata con `next-intl`.
*   **Lingue Supportate:** Italiano (`it`) e Inglese (`en`).
*   **Routing:** Il routing è localizzato e gestito dalla cartella `src/app/[locale]`. Le pagine vengono generate staticamente per ogni lingua.
*   **Gestione Lingue:** La configurazione di `next-intl` e la logica di fallback della lingua si trovano in `src/request.ts`. I file di traduzione sono in formato JSON e si trovano in `src/messages/`.
*   **Componenti:** I componenti riutilizzabili si trovano in `src/components`. Usa `shadcn/ui`.
*   **Metadati:** I metadati della pagina (titolo, descrizione) sono anch'essi internazionalizzati e caricati dai file JSON delle traduzioni.
