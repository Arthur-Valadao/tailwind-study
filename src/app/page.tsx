import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="flex flex-col items-center">
        <h1 className="m-4">Hello World</h1>
        <h2 className="">Study Tailwind</h2>
        <button className="mt-4 hover rounded-md font-medium bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed">
          Sign in
        </button>
      </div>
    </div>
  );
}
