import { useContext } from "react";
import { SurgeryInfoNavContext } from "../context/SurgeryInfoTabNavigation";

export default function useSurgeryInfoNav() {
    const context = useContext(SurgeryInfoNavContext);

    if (!context) throw new Error("Tab nav cannot be used here!");

    return context;
}