import React, { useEffect, useState } from "react";
import { getServerStats, getStats } from "../../api/stats";
import Chart from "react-apexcharts";
import CubeSvg from "../../images/svg/CubeSvg";
import UsersSvg from "../../images/svg/UsersSvg";
import EuroSvg from "../../images/svg/EuroSvg";
import RocketSvg from "../../images/svg/RocketSvg";

function Main() {
  const [stats, setStats] = useState(null);
  const [serverStats, setServerStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const statusTranslations = {
    PENDING: "En attente de vérification",
    ANALYSE: "En étude",
    REFUSED: "Refusé",
    APPROVED: "Approuvé",
    PROGRESS: "En cours",
    PAYMENT: "En attente de paiement",
    FINISH: "Terminé",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, serverStatsData] = await Promise.all([
          getStats(),
          getServerStats(),
        ]);
        setStats(statsData);
        setServerStats(serverStatsData);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load statistics.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <div className="text-center text-xl py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const projectStatusChartOptions = {
    series: stats.projectsByStatus.map((status) => status.count),
    labels: stats.projectsByStatus.map(
      (status) => statusTranslations[status.status] || status.status
    ),
    chart: { type: "pie" },
    colors: ["#4A90E2", "#50E3C2", "#F5A623", "#D0021B", "#B8E986", "#9013FE"],
  };

  const monthlyNewProjectsChartOptions = {
    series: [
      {
        name: "Projects",
        data: stats.monthlyNewProjects.map((month) => month.count),
      },
    ],
    options: {
      chart: { type: "bar", animations: { enabled: true } },
      xaxis: {
        categories: stats.monthlyNewProjects.map(
          (month) => `${month._id.month}/${month._id.year}`
        ),
      },
      colors: ["#4A90E2"],
    },
  };
  const memoryUsagePercent = serverStats
    ? ((serverStats.memoryUsage / serverStats.totalMemory) * 100).toFixed(1)
    : 0;
  const uptimeHours = serverStats?.uptime;
  const uptimeDays = (uptimeHours / 24).toFixed(1);

  const memoryUsageOptions = {
    series: [parseFloat(memoryUsagePercent)],
    chart: { type: "radialBar" },
    labels: ["Mémoire Utilisée"],
    colors: ["#4A90E2"],
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" },
        dataLabels: {
          value: { formatter: (val) => `${val.toFixed(1)}%` },
          name: { offsetY: 10 },
        },
      },
    },
  };

  const uptimeOptions = {
    series: [parseFloat(uptimeDays)],
    chart: { type: "radialBar" },
    labels: ["Uptime (jours)"],
    colors: ["#50E3C2"],
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" },
        dataLabels: {
          value: { formatter: (val) => `${val} jours` },
          name: { offsetY: 10 },
        },
      },
    },
  };

  const cpuLoadOptions = {
    series: serverStats.loadAverage.map((load) => load * 25),
    chart: { type: "radialBar" },
    labels: ["1m", "5m", "15m"],
    colors: ["#F5A623", "#50E3C2", "#9013FE"],
    plotOptions: {
      radialBar: {
        hollow: { size: "50%" },
        dataLabels: {
          value: {
            formatter: (val) => `${(val / 25).toFixed(2)}`,
          },
        },
      },
    },
  };

  return (
    <div className="p-8 rounded-lg w-full max-w-6xl mx-auto soleil">
      <h2 className="text-3xl soleil-book mb-8 text-gray-800 text-center soleil-book">
        Tableau de bord
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <CubeSvg className="text-xl text-vert_principal mx-auto mb-2 w-12 h-12" />
          <h3 className="text-xl font-semibold text-gray-700 pb-1">
            Projets total:
          </h3>
          <p className="text-4xl soleil-book text-gray-900">
            {stats.totalProjects}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <UsersSvg className="text-xl text-vert_principal mx-auto mb-2 w-12 h-12" />
          <h3 className="text-xl font-semibold text-gray-700 pb-1">
            Utilisateurs total:
          </h3>
          <p className="text-4xl soleil-book text-gray-900">
            {stats.totalUsers}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <EuroSvg className="text-xl text-vert_principal mx-auto mb-2 w-12 h-12" />
          <h3 className="text-xl font-semibold text-gray-700 pb-1">Budget:</h3>
          <p className="text-4xl soleil-book text-gray-900">
            {stats.totalProjectPrice.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <RocketSvg className="text-xl text-vert_principal mx-auto mb-2 w-12 h-12" />
          <h3 className="text-xl font-semibold text-gray-700 pb-1">
            Taux de complétion:
          </h3>
          <p className="text-4xl soleil-book text-gray-900">
            {stats.completionRate}%
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <h3 className="text-xl soleil-book text-gray-700 mb-4 text-center">
          Répartition des projets par statut
        </h3>
        <Chart
          options={projectStatusChartOptions}
          series={projectStatusChartOptions.series}
          type="pie"
          width="100%"
          height="400"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <h3 className="text-xl soleil-book text-gray-700 mb-4 text-center">
          Nouveaux projets par mois
        </h3>
        <Chart
          options={monthlyNewProjectsChartOptions.options}
          series={monthlyNewProjectsChartOptions.series}
          type="bar"
          width="100%"
          height="400"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <h3 className="text-xl soleil-book text-gray-700 mb-4 text-center">
          Top types de rénovation
        </h3>
        <ul className="mt-4 space-y-2">
          {stats.topRenovationTypes.map((type) => (
            <li
              key={type.renovation}
              className="flex justify-between items-center border-b pb-1"
            >
              <span className="text-lg text-gray-600">{type.renovation}</span>
              <span className="text-lg font-semibold text-gray-800">
                {type.count} demandes
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <h3 className="text-xl soleil-book text-gray-700 mb-4 text-center">
          Projets récents
        </h3>
        <table className="w-full mt-4 text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-gray-600">Type de rénovation</th>
              <th className="border-b p-2 text-gray-600">E-mail</th>
              <th className="border-b p-2 text-gray-600">Statut</th>
              <th className="border-b p-2 text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {stats.recentProjects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b p-2">{project.type}</td>
                <td className="border-b p-2">{project.email}</td>
                <td className="border-b p-2 capitalize">
                  {statusTranslations[project.status] || project.status}
                </td>
                <td className="border-b p-2">
                  {new Date(project.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl soleil-book text-gray-700 mb-4 text-center">
          Utilisateurs récemment inscrits
        </h3>
        <ul className="mt-4 space-y-3">
          {stats.recentUserRegistrations.map((user) => (
            <li
              key={user.email}
              className="text-lg flex justify-between items-center border-b pb-1"
            >
              <span>
                {user.name} (
                <a href={`mailto:${user.email}`} className="text-blue-500">
                  {user.email}
                </a>
                )
              </span>
              <span className="text-gray-500">
                Inscrit le {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
        <h3 className="text-2xl soleil-book text-gray-700 mb-8 text-center">
          Statistiques du serveur
        </h3>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-600 mb-2">
              Utilisation de la Mémoire
            </h4>
            <Chart
              options={memoryUsageOptions}
              series={memoryUsageOptions.series}
              type="radialBar"
              height={200}
            />
            <p className="mt-4 text-gray-500">
              {serverStats.memoryUsage} MB sur {serverStats.totalMemory} MB
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-600 mb-2">Uptime</h4>
            <Chart
              options={uptimeOptions}
              series={uptimeOptions.series}
              type="radialBar"
              height={200}
            />
            <p className="mt-4 text-gray-500">
              {uptimeHours} heures ({uptimeDays} jours)
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-600 mb-2">
              Charge CPU
            </h4>
            <Chart
              options={cpuLoadOptions}
              series={cpuLoadOptions.series}
              type="radialBar"
              height={200}
            />
            <p className="mt-4 text-gray-500">
              1m / 5m / 15m: {serverStats.loadAverage[0]} /{" "}
              {serverStats.loadAverage[1]} / {serverStats.loadAverage[2]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
