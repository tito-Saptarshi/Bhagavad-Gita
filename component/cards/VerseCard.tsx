import { fetchSlogs } from "@/lib/actions/posts.actions";

interface Params {
  chapterId: number;
  slogId: number;
}

const VerseCard = async ({ chapterId, slogId }: Params) => {
  const slog = await fetchSlogs({ chapterId: chapterId, slogId: slogId });

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className=" mb-6 flex-shrink-0 flex flex-col"></div>
            <div className="md:flex-grow">
            <h2 className="text-xl font-normal text-gray-900 title-font mb-4">
                Chapter {chapterId} - Verse {slogId}
              </h2>
              <h2 className="text-3xl font-bold text-gray-900 title-font mb-4">
                " {slog.slok} "
              </h2>
              <p className="text-2xl pt-6 px-4">Explanation</p>
              <div className="py-8">
                <span className="mt-1 text-gray-500 text-sm">
                  -by {slog.san.author}
                </span>
                <p className="leading-relaxed py-4">{slog.san.et}</p>
              </div>
              <div className="py-4">
                <span className=" text-gray-500 text-sm pt-10">
                  -by {slog.chinmay.author}
                </span>
                <p className="leading-relaxed py-4">{slog.chinmay.hc}</p>
              </div>
              <div className="py-4">
                <span className=" text-gray-500 text-sm pt-10">
                  -by {slog.raman.author}
                </span>
                <p className="leading-relaxed py-4">{slog.raman.sc}</p>
                <p className="leading-relaxed py-4">{slog.raman.et}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerseCard;
