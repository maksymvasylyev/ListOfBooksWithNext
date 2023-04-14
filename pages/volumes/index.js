import Link from "next/link";
import { introduction } from "../../resources/lib/data";
import { volumes } from "../../resources/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          if (confirm("are you a fun of Lord")) {
            router.push("volumes/the-two-towers");
          }
        }}
      ></button>
    </>
  );
}
