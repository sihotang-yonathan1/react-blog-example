export default function BlogDescription({description}: {description: string}){
    return (
        <div className="overflow-hidden text-ellipsis">
            <p className="text-ellipsis">{description}</p>
        </div>
    )
}