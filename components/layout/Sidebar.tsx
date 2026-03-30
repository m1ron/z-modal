import Navigation from './Navigation';

export default function Sidebar() {
  return (
    <div className="w-55 p-2.5 bg-dark min-h-screen fixed top-0 left-0 flex max-lg:hidden flex-col">

      {/* Logo */}
      <div className="px-2.5 py-3 flex items-center gap-2.5">
        <span className="size-7 border-purple border rounded-full flex items-center justify-center text-purple text-[15px] font-bold select-none">Z</span>
        <h1 className="text-white font-bold text-base">ZModal</h1>
      </div>

      {/* Navigation */}
      <Navigation/>

      {/* User Profile */}
      <div className="p-5.5 -mx-2.5 -mb-2.5 border-t border-white/10 cursor-default">
        <a href="#" className="flex items-center gap-2.5">
          <span className="size-7.5 rounded-full bg-purple flex items-center justify-center text-white text-[10.35px] font-bold">DC</span>
          <div>
            <div className="text-grayish text-[13px] leading-4 font-medium">Dan Cohen</div>
            <div className="text-gray-medium-dark text-[11px] leading-3">Admin</div>
          </div>
        </a>
      </div>
    </div>
  );
}
