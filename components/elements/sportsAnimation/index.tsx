import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";

const SportsAnimation = () => {
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
        path: "https://assets1.lottiefiles.com/packages/lf20_aaleelx7.json",
      });
      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <div
      ref={ref}
      style={{ width: "400px", height: "400px", borderRadius: "30px" }}
    />
  );
};

export default SportsAnimation;
