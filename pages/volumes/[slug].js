import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import { useRouter } from "next/router";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const currentVolume = volumes.find((volume) => volume.slug === slug);
  console.log(currentVolume);
  if (!currentVolume) {
    null;
  }

  const { title, description } = currentVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {" "}
          {currentVolume.books[0].ordinal} - {currentVolume.books[0].title}
        </li>
        <li>
          {" "}
          {currentVolume.books[1].ordinal} - {currentVolume.books[1].title}
        </li>
      </ul>
    </>
  );
}
