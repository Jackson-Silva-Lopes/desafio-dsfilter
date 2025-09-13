import { createContext } from "react";


export type ContextCountType = {
    contextCount: number;
    setContextCount: (ContextCount: number) => void;
}

export const ContextCount = createContext<ContextCountType>({
    contextCount: 0,
    setContextCount: () => {}
})