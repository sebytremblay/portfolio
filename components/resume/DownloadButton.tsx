import React, { useState, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import resumePath from '@/data/content/resume';

function DownloadButton() {
    return (
        <div className="flex justify-center my-5">
            <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
                <AiOutlineDownload className="mr-2" />
                Download CV
            </a>
        </div>
    );
}

export default DownloadButton;
