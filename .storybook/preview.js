import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
 import { Inter, Poppins,} from 'next/font/google';

 export const inter = Inter({
     subsets: ['latin'],
     variable: '--font-inter',
 });

 export const poppins = Poppins({
     weight: '400',
     subsets: ['latin'],
     variable: '--font-poppins',
 });

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`--font-poppins ${poppins.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;