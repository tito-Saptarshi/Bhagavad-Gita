import VerseCard from "@/component/cards/VerseCard";
import { fetchSlogs } from "@/lib/actions/posts.actions";

const Chapter = async ({
  params,
}: {
  params: { id1: number; id2: number };
}) => {
  return (
    <div className="pl-[-5px] sm:pl-1 md:pl-64 lg:pl-228">
      <div className="flex min-h-screen flex-1 flex-col items-center w-full pb-10  max-md:pb-32">
        <VerseCard chapterId={params.id1} slogId={params.id2} />
      </div>
    </div>
  );
};

export default Chapter;
