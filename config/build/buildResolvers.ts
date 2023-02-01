import { BuildOptions } from './types/config';
import { ResolveOptions } from "webpack";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js']
  }
}