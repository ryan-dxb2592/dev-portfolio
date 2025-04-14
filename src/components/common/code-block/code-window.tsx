"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  vscDarkPlus,
  dark,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeWindowProps {
  title?: string;
  language?: string;
  code: string;
  showLineNumbers?: boolean;
}

export const CodeWindow: React.FC<CodeWindowProps> = ({
  title = "developer.js",
  language = "javascript",
  code,
  showLineNumbers = true,
}) => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-800 shadow-lg ">
      {/* Window title bar */}
      <div className="bg-gray-900 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        {title && <div className="ml-4 text-gray-400 text-sm">{title}</div>}
      </div>

      {/* Code content */}
      <div className="bg-[#091121] p-2">
        <SyntaxHighlighter
          wrapLines
          wrapLongLines={true}
          language={language}
          style={darcula}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "2rem",
            background: "#091121",
            borderRadius: 0,
            fontSize: "16px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
