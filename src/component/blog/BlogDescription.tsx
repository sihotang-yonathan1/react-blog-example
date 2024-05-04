export default function BlogDescription({description}: {description: string}){
    return (
        <div className="overflow-hidden text-ellipsis h-[100px] w-[100px]">
            <p className="text-ellipsis">{description}</p>
        </div>
    )
}