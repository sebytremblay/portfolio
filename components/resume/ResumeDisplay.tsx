import React, { useState, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePath from '@/data/content/resume';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Setup PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="flex justify-center">
      <Document file={resumePath} className="flex justify-center w-full">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} />
      </Document>
    </div>
  );
}

export default Resume;
