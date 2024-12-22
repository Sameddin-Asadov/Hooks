import { useState } from "react"


function useClipboard(text :string ) {
    const [ copyText, setCopyText] = useState(false)

    const copy  = ()=>{
        navigator.clipboard.writeText(text)
        .then(()=> setCopyText(true))
        .catch(()=> setCopyText(false) )
    }
  return[copy , copyText]
}

export default useClipboard

