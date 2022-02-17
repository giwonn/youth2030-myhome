interface ImportMetaEnv {
  readonly VITE_NaverClientId: string;
  readonly VITE_NaverClientSecret: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
