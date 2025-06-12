export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

export default function Home() {
  return (
    <div className="w-full h-screen flex gap-2 justify-center items-center">
      <div className="w-6 h-6 bg-green-400 dark:bg-red-400 rounded-full" />
      <h1 className="underline text-4xl font-bold ">Landing-Boilerplate </h1>
    </div>
  );
}
