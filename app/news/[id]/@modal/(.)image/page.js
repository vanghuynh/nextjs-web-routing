import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../dummy-news";

export default function InterceptedImagePage({ params }) {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop"></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
