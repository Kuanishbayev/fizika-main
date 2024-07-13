import { FaFileDownload } from "react-icons/fa";

export const Test_7_klass = () => {

    return (
        <div className="pdf-box">
            <a href="https://docs.google.com/document/d/1l424H34brlqDZ915jdXUD3dFrmOtfQaF/export?format=docx" title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <iframe src="https://docs.google.com/document/d/1l424H34brlqDZ915jdXUD3dFrmOtfQaF/preview" className='docc' allow="autoplay"></iframe>
        </div>
    )
}