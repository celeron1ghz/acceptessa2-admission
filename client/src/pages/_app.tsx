import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../../src/theme/emotionCache";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/mytheme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return <>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </>
}
