import React, { useRef, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
    const { quill, quillRef } = useQuill();

    React.useEffect(() => {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
      }
    }, [quill]);

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            console.log('Text change!');
            console.log('1', quill.getText()); // Get text only
            console.log('2', quill.getContents()); // Get delta contents
            console.log('3', quill.root.innerHTML); // Get innerHTML using quill
            console.log('4', quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
          });
        }
      }, [quill]);
  
    return (
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />

        <div className="html-preview">
        <h2>HTML Preview</h2>
        {
            quill ? 
            <>
                <div dangerouslySetInnerHTML={{ __html: quill.root.innerHTML }} />
                <span>{quill.root.innerHTML}</span>
            </> : <></>
        }
        </div>
      </div>
    );
};