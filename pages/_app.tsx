import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  z-index: 10;
`;
const LoadingTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: -60px;
  margin-left: 40px;
`;

const Animation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: "https://assets4.lottiefiles.com/packages/lf20_bvxz04bd.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
};
function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState<string>("");
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      iteration++;
      return setPoints(
        `${
          iteration % 4 === 0
            ? "     "
            : iteration % 4 === 1
            ? ".    "
            : iteration % 4 === 2
            ? ". .  "
            : ". . ."
        }`
      );
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const handleStart = (url: any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath && setTimeout(() => setLoading(false), 3000);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
    //touteCHngeStart
    //routechangeComplete
    //routeChangeError
  }, []);
  return loading ? (
    <LoaderWrapper>
      <Animation />
      <LoadingTextContainer>
        <div>Loading</div>
        <div style={{ width: "50px" }}>{`${points}`}</div>
      </LoadingTextContainer>
    </LoaderWrapper>
  ) : (
    <></>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
