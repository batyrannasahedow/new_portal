import { useRef, useState } from "react"
import { Root } from "../types/Types";

export const useHooks = () =>{
    const [input, setInput] = useState<boolean>(false);
    const [term, setTerm] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [headlines, setHeadlines] = useState<Root | null>(null)

    return {input, setInput, term, setTerm, inputRef, headlines, setHeadlines }
}