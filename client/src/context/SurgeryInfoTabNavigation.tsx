import { createContext, useState } from "react";

type SurgeryInfoNavType = {
    cur: string;
    setCur: (t: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const SurgeryInfoNavContext: React.Context<SurgeryInfoNavType | null> = createContext<SurgeryInfoNavType | null>(null);

export function SurgeryInfoNavProvider({children}: {children: React.ReactNode}) {
    const [cur, setCur] = useState<string>("Overview");
    
    return (
        <SurgeryInfoNavContext.Provider value={{cur, setCur}}>
            {children}
        </SurgeryInfoNavContext.Provider>
    );
}

