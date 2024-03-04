import { fetchSlogs } from "@/lib/actions/posts.actions";
import React from "react";
import ChapterCards from "../cards/ChapterCards";

const Hero = async () => {
    // const slogs = await fetchSlogs(chapt);

    const totalSlogs = 46;

  return (
    <div>
      {Array.from({ length: totalSlogs }, (_, i) => (
        <ChapterCards key={i} chapterId={1} slogId={i + 1} />
      ))}
    </div>
  );
};

export default Hero;
