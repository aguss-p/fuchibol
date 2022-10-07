import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";

const ClockAnimation = () => {
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
        path: "https://assets10.lottiefiles.com/private_files/lf30_bu8dvacv.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
};

export default ClockAnimation;
