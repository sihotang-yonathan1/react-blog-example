export default function BlogContainer({children, url = "#"}: {children: React.ReactNode, url: string}) {
    return (
        <a href={url} className="hover:scale-105">
            <div className="border bg-[#F6E9B2] p-2">
                {children}
            </div>
        </a>
    )
}