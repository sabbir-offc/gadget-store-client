import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { HiMiniDocumentPlus } from "react-icons/hi2";
import { IoIosHome } from "react-icons/io";
import { FaUsersCog } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";
import useUserInfo from "../../hook/useUserInfo";
const Dashboard = () => {
  const location = useLocation();
  const { userInfo } = useUserInfo();
  console.log(userInfo);
  if (userInfo?.role !== "admin") return <Navigate to={"/"} />;
  const menu = [
    {
      path: "/",
      icon: <IoIosHome size={25} />,
    },
    {
      path: "/dashboard/add-product",
      icon: <HiMiniDocumentPlus size={25} />,
    },
    {
      path: "/dashboard/manage-users",
      icon: <FaUsersCog size={25} />,
    },
    {
      path: "/dashboard/all-products",
      icon: <IoDocuments size={25} />,
    },
  ];
  return (
    <>
      <div className="container mx-auto p-3">
        <div className="mt-5 mb-14">
          <div className="w-full container mb-5 mx-auto py-2 text-left border-l-4 px-3 border-blue-600">
            <Link to={"/dashboard"}>
              <h1 className="text-blue-600 text-2xl font-semibold">
                Dashboard
              </h1>
            </Link>
          </div>
          <Outlet />
        </div>
        <div className="btm-nav">
          {menu?.map((item) => (
            <Link
              className={location?.pathname === item.path ? "active" : ""}
              to={item.path}
              key={item?.path}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
