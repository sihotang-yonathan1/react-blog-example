export default function Route({url_path, children}: {url_path: string, children: React.ReactNode}){
    return window.location.pathname.match(url_path) ? children : null;
}