import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span>
          <span className="text-4xl text-primary">Comfy</span>
        </span>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
