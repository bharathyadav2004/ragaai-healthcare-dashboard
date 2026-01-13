import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";

const Home = () => {
  const data = useSelector((state: RootState) => state.dashboard);

  return (
    <div style={{ padding: 20 }}>
      <Header />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        <DashboardCard title="Total Patients" value={data.patients} />
        <DashboardCard title="Total Doctors" value={data.doctors} />
        <DashboardCard title="Appointments" value={data.appointments} />
        <DashboardCard title="Active Clinics" value={data.clinics} />
      </div>
    </div>
  );
};

export default Home;
