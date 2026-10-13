import React from "react";

/**
 * Phone or browser frame around a real product screenshot.
 * Pass `src` + `alt` for a real image. Without `src`, a clearly labelled
 * "Screenshot to come" frame renders so layout work isn't blocked, and the
 * missing asset stays obvious.
 */
export default function DeviceFrame({
  variant = "phone",
  src,
  alt = "",
  caption,
  sample = false,
  width,
  height,
  priority = false,
  className = "",
}) {
  const isPhone = variant === "phone";
  const shell = isPhone
    ? "rounded-[34px] p-[10px] max-w-[300px]"
    : "rounded-[18px] max-w-[920px]";

  return (
    <figure className={`mx-auto w-full ${className}`}>
      <div
        className={`relative bg-[#0b1533] shadow-[0_30px_70px_-24px_rgba(11,21,51,0.55)] ${shell}`}
      >
        {!isPhone && (
          <div className="flex items-center gap-1.5 px-3.5 py-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff33]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff33]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff33]" />
          </div>
        )}
        <div
          className={`relative overflow-hidden bg-[#f1f3fb] ${
            isPhone ? "rounded-[26px] aspect-[9/19]" : "rounded-b-[14px] aspect-[16/10]"
          }`}
        >
          {src ? (
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div
              className="w-full h-full grid place-items-center text-center px-6 font-outfit font-semibold text-[13px] text-[#6b7597]"
              role="img"
              aria-label={alt || "Product screenshot to come"}
            >
              Screenshot to come
            </div>
          )}
          {sample && (
            <span className="absolute top-3 right-3 font-outfit font-bold text-[10.5px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-full bg-[#fff4d6] text-[#7a5200] border border-[#f0d58a]">
              Sample data
            </span>
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-jakarta text-[13px] text-[#6b7597]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
