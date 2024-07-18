import Link from "next/link";

export default function Home() {
  return (
    <main>
      HOME PAGE
      <Link href={"/contato"} className="h-5 w-20 p-4 rounded-sm bg-red-700 text-white">Ir</Link>
    </main>
  );
}
