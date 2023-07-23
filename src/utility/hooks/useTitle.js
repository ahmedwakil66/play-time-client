import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `PlayTime | ${title}`;
    }, [title])
}

export default useTitle;