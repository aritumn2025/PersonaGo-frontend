import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
}

function infoCard({
  title,
  description,
  link,
  imageSrc,
  imageAlt,
}: InfoCardProps) {
  return (
    <Link href={link}>
      <Card className="mx-auto w-full max-w-md py-3">
        <CardContent className="flex flex-row items-center gap-2">
          <Image src={imageSrc} alt={imageAlt} width={80} height={80} />
          <div className="pl-1">
            <CardHeader className="pl-0">
              <CardTitle className="text-lg text-gray-600">{title}</CardTitle>
            </CardHeader>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export { infoCard };
