
import { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { javascript } from '@codemirror/lang-javascript';

export const CodeOutput = ({ Outputdata, data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const checkSolution = () => {
        setIsOpen(!isOpen);
    };



    if (Outputdata.err) {
        return (
            <div className="p-2  rounded-3 mt-2 text-danger border-cm" >
                <span className="">Output</span>
                <div>{Outputdata.err}</div>
            </div>)

    }

    else if (Outputdata.exception || Outputdata.stderr) {
        return (

            <div className="p-2  rounded-3 mt-2 text-danger border-cm" >
                <span className="">Output</span>
                {Outputdata.exception && (
                    <div>Exception: {Outputdata.exception}</div>
                )}
                {Outputdata.stderr && (
                    <div>Stderr: {Outputdata.stderr}</div>
                )}
            </div>
        );
    }
    else {

        if (Outputdata && Outputdata.stdout) {

            const outputarr = Outputdata.stdout.trim().split('\n');
            return (
                <div className="p-2  rounded-3 mt-2 border-cm" >
                    <span className="">Output</span>
                    <ul className="m-0 p-0 d-flex flex-column list-unstyled">
                        {
                            outputarr.map((output, index) => {
                                return (
                                    <li key={index} className='flex-fill p-1' >
                                        Test {index + 1}: <span className={output == data.tests[index]?.expectedOutput ? "text-success " : "text-danger"}></span>
                                        <ul className="m-0 p-0 list-unstyled text-light">
                                            <li className={output == data.tests[index]?.expectedOutput ? "bg-success p-2 rounded-3 m-1" : "warning-bg p-2 rounded-3 m-1"}>Output : {output} </li>
                                            <li className="p-2 rounded-3 m-1" style={{ background: ' #3C3C3C' }}>Expected : {data.tests[index]?.expectedOutput}</li>
                                        </ul>
                                        <hr className="m-0" />
                                    </li>);
                            })
                        }
                    </ul>
                    <div className=" d-flex justify-content-end">
                        <button className="ps-4 pe-4 m-1  fw-bold text-center rounded-5" style={{
                            border: '2px solid #ED8403', background: 'none', color: '#ED8403'
                        }} onClick={checkSolution}>  {isOpen ? 'Closed' : 'Solution'}</button>
                    </div>
                    <div>
                        {isOpen && (
                            <div className="p-2 border-cm rounded-2">
                                <CodeMirror
                                    value={data.solution}
                                    height="200px"
                                    extensions={[javascript()]}
                                    theme={tokyoNight} options={{
                                        editable: false,
                                        lineNumbers: true,
                                        mode: 'javascript',
                                    }}
                                />
                            </div>)}
                    </div>

                </div>

            );
        }
    }


}