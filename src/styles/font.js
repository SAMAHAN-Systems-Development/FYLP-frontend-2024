import { Inter} from 'next/font/google';
import { Poppins } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-poppins',
});