import { createContext} from "react";

// TODO: move object type in separate file
type RoutePathMap = {
    'url': string | null,
    'matcher': RegExpMatchArray | null
}

export const RoutePathContext = createContext<RoutePathMap>({
    'url': null,
    'matcher': null
})

export function RoutePathProvider({urlPattern, children}: {urlPattern: string, children: React.ReactNode}){
    const urlMatcher = window.location.pathname.match(urlPattern)
    return (
        urlMatcher !== null
        && <RoutePathContext.Provider value={{url: urlPattern, matcher: urlMatcher}}>
            {children}
        </RoutePathContext.Provider>
    )
}