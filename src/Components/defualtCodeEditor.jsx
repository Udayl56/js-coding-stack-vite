import { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { runCode } from "./compileAPI";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck, FaPlay } from "react-icons/fa";


export const JsCodeEditor = () => {

    const JsStack = "/* \nJs Coding Stack Code Editor\n✅ Try it!\nIf you encounter any issue in problem or bug please feel to report,\n I'm trying to fix it.\nLet do coding with Js coding stack.\n*/\n\n\nconsole.log(\"Hello,👋 I'm Uday! How was today?\");\n\n\n//✌keep coding!";
    const [showCopied, setShowCopied] = useState(false);
    const [code, setCode] = useState(JsStack);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState('');
    const [output, setOutput] = useState({

    });

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const OutputCode = async () => {
        try {

            setLoading(true);
            const responseData = await runCode(code);
            setLoading(false);
            setOutput(responseData);

        } catch (error) {
            alert(error.message);
        }
    };


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

    const solution = () => {

        if ((output.exception || output.stderr)) {
            return (

                <div className="text-danger p-2 rounded-3 m-1" style={{ background: ' #3C3C3C' }}>

                    {output.exception && (
                        <div>Exception: {output.exception}</div>
                    )}
                    {output.stderr && (
                        <div>Stderr: {output.stderr}</div>
                    )}


                </div>
            );
        }
        else {
            if (output.stdout) {
                return (
                    <div className=" text-light p-2 rounded-3 m-1 newline w-100" >
                        {output.stdout}
                    </div>)
            }
            else {
                return (
                    <div className=" text-warning p-2 rounded-3 m-1 newline w-100" >
                        {output.err}
                    </div>)
            }
        }
    }
    return (
        <>
            <div className="col-md-7 p-1 pt-0" >
                <div className=" w-100 p-0 m-0 ">

                    <div className=" text-light d-flex  align-items-center justify-content-end p-0 m-0" style={{ height: "40px" }}> <span onClick={handleCopyClick}  >{showCopied ? <div className="text-light">
                        <FaCheck color="green" /> <span style={{ color: 'white' }}>Copied!</span>
                    </div> : <div className="text-light"><FaRegCopy /></div>}
                    </span>
                    </div>


                    <CodeMirror
                        value={code}
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
            <div className="col-md-5 ">
                <div className=" text-light d-flex  align-items-center  p-0 m-0" style={{ height: "40px" }}>
                    <button className="ps-4 pe-4 fw-bold text-center rounded-5" style={{
                        border: '2px solid #ED8403', background: 'none', color: '#ED8403'
                    }} onClick={OutputCode}> {isLoading ? 'Compiling..' : < span >Run <FaPlay /></span>
                        }  </button>
                </div>
                <div className='p-2 border-cm rounded-3' style={{ overflowY: 'auto', height: '540px', overflowX: 'hidden' }}>
                    <span className="text-light">Output</span>

                    {solution()
                    }
                </div>


            </div>
        </>
    )
}