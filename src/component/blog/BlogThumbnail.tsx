export default function BlogThumbnail({url, alt}: {url: string, alt: string}){
    return (
        <div className="flex flex-col justify-center max-w-[200px]">
            <img src={url} alt={alt}/>
        </div>
    )
}