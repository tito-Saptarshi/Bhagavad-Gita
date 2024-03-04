import { fetchSlogs } from "@/lib/actions/posts.actions";

interface Params {
    chapterId: number;
    slogId: number;
}

const ChapterCards = async ({chapterId, slogId}: Params) => {

  const slog = await fetchSlogs({ chapterId: chapterId, slogId: slogId });

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container pt-5 mx-auto">
        <div className="-my-8  divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="  mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                Chapter {chapterId} - Verse {slogId}
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                {slog.san.author}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-4">
                {slog.slok}
              </h2>
              <p className="leading-relaxed">
                {slog.san.et}
              </p>
              <a href={`/chapter/${chapterId}/${slogId}`} className="text-yellow-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChapterCards;
