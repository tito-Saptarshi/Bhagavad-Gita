import ChapterCards from "@/component/cards/ChapterCards";
import React from "react";

const Chapters = ({ params }: { params: { id: number } }) => {
  let myArray: number[] = [
    46, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
  ];

  const totalSlogs = myArray[params.id - 1];

  return (
    <div className="flex min-h-screen flex-1 flex-col items-center w-full pb-10 lg:px-20 max-md:pb-32">
      <h1 className="text-2xl">Chapter {params.id}</h1>
      {Array.from({ length: totalSlogs }, (_, i) => (
        <ChapterCards key={i} chapterId={params.id} slogId={i + 1} />
      ))}
    </div>
  );
};

export default Chapters;
