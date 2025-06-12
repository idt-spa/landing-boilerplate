import DynamicPageClient from "@/components/organisms/DynamicPageClient";

export function generateStaticParams() {
  return [
    { locale: "en", pageID: "1" },
    { locale: "it", pageID: "1" },
    // altre combinazioni
  ];
}

type Props = {
  params: Promise<{ pageID: string; locale: string }>;
};

export default async function PageID({ params }: Props) {
  const { pageID } = await params;

  return <DynamicPageClient pageID={pageID} />;
}
