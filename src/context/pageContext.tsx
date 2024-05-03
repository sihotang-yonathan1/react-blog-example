import { Dispatch, SetStateAction, createContext, useState } from "react";

type PageOptionType = {
    'element': React.ReactElement | null,
    'url': string
}

type PageContextType = {
    'page': PageOptionType | null,
    'setPage': Dispatch<SetStateAction<PageOptionType | null>> 
}

export const PageContext = createContext<PageContextType>({
    page: {
        element: null,
        url: '#',
    },
    setPage: () => {}
})

export function PageProvider({children}: {children: React.ReactNode}){
    const [currentPage, setCurrentPage] = useState<PageOptionType | null>({
        element: null,
        url: "#"
    })
    return (
        <PageContext.Provider value={{page: currentPage, setPage: setCurrentPage}}>
            {children}
        </PageContext.Provider>
    )
}