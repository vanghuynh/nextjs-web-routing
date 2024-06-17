import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../dummy-news";
import Link from "next/link";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          ></img>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}
