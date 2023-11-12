import { useEffect, useRef } from "react"

export function FocusableInput(){
    const trackRef = useRef(null)
    useEffect(() => {
        trackRef.current?.focus()
    }, [])

    return (
        <div>
            <input ref={trackRef} type="text" />
        </div>
    )
}