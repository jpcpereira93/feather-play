interface LibraryCardProps {
  img: string;
  subtitle: string;
  title: string;
}

export const LibraryCardSkeleton = () => (
  <article className="h-80 w-full bg-dark-600 rounded-lg"></article>
);

export const LibraryCard = ({ img, subtitle, title }: LibraryCardProps) => (
  <article className="flex flex-col h-80 w-full overflow-hidden bg-dark-600 rounded-lg  hover:cursor-pointer hover:outline-3 hover:outline-offset-1 hover:outline-dark-400">
    <div className="h-2/3 overflow-hidden">
      {img.length > 0 && <img src={img} alt={title}></img>}
    </div>
    <div className="h-1/3 p-3 gap-2">
      <h1 className="font-bold text-lg truncate overflow-hidden">{title}</h1>
      <h2 className="w-full font-semibold text-sm text-dark-500 truncate overflow-hidden whitespace-pre-wrap">
        {subtitle}
      </h2>
    </div>
  </article>
);
