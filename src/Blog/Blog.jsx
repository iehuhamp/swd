import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user || user.role !== "admin") {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Truy cập bị từ chối</h2>
        <p>Bạn không có quyền truy cập vào trang này.</p>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => navigate("/login")}
        >
          Đăng nhập
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Thông Báo</h2>
      <p>Chào, {user.email}! Đây là nơi cập nhật thông tin mới nhất.</p>
      <button className="bg-gray-500 text-white p-2 rounded" onClick={logout}>
        Đăng xuất
      </button>
    </div>
  );
};

export default Blog;
