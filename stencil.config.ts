import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-rnd',
  globalStyle: 'src/global/global.css',
  enableCache: true, //Stencil will cache build results in order to speed up rebuilds
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
