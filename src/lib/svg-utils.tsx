import React from "react";
import Image from "next/image";

type SvgCategory =
  | "ai"
  | "backend"
  | "database"
  | "devops"
  | "frontend"
  | "others";

interface SvgOptions {
  width?: number;
  height?: number;
  grayscale?: boolean;
  className?: string;
}

const DEFAULT_SIZE = 24;

/**
 * Returns a React Image component with SVG icon from the public directory
 * @param category The category folder name inside public/icon-svg
 * @param iconName The name of the SVG file without extension
 * @param options Styling options for the SVG
 */
export function SvgIcon({
  category,
  iconName,
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  grayscale = false,
  className = "",
}: {
  category: SvgCategory;
  iconName: string;
} & SvgOptions) {
  // Build the SVG path
  const svgPath = `/icon-svg/${category}/${iconName}.svg`;

  // Apply grayscale filter if needed
  const style: React.CSSProperties = {
    filter: grayscale ? "grayscale(100%)" : undefined,
  };

  return (
    <Image
      src={svgPath}
      alt={`${iconName} icon`}
      width={width}
      height={height}
      className={className}
      style={style}
    />
  );
}

/**
 * Returns the file path to an SVG icon
 * @param category The category folder name inside public/icon-svg
 * @param iconName The name of the SVG file without extension
 * @param grayscale Whether to apply grayscale filter
 */
export function getSvgPath(category: SvgCategory, iconName: string): string {
  return `/icon-svg/${category}/${iconName}.svg`;
}

/**
 * Returns CSS properties for an SVG with optional grayscale and size adjustments
 * @param width Width in pixels
 * @param height Height in pixels
 * @param grayscale Whether to apply grayscale filter
 */
export function getSvgStyle(
  width: number = DEFAULT_SIZE,
  height: number = DEFAULT_SIZE,
  grayscale: boolean = false
): Record<string, string> {
  return {
    width: `${width}px`,
    height: `${height}px`,
    ...(grayscale ? { filter: "grayscale(100%)" } : {}),
  };
}
