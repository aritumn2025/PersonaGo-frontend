import Image from "next/image";

import { Marker } from "@/components/common/Marker";

interface StepProps {
  num: number;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

// TODO: step_xx.svgを用意する
function Step({ num, title, description, image }: StepProps) {
  const numImg = `/images/title/usage/step_${num.toString().padStart(2, "0")}.svg`;
  return (
    <div className="flex flex-col text-gray-800">
      <div className="flex items-center">
        <Image src={numImg} alt={`Step ${num}`} width={80} height={80} />
        <h3 className="text-xl font-bold">
          <Marker color="var(--color-green-400)">{title}</Marker>
        </h3>
      </div>
      <p className="text-md mb-10 text-center">{description}</p>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="mx-auto"
        />
      )}
    </div>
  );
}

export { Step };
