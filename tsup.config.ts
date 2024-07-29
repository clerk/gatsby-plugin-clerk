import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

import { name, version } from './package.json';

// Copied from https://github.com/clerk/javascript/blob/a6620ae2e8a871639ee8b00e3677b63b179663a8/scripts/utils.ts#L3
const runAfterLast =
  (commands: Array<string | false>) =>
  (...configs: Options[]) => {
    const [last, ...rest] = configs.reverse();
    return [...rest.reverse(), { ...last, onSuccess: [last.onSuccess, ...commands].filter(Boolean).join(' && ') }];
  };

const clerkJsVersion = '5';

export default defineConfig(overrideOptions => {
  const isWatch = !!overrideOptions.watch;
  const shouldPublish = !!overrideOptions.env?.publish;

  const options: Options = {
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
  };

  return runAfterLast(['npm run build:declarations', shouldPublish && 'npm run publish:local'])(options);
});
