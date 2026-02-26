import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="relative w-full max-w-[375px] h-[812px] bg-black rounded-[3rem] shadow-2xl overflow-hidden border-8 border-slate-900">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-50"></div>
        
        {/* Screen Content */}
        <div className="w-full h-full overflow-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}