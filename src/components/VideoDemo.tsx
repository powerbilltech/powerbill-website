import { useRef, useState } from "react";
import { Play } from "lucide-react";
import poster from "../assets/brand/dashboard-screenshot.png";

/**
 * A real screen recording of PowerBill in actual use -- Dashboard -> POS search ->
 * cart -> GST-calculated checkout -> printable/WhatsApp-able invoice -- not a mockup.
 * Click-to-play with a poster frame rather than autoplay, so the site doesn't burn a
 * visitor's data on a video they didn't ask for.
 */
export function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section id="demo" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            See a real sale, start to finish
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            A 20-second, real recording — search a product, build the cart, GST calculated
            automatically, and a printable, WhatsApp-ready invoice. No mockups.
          </p>
        </div>

        <div className="relative mx-auto mt-12 overflow-hidden rounded-2xl border border-black/10 shadow-2xl shadow-brand-900/10">
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}demo/powerbill-demo.mp4`}
            poster={poster}
            controls={playing}
            playsInline
            className="w-full"
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play demo video"
              className="group absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors hover:bg-ink/30"
            >
              <span className="flex size-20 items-center justify-center rounded-full bg-white shadow-xl transition-transform group-hover:scale-105">
                <Play className="ml-1 size-8 text-brand-600" fill="currentColor" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
