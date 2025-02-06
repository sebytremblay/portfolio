import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
    pdfUrl: string;
}

function PDFViewer({ pdfUrl }: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto">
            <div className="bg-fun-gray-dark p-4 rounded-lg shadow-xl w-full">
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="flex justify-center"
                >
                    <Page 
                        pageNumber={pageNumber} 
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        className="max-w-full"
                    />
                </Document>
                <div className="flex justify-between items-center mt-4 text-fun-gray">
                    <button 
                        onClick={() => setPageNumber(page => Math.max(page - 1, 1))}
                        disabled={pageNumber <= 1}
                        className="px-4 py-2 bg-fun-pink-darker text-fun-pink rounded hover:bg-fun-pink hover:text-white transition-colors disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                    <button 
                        onClick={() => setPageNumber(page => Math.min(page + 1, numPages))}
                        disabled={pageNumber >= numPages}
                        className="px-4 py-2 bg-fun-pink-darker text-fun-pink rounded hover:bg-fun-pink hover:text-white transition-colors disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PDFViewer; 