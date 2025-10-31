import type { ReactNode } from "react";

import { BackButton } from "@/components/common/BackButton";
import { BorderRoundedWave02 } from "@/components/common/Borders";

function hexToRgba(hexColor: string, alpha: number): string {
  const sanitized = hexColor.replace("#", "").trim();

  if (![3, 6].includes(sanitized.length)) {
    return hexColor;
  }

  const normalized =
    sanitized.length === 3
      ? sanitized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : sanitized;

  const numericValue = Number.parseInt(normalized, 16);

  if (Number.isNaN(numericValue)) {
    return hexColor;
  }

  const red = (numericValue >> 16) & 0xff;
  const green = (numericValue >> 8) & 0xff;
  const blue = numericValue & 0xff;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

interface ArticleTemplateProps {
  color: string;
  title: string;
  description?: string;
  children: ReactNode;
}

function ArticleTemplate({
  color,
  title,
  description,
  children,
}: ArticleTemplateProps) {
  const waveBottomColor = hexToRgba(color, 0);

  return (
    <article className="relative mx-auto w-full max-w-3xl">
      <BackButton href="/user/info" className="fixed top-4 left-4 z-50" />
      <header
        className="relative flex flex-col items-center gap-3 overflow-hidden px-6 pt-16 pb-12 text-white"
        style={{ backgroundColor: color }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 h-48 w-48 rounded-full bg-white/20"
        />
        <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
        {description ? (
          <p className="text-base font-medium text-white/90">{description}</p>
        ) : null}
      </header>
      <BorderRoundedWave02 top={color} bottom={waveBottomColor} />
      <section className="relative overflow-hidden px-6 pt-6 pb-6">
        <div className="relative flex flex-col gap-8 text-gray-700">
          {children}
        </div>
      </section>
    </article>
  );
}

export { ArticleTemplate };
