import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const navigate = useNavigate();

  // Data for Pie Chart
  const pieData = {
    labels: ["Completed", "Ongoing", "Pending"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
        hoverBackgroundColor: ["#45A049", "#FFB300", "#E53935"],
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ["Library", "Park", "Roads", "Hospitals"],
    datasets: [
      {
        label: "Votes",
        data: [120, 200, 150, 80],
        backgroundColor: "#00BCD4",
        hoverBackgroundColor: "#0288D1",
      },
    ],
  };

  return (
    <div
      className="dashboard"
      style={{
        background: "linear-gradient(to right, #03045E, #03346E, #021526)",
        minHeight: "100vh",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Main Content Starts Below the Navbar */}
      <div className="flex pt-16">
        {/* Left Dashboard Panel */}
        <div className="w-1/5 bg-white/10 backdrop-blur-lg p-6 min-h-screen rounded-xl shadow-lg">
          <h2 className="text-white font-semibold text-xl mb-6">Dashboard</h2>
          <ul className="space-y-4 text-white">
            <li
              onClick={() => navigate("/home")}
              className="cursor-pointer hover:text-blue-400 transition-all duration-200"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/proposalform")}
              className="cursor-pointer hover:text-blue-400 transition-all duration-200"
            >
              Create Proposal
            </li>
            <li
              onClick={() => navigate("/getproposal")}
              className="cursor-pointer hover:text-blue-400 transition-all duration-200"
            >
              View Proposals
            </li>
            <li
              onClick={() => navigate("/settings")}
              className="cursor-pointer hover:text-blue-400 transition-all duration-200"
            >
              Settings
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-8">
          {/* Pie Chart Section */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-white font-semibold text-lg mb-4">Proposal Status</h3>
            <div className="flex justify-center">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} width={150} height={150} />
            </div>
          </div>

          {/* Bar Chart Section */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-white font-semibold text-lg mb-4">Votes by Category</h3>
            <div className="flex justify-center">
              <Bar data={barData} options={{ maintainAspectRatio: false }} height={250} width={400} />
            </div>
          </div>

          {/* Proposals Table */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md">
            <h3 className="text-white font-semibold text-lg mb-4">Proposals</h3>
            <table className="w-full text-white text-sm">
              <thead>
                <tr className="text-left border-b border-gray-500">
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Description</th>
                  <th className="pb-3">Votes</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="py-2">Build a New Library</td>
                  <td className="py-2">A proposal to build a library.</td>
                  <td className="py-2">120</td>
                  <td className="py-2">Ongoing</td>
                </tr>
                <tr>
                  <td className="py-2">Plant More Trees</td>
                  <td className="py-2">Suggest planting more trees.</td>
                  <td className="py-2">200</td>
                  <td className="py-2">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
