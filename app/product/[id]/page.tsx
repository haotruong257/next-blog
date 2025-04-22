import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function ProductPage({ params }: Props) {
  const { id } = params;
  await new Promise((resolve) => setTimeout(resolve, 0));
  return (
    <>
      <h1>ID: {id}</h1>
      <Link href="/">Back to home</Link>
    </>
  );
}
