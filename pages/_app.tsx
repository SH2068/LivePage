import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  // 로그인 페이지에서 레이아웃을 제외
  if (router.pathname === '/login') {
    return (
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </>
      </ApolloSetting>
    );
  }

  // 다른 페이지에서는 기본 레이아웃 적용
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}
