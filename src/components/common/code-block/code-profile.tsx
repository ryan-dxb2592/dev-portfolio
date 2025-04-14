"use client";

import React from "react";
import { CodeWindow } from "./code-window";

export const DeveloperProfile: React.FC = () => {
  const profileCode = `const profile = {
  name: 'Nazmul Hossain',
  title: 'Full-Stack Developer | Cloud Enthusiast | Problem Solver',
  skills: [
    'React', 'NextJS', 'Redux', 'Express',
    'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
    'GraphQL', 'Git', 'Linux', 'Discord Development'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 4,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 3
    );
  }
};`;

  return (
    <CodeWindow
      title="developer.js"
      language="javascript"
      code={profileCode}
      showLineNumbers={false}
    />
  );
};
