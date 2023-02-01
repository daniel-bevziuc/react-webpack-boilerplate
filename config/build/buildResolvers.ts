import { BuildOptions } from './types/config';
import { ResolveOptions } from "webpack";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}