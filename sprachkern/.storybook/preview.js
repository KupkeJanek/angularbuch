import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS} from "@storybook/addon-viewport";
setCompodocJson(docJson);

console.log('ViewPorts', INITIAL_VIEWPORTS)
console.log('ViewPorts', MINIMAL_VIEWPORTS)

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /*options: {
    storySort: {
      order: ['Documentation', 'Components'],
    },
  },

   */
  docs: { inlineStories: true },

  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  }

}
