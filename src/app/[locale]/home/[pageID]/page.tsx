export default function PageID({ params }: { params: { pageID: string } }) {
    return (
        <>
            <div>Pagina dinamica per ID: {params.pageID}</div>
        </>
    )
}

export async function generateStaticParams() {
    // Simula una lista di ID; in un caso reale potresti fetchare da un CMS o API
    const pageIDs = ['1', '2', '3'];

    return pageIDs.map((id) => ({
        pageID: id,
    }));
}