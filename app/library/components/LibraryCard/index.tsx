interface LibraryCardProps {
  img: string;
  subtitle: string;
  title: string;
}

export const LibraryCardSkeleton = () => (
  <article className="flex flex-col h-80 w-full bg-slate-700/60 rounded-lg"></article>
);

export const LibraryCard = ({ img, subtitle, title }: LibraryCardProps) => (
  <article className="flex flex-col h-80 w-full overflow-hidden bg-slate-700/60 rounded-lg tracking-tight hover:cursor-pointer hover:bg-slate-600">
    <div className="h-2/3 overflow-hidden">
      {img.length > 0 && <img src={img} alt={title}></img>}
    </div>
    <div className="h-1/3 p-3 gap-2">
      <h1 className="font-bold text-lg truncate overflow-hidden">{title}</h1>
      <h2 className="w-full font-semibold text-sm text-slate-500 truncate overflow-hidden whitespace-pre-wrap">
        {subtitle}
      </h2>
    </div>
  </article>
);
