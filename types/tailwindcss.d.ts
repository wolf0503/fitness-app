declare module 'tailwindcss' {
    import { Config } from 'tailwindcss';
    export type { Config } from 'tailwindcss';
    export default function tailwindcss(config: Config): any;
  }