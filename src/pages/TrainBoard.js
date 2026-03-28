import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function decodeHtmlEntities(value) {
  if (!value) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = value;
  return txt.value;
}

function normalizeDelay(value) {
  if (!value) return "On Time";
  const str = String(value).trim();
  return str.length ? str : "On Time";
}

export default function TrainBoard() {
  const [selectedStation, setSelectedStation] = useState("jaipur");
  const [showHindi, setShowHindi] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rows, setRows] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    const langTimer = setInterval(() => {
      setShowHindi((prev) => !prev);
    }, 10000);

    return () => clearInterval(langTimer);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        if (!cancelled) {
          setLoading(true);
          setError("");
        }

        const response = await axios.get(`${API}/trains/jaipur`, {
          params: { nextMins: 60 },
        });
        const payload = response.data || {};
        if (!cancelled) {
          setRows(Array.isArray(payload.trains) ? payload.trains : []);
          setUpdatedAt(new Date().toLocaleTimeString("en-IN", { hour12: false }));
        }
      } catch (err) {
        console.error("Train board fetch error:", err);
        if (!cancelled) {
          setError("Live train data is currently unavailable.");
          setRows([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    const dataTimer = setInterval(fetchData, 10000);

    return () => {
      cancelled = true;
      clearInterval(dataTimer);
    };
  }, []);

  const tableRows = useMemo(
    () =>
      rows.map((row) => ({
        trainNo: row.trainNo || "-",
        trainName: showHindi ? decodeHtmlEntities(row.trainNameHindi) || row.trainName || "-" : row.trainName || "-",
        expectedTime: row.expectedTime || "-",
        expectedDelay: normalizeDelay(row.expectedDelay),
        platformNo: row.platformNo || "-",
        adFlag: row.ADFlag || "-",
      })),
    [rows, showHindi]
  );

  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="train-board-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] text-white mb-6">
            Live Station
            <br />
            <span className="text-gold">Train Board</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Real-time arrival and departure information integrated from authorized railway live services.
          </p>
        </motion.div>

        <div className="bg-obsidian-card border border-white/10 p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold uppercase text-white mb-4">Stations</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedStation("jaipur")}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-colors ${
                selectedStation === "jaipur" ? "bg-gold text-black border-gold" : "text-white border-white/20 hover:border-gold hover:text-gold"
              }`}
              data-testid="station-tab-jaipur"
            >
              Jaipur
            </button>
          </div>
        </div>

        <div className="bg-obsidian-card border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h3 className="text-2xl font-bold uppercase text-white">JAIPUR JUNCTION TRAIN STATUS</h3>
            <div className="text-xs uppercase tracking-widest text-white/60">
              {showHindi ? "Display: Hindi" : "Display: English"} | Updated: {updatedAt || "--:--:--"}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]" data-testid="jaipur-train-table">
              <thead className="bg-[#111]">
                <tr>
                  <th className="px-4 py-4 text-left text-xs uppercase tracking-widest text-gold">Train Number</th>
                  <th className="px-4 py-4 text-left text-xs uppercase tracking-widest text-gold">Train Name</th>
                  <th className="px-4 py-4 text-left text-xs uppercase tracking-widest text-gold">Exp. Time</th>
                  <th className="px-4 py-4 text-left text-xs uppercase tracking-widest text-gold">Delay (HH:mm)</th>
                  <th className="px-4 py-4 text-left text-xs uppercase tracking-widest text-gold">PF</th>
                  <th className="px-4 py-4 text-left text-xs uppercase tracking-widest text-gold">A/D</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-4 py-6 text-white/70" colSpan={6}>
                      Loading live data...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td className="px-4 py-6 text-red-400" colSpan={6}>
                      {error}
                    </td>
                  </tr>
                ) : tableRows.length === 0 ? (
                  <tr>
                    <td className="px-4 py-6 text-white/70" colSpan={6}>
                      No train records available for selected time window.
                    </td>
                  </tr>
                ) : (
                  tableRows.map((row, index) => (
                    <tr key={`${row.trainNo}-${index}`} className="border-t border-white/10">
                      <td className="px-4 py-4 text-white">{row.trainNo}</td>
                      <td className="px-4 py-4 text-white/90">{row.trainName}</td>
                      <td className="px-4 py-4 text-white/80">{row.expectedTime}</td>
                      <td className="px-4 py-4 text-white/80">{row.expectedDelay}</td>
                      <td className="px-4 py-4 text-white/80">{row.platformNo}</td>
                      <td className="px-4 py-4 text-white/80">{row.adFlag}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

