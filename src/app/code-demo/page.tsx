"use client";

import React from "react";
import { DeveloperProfile } from "@/components/common/code-block/code-profile";
import { CodeEditor } from "@/components/common/code-block/code-editor";
import { CodeWindow } from "@/components/common/code-block/code-window";

export default function CodeDemoPage() {
  const customCode = `// Example React component
function GreetingCard({ name, role }) {
  return (
    <div className="card">
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
      <button onClick={() => alert(\`Welcome, \${name}!\`)}>
        Say Hello
      </button>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Code Display Components</h1>
          <p className="text-gray-400">
            Beautiful code display components using react-syntax-highlighter
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-white mb-6">Developer Profile</h2>
          <DeveloperProfile />
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-6">Basic Code Window</h2>
          <CodeWindow 
            title="example.jsx" 
            language="jsx" 
            code={customCode} 
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-6">Editable Code Window</h2>
          <p className="text-gray-400 mb-4">Hover to see the edit button, click to modify the code</p>
          <CodeEditor 
            title="editable.jsx" 
            language="jsx" 
            initialCode={customCode} 
          />
        </section>
      </div>
    </div>
  );
} 