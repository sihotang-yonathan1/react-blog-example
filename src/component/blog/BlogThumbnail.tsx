export default function BlogThumbnail({url, alt}: {url: string, alt: string}){
    return (
        <div>
            <img src={url} alt={alt}/>
        </div>
    )
}