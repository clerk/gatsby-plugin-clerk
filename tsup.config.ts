import { defineConfig } from 'tsup';

import { name, version } from './package.json';

const clerkJsVersion = '5';

export default defineConfig(overrideOptions => {
  const isWatch = !!overrideOptions.watch;
  const shouldPublish = !!overrideOptions.env?.publish;

  return {
    format: 'cjs',
    outDir: './dist',
    entry: ['./src/**/*.{ts,tsx,js,jsx}'],
    bundle: false,
    clean: true,
    minify: false,
    sourcemap: true,
    legacyOutput: true,
    define: {
      PACKAGE_NAME: `"${name}"`,
      PACKAGE_VERSION: `"${version}"`,
      JS_PACKAGE_VERSION: `"${clerkJsVersion}"`,
      __DEV__: `${isWatch}`,
    },
    onSuccess: `npm run build:declarations ${shouldPublish ? '&& npm run publish:local' : ''}`
  };
});
