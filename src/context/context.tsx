"use client"
import { createContext, useState } from "react";

export const Context = createContext({ isProjectActive: false, setIsProjectActive: (isProjectActive: boolean) => {}});
export const ContextProvider = ({ children }: {children: any}) => {
    const [isProjectActive, setIsProjectActive] = useState(false);
 
    return (
        <Context.Provider value={{ isProjectActive, setIsProjectActive }}>
            {children}
        </Context.Provider>
    );
};