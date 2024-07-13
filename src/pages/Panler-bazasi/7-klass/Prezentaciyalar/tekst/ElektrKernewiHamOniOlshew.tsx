import { FaFileDownload } from "react-icons/fa";

export const ElektrKernewiHamOniOlshew = () => {
    const fileURL = 'https://drive.google.com/file/d/1lTbOOCtsnb-mBDvVo-S5ZT0zmmy8PkAn'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Elektr kernewi hám onı ólshew</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}