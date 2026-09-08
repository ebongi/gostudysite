import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
  imgKey,
  imgClassName = "",
}: {
  src: string;
  alt: string;
  imgKey?: string | number;
  imgClassName?: string;
}) {
  return (
    <div
      className="rounded-[30px] p-2.5"
      style={{
        backgroundColor: "var(--phone-bezel)",
        border: "1px solid rgba(125,211,252,0.34)",
        boxShadow: "inset 0 0 0 1px rgba(125,211,252,0.10)",
      }}
    >
      <div className="relative overflow-hidden rounded-[22px] bg-black">
        <Image
          key={imgKey}
          src={src}
          alt={alt}
          width={270}
          height={600}
          className={`block h-auto w-full ${imgClassName}`}
        />
        <span
          className="absolute top-[9px] left-1/2 h-[5px] w-[52px] -translate-x-1/2 rounded-full"
          style={{ backgroundColor: "rgba(8,13,24,0.55)" }}
        />
      </div>
    </div>
  );
}
