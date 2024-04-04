import { useActiveSectionContext } from "@/contexts/active-section-context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"

export function useSectionInView( sectionName : SectionName, threshold = 0.5) {
    const { ref, inView } = useInView({
        threshold,
      })

    const { setActive, timeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActive(sectionName)
        }
    }, [inView, setActive, timeOfLastClick, sectionName])

    return {
        ref, 
    }
}