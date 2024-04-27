import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Problem } from "./Problem"

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';

import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export const CodeEditor = () => {

    const data = useLoaderData();

    const [code, setCode] = useState(data.starterCode);
    const [showCopied, setShowCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setShowCopied(true);
            setTimeout(() => {
                setShowCopied(false);
            }, 3000);
        } catch (err) {
            alert("Copy to clipboard failed.");
        }

    };
    return (
        <>
            <div className="col-md-6 p-1">
                <Problem code={code} />
            </div>
            <div className="col-md-6 p-1 pt-0" >
                <div className=" w-100 p-0 m-0 ">
                    <div className=" text-light d-flex  align-items-center justify-content-end p-0 m-0" style={{ height: "40px" }}> <span onClick={handleCopyClick}  >{showCopied ? <div className="text-light">
                        <FaCheck color="green" /> <span style={{ color: 'white' }}>Copied!</span>
                    </div> : <FaRegCopy />}
                    </span>
                    </div>
                    <CodeMirror
                        value={data.starterCode}
                        height="540px"
                        extensions={[javascript()]}
                        theme={tokyoNight}
                        options={{
                            lineNumbers: true,
                            mode: 'javascript',
                        }}
                        onChange={(value) => { setCode(value); }}
                    />
                </div>
            </div>
        </>
    )
}