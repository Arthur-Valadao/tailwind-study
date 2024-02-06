import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/Arthur-Valadao.png"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700"
        >
          Arthur Valadão</span>
        <span className="truncate text-sm text-zinc-500"
        >
          arth.valadao@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}