import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// PDF display constants
const MOBILE_BREAKPOINT = 786;
const DESKTOP_SCALE = 0.8;
const MOBILE_SCALE = 0.8;
const INITIAL_PAGE = 1;

interface PDFViewerProps {
    pdfUrl: string;
}

function PDFViewer({ pdfUrl }: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(INITIAL_PAGE);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        // Set initial width
        setWidth(window.innerWidth);

        // Update width on resize
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const handlePrevPage = (e: React.MouseEvent) => {
        e.preventDefault();
        setPageNumber(page => Math.max(page - 1, INITIAL_PAGE));
    };

    const handleNextPage = (e: React.MouseEvent) => {
        e.preventDefault();
        setPageNumber(page => Math.min(page + 1, numPages));
    };

    const scale = width > MOBILE_BREAKPOINT ? DESKTOP_SCALE : MOBILE_SCALE;

    return (
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-xl w-full overflow-x-hidden">
                <div className="min-h-[400px] md:min-h-[600px] flex justify-center items-center">
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
                            scale={scale}
                            width={width > MOBILE_BREAKPOINT ? undefined : width - 64}
                        />
                    </Document>
                </div>
                <div className="flex justify-between items-center mt-6 text-fun-gray">
                    <button
                        onClick={handlePrevPage}
                        disabled={pageNumber <= INITIAL_PAGE}
                        className="px-4 py-2 bg-fun-pink-darker text-fun-pink rounded hover:bg-fun-pink hover:text-white transition-colors disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                    <button
                        onClick={handleNextPage}
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