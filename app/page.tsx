import { Col } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Col span={6}>Nửa trang</Col>
      <Col span={6}>Nửa còn lại</Col>
      <Link href="/product/1">
        <h1 className="text-2xl font-bold">Product 1</h1>
      </Link>
      <Link href="/product/2">
        <h1 className="text-2xl font-bold">Product 2</h1>
      </Link>
      <Link href="/product/3">
        <h1 className="text-2xl font-bold">Product 3</h1>
      </Link>
    </div>
  );
}
