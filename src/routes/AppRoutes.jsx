import { Navigate, Route, Routes } from "react-router-dom";
import ClientDashboard from "../pages/client/ClientDashboard";
import FreelancerDashboard from "../pages/freelancer/FreelancerDashboard";
import Landing from "../pages/public/Landing";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/client/dashboard" element={<ClientDashboard />} />
			<Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default AppRoutes;
