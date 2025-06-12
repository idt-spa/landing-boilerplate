import DynamicPageClient from "@/components/organisms/DynamicPageClient";


export function generateStaticParams() {
  return [
    { locale: "en", pageID: "1" },
    { locale: "it", pageID: "1" },
    // altre combinazioni
  ];
}

export default function PageID({ params }: { params: { pageID: string; locale: string } }) {
  return <DynamicPageClient pageID={params.pageID} />;
}