import { useState } from "react";

export default function Copytext({quote}){
    const [isCopied, setIsCopied] = useState(false); 

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }


    const handleCopyClick = () => {

        copyTextToClipboard(quote)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
return (
<>
<span onClick={handleCopyClick} className="copy m-1 d-lg-none d-block"> <img src="/clipboard-outline.svg" alt="copy" />
<span className="fs-5">{isCopied ? 'Copied!' : null}</span>
</span>
</>
)
}