import React from "react";
import { getSvgPath, getSvgStyle } from "@/lib/svg-utils";

export function SvgDemo() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">SVG Icon Demo</h2>

      <div className="space-y-4">
        <h3 className="text-xl">Default SVG Icons</h3>
        <div className="flex flex-wrap gap-4">
          {/* Basic usage with img tags */}
          <img
            src={getSvgPath("backend", "fast-api")}
            alt="FastAPI Logo"
            style={getSvgStyle()}
          />
          <img
            src={getSvgPath("ai", "langchain")}
            alt="LangChain Logo"
            style={getSvgStyle()}
          />
          <img
            src={getSvgPath("ai", "n8n")}
            alt="n8n Logo"
            style={getSvgStyle()}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl">Customized Size</h3>
        <div className="flex flex-wrap gap-4 items-end">
          <img
            src={getSvgPath("ai", "openai")}
            alt="OpenAI Logo"
            style={getSvgStyle(16, 16)}
          />
          <img
            src={getSvgPath("ai", "openai")}
            alt="OpenAI Logo"
            style={getSvgStyle(32, 32)}
          />
          <img
            src={getSvgPath("ai", "openai")}
            alt="OpenAI Logo"
            style={getSvgStyle(48, 48)}
          />
          <img
            src={getSvgPath("ai", "openai")}
            alt="OpenAI Logo"
            style={getSvgStyle(64, 64)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl">Grayscale Effect</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <p>Original</p>
            <img
              src={getSvgPath("ai", "openai")}
              alt="OpenAI Logo"
              style={getSvgStyle(48, 48)}
            />
          </div>
          <div>
            <p>Grayscale</p>
            <img
              src={getSvgPath("ai", "openai")}
              alt="OpenAI Logo"
              style={getSvgStyle(48, 48, true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
