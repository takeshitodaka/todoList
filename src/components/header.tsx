import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute top-0 w-full text-center">
      <Link className="mr-5" href="/">
        TOP
      </Link>
      <Link href="/tasks">タスク管理</Link>
    </div>
  );
}
