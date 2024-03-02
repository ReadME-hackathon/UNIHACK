import { createRef, useEffect, useRef } from "react";

const Sidebar = () => {
  let sidebarHeight: string;
  sidebarHeight = `${window.innerHeight - 56}px`;

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.height = sidebarHeight;
    }
  }, []);

  return (
    <div className="w-64 bg-neutral-800" ref={sidebarRef}>
      Sidebar
    </div>
  );
};

export default Sidebar;
