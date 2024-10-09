import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./dashboard.css";

const RevenueWidget = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="dashboard-item">
      <div className="revenue">
        <div className="revenue-data">
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            Revenue
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "24px" }}>
            $58,211
          </Typography>
        </div>
        <div className="revenue-data-index">
          <Typography variant="caption" color="success">
            +15.03%
          </Typography>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default RevenueWidget;
