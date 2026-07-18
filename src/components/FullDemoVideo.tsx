import { useRef, useState } from "react";
import { Play } from "lucide-react";
import poster from "../assets/brand/full-demo-poster.png";

const STEPS = [
  "Shop settings — name, address, GST",
  "Add a customer",
  "Add a product",
  "Purchase stock from a supplier",
  "Bill a sale — GST auto-calculated",
  "Payment reminders on WhatsApp",
];

/**
 * The full walkthrough -- every core screen used back-to-back in one real, unscripted
 * recording, not six separate clips. Same click-to-play pattern as VideoDemo.
 */
export function FullDemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section id="full-demo" className="bg-canvas py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The full walkthrough
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Settings, a new customer, a new product, a supplier purchase, a GST-calculated sale,
            and a WhatsApp payment reminder — one continuous, real recording.
          </p>
        </div>

        <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2">
          {STEPS.map((step, i) => (
            <span
              key={step}
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/70"
            >
              {i + 1}. {step}
            </span>
          ))}
        </div>

        <div className="relative mx-auto mt-10 overflow-hidden rounded-2xl border border-black/10 shadow-2xl shadow-brand-900/10">
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}demo/powerbill-full-demo.mp4`}
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
              aria-label="Play full walkthrough video"
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
