export default function BlogThumbnail({url, alt}: {url: string, alt: string}){
    return (
        <div className="max-w-[100px]">
            <img src={url} alt={alt}/>
        </div>
    )
}