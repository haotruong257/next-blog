import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function ProductPage({ params }: Props) {
  return (
    <>
      <h1>ID: {params.id}</h1>
      <Link href="/">Back to home</Link>
    </>
  );
}
