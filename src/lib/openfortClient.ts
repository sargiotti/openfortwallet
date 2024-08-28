import Openfort from '@openfort/openfort-js';

const openfort = new Openfort({
    baseConfiguration: {
      publishableKey: process.env.OPENFORT_PUBLISHABLE_KEY as string,
    },
  });

export default openfort;