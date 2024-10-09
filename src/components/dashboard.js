import React from "react";
import { useSelector } from "react-redux";
import imageIcon from "../assets/images/image.svg";
import darkImageIcon from "../assets/images/image-dark.svg";
import linegraph from "../assets/images/line-graph.svg";
import darkLinegraph from "../assets/images/line-graph-dark.svg";
import locationGraph from "../assets/images/location-graph.svg";
import darkLocationGraph from "../assets/images/location-graph-dark.svg";
import totalSales from "../assets/images/total-sales-graph.svg";
import darkTotalSales from "../assets/images/total-sales-graph-dark.svg";
import totalSelling from "../assets/images/total-selling-image.svg";
import darkTotalSelling from "../assets/images/total-selling-image-dark.svg";
import "./dashboard.css";
import RevenueWidget from "./revenue-widget";
import { motion } from "framer-motion";

const Dashboard = () => {
  const darkMode = useSelector((state) => state.dashboard.darkMode);
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-items">
          <RevenueWidget />
          <RevenueWidget />
          <RevenueWidget />
          <RevenueWidget />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-container">
            <img
              src={darkMode ? darkImageIcon : imageIcon}
              alt="Header Icon"
              className="dashboard-image"
            />
          </div>
        </motion.div>
      </div>
      <div className="dashboard-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-container">
            <img
              src={darkMode ? darkLinegraph : linegraph}
              alt="Header Icon"
              className="dashboard-image"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-container">
            <img
              src={darkMode ? darkLocationGraph : locationGraph}
              alt="Header Icon"
              className="dashboard-image"
            />
          </div>
        </motion.div>
      </div>
      <div className="dashboard-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image">
            <img
              src={darkMode ? darkTotalSelling : totalSelling}
              alt="Header Icon"
              className="dashboard-image"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-container">
            <img
              src={darkMode ? darkTotalSales : totalSales}
              alt="Header Icon"
              className="dashboard-image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
