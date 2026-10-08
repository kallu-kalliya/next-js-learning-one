import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-center py-5">welcome home !!</h1>
      <Link href="/blog">Blog</Link> {" "}
      <Link href="/products">Products</Link>
     

    </div>
  );
}
