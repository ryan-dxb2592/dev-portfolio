"use client";

import React, { useState } from "react";
import { CodeWindow } from "./code-window";

interface CodeEditorProps {
  initialCode: string;
  title?: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  title = "editor.js",
  language = "javascript",
  showLineNumbers = true,
}) => {
  const [code, setCode] = useState(initialCode);
  const [editing, setEditing] = useState(false);

  // Switch to edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Save changes and exit edit mode
  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="relative">
      {editing ? (
        <div className="rounded-lg overflow-hidden border border-gray-800 shadow-lg max-w-3xl w-full">
          {/* Window title bar */}
          <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              {title && <div className="ml-4 text-gray-400 text-sm">{title}</div>}
            </div>
            <button
              className="text-sm text-gray-400 hover:text-white px-2 py-1 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          </div>

          {/* Code editor */}
          <div className="bg-[#1E1E1E] p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[300px] bg-[#1E1E1E] text-gray-300 font-mono text-sm p-0 outline-none border-none resize-none"
              spellCheck="false"
            />
          </div>
        </div>
      ) : (
        <div className="group">
          <CodeWindow 
            title={title} 
            language={language} 
            code={code} 
            showLineNumbers={showLineNumbers} 
          />
          <button
            className="absolute top-3 right-3 bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}; 