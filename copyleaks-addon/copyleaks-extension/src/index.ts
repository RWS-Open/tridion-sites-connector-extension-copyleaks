import { initializeGlobals } from '@globals';
import type { ExtensionModule, RuntimeInformation } from '@tridion-sites/extensions';

import packageJson from '../package.json';
import { CopyleaksExtension } from './copyleaksAction/CopyleaksExtension';


const extensionModule: ExtensionModule = {
    runtimeInfo: packageJson as RuntimeInformation,
    initializeGlobals,
    initialize: builder => {
        /**
         * This section is intended for initializing extensions.
         */
        CopyleaksExtension(builder)
    },
};

export default extensionModule;
