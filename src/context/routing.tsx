import { Dispatch, SetStateAction, createContext, useState } from "react";


type RouteProviderOption = {
    option: object,
    setOption: Dispatch<SetStateAction<object>>
}

export const RouteContext = createContext<RouteProviderOption>({
    option: {},
    setOption: () => {}
});

export function NavigationProvider({children}: {children: React.ReactNode}){
    const [routeOption, setRouteOption] = useState({})
    return (
        <RouteContext.Provider value={{option: routeOption, setOption: setRouteOption}}>
            {children}
        </RouteContext.Provider>
    )
}