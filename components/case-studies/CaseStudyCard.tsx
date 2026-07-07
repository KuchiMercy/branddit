import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  category: string;
  date: string;
  onSeeMore: () => void;
}

export default function CaseStudyCard({
  image,
  title,
  category,
  date,
  onSeeMore,
}: Props) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      <div className="relative aspect-4/3">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#071C2A] leading-snug">
          {title}
        </h3>

        <p className="mt-3 text-sm text-primary">
          {category} &bull; {date}
        </p>

        <button
          onClick={onSeeMore}
          className="inline-flex items-center gap-2 mt-5 font-semibold text-[#071C2A] group cursor-pointer"
        >
          See more
          <ArrowUpRight
            size={18}
            className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          />
        </button>
      </div>
    </article>
  );
}
