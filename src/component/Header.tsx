const headerMenuInfo = [{
    'name': 'home',
    'url': '/'
}, {
    'name': 'blogs',
    'url': '/'
}, {
    'name': 'about',
    'url': '#'
}]

export default function Header(){
    return (
        <header className="flex flex-row py-2 bg-[#7ABA78] justify-between px-[8%] text-white">
            <div className="flex">
                <p>Yonathan</p>
            </div>
            <div className="flex flex-row">
                {headerMenuInfo.map((menu, index) => <HeaderMenu name={menu.name} url={menu.url} key={`menu-item-${index}`}/>)}
            </div>
        </header>
    )
}

export function HeaderMenu({name, url}: {name: string, url: string}){
    return (
        <div className="mx-2 hover:bg-[#0A6847] p-1">
            <a href={url}>
                {name}
            </a>
        </div>
    )
}