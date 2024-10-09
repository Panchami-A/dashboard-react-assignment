import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  TextField,
  Avatar,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { visuallyHidden } from "@mui/utils";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { motion } from "framer-motion";

const orderList = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Feb 1, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "Feb 2, 2023",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "Feb 5, 2023",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Feb 1, 2023",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 8, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 28, 2023",
    status: "Approved",
  },
  {
    id: "#CM9807",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 21, 2023",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 12, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9809",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 23, 2023",
    status: "Complete",
  },
  {
    id: "#CM9810",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 11, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9811",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 10, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9812",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 1, 2023",
    status: "Pending",
  },
];

const statusColors = {
  "In Progress": "#3b82f6",
  Complete: "#10b981",
  Pending: "#f59e0b",
  Approved: "#f59e0b",
  Rejected: "#6b7280",
};

const OrderTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Filter values for each column
  const [filterValues, setFilterValues] = useState({
    id: "",
    user: "",
    project: "",
    address: "",
    date: "",
    status: "",
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (column) => (e) => {
    setFilterValues((prev) => ({
      ...prev,
      [column]: e.target.value,
    }));
  };

  const filteredOrders = orderList.filter((row) => {
    const matchesId = row.id.toLowerCase().includes(filterValues.id.toLowerCase());
    const matchesUser = row.user.toLowerCase().includes(filterValues.user.toLowerCase());
    const matchesProject = row.project
      .toLowerCase()
      .includes(filterValues.project.toLowerCase());
    const matchesAddress = row.address
      .toLowerCase()
      .includes(filterValues.address.toLowerCase());
    const matchesDate = row.date.toLowerCase().includes(filterValues.date.toLowerCase());
    const matchesStatus = row.status
      .toLowerCase()
      .includes(filterValues.status.toLowerCase());

    const matchesSearchQuery = Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      matchesId &&
      matchesUser &&
      matchesProject &&
      matchesAddress &&
      matchesDate &&
      matchesStatus &&
      matchesSearchQuery
    );
  });

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (orderBy === "date") {
      return order === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    }
    return order === "asc"
      ? a[orderBy].localeCompare(b[orderBy])
      : b[orderBy].localeCompare(a[orderBy]);
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleFiltersVisibility = () => {
    setFiltersVisible((prev) => !prev);
  };

  const tableCellStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left",
  };

  return (
    <div style={{ marginRight: "24px", marginBottom: "24px" }}>
      <p style={{ marginLeft: "24px", fontWeight: "600", fontSize: "16px" }}>OrderList</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          marginRight: "8px",
        }}
      >
        <Button
          sx={{ color: "inherit" }}
          onClick={toggleFiltersVisibility}
          style={{ marginBottom: "10px" }}
        >
          {filtersVisible ? <FilterListIcon /> : <FilterListOffIcon />}
        </Button>
        <TextField
          variant="outlined"
          sx={tableCellStyle}
          placeholder="Search..."
          size="small"
          value={searchQuery}
          onChange={handleSearchChange} // Use the defined function here
          InputProps={{
            startAdornment: (
              <IconButton position="start">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TableContainer
          style={{
            display: "flex",
            padding: "10px",
            marginRight: "8px",
            marginLeft: "8px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection={orderBy === "id" ? order : false}>
                  <TableSortLabel
                    active={orderBy === "id"}
                    direction={orderBy === "id" ? order : "asc"}
                    onClick={() => handleRequestSort("id")}
                  >
                    Order ID
                    {orderBy === "id" ? (
                      <span style={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell sortDirection={orderBy === "user" ? order : false}>
                  <TableSortLabel
                    active={orderBy === "user"}
                    direction={orderBy === "user" ? order : "asc"}
                    onClick={() => handleRequestSort("user")}
                  >
                    User
                    {orderBy === "user" ? (
                      <span style={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell sortDirection={orderBy === "project" ? order : false}>
                  <TableSortLabel
                    active={orderBy === "project"}
                    direction={orderBy === "project" ? order : "asc"}
                    onClick={() => handleRequestSort("project")}
                  >
                    Project
                    {orderBy === "project" ? (
                      <span style={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell sortDirection={orderBy === "address" ? order : false}>
                  <TableSortLabel
                    active={orderBy === "address"}
                    direction={orderBy === "address" ? order : "asc"}
                    onClick={() => handleRequestSort("address")}
                  >
                    Address
                    {orderBy === "address" ? (
                      <span style={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell sortDirection={orderBy === "date" ? order : false}>
                  <TableSortLabel
                    active={orderBy === "date"}
                    direction={orderBy === "date" ? order : "asc"}
                    onClick={() => handleRequestSort("date")}
                  >
                    Date
                    {orderBy === "date" ? (
                      <span style={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell sortDirection={orderBy === "status" ? order : false}>
                  <TableSortLabel
                    active={orderBy === "status"}
                    direction={orderBy === "status" ? order : "asc"}
                    onClick={() => handleRequestSort("status")}
                  >
                    Status
                    {orderBy === "status" ? (
                      <span style={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              </TableRow>
              {filtersVisible && (
                <TableRow>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      placeholder="Filter..."
                      size="small"
                      value={filterValues.id || ""}
                      onChange={handleFilterChange("id")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      placeholder="Filter..."
                      size="small"
                      value={filterValues.user || ""}
                      onChange={handleFilterChange("user")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      placeholder="Filter..."
                      size="small"
                      value={filterValues.project || ""}
                      onChange={handleFilterChange("project")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      placeholder="Filter..."
                      size="small"
                      value={filterValues.address || ""}
                      onChange={handleFilterChange("address")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      placeholder="Filter..."
                      size="small"
                      value={filterValues.date || ""}
                      onChange={handleFilterChange("date")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      placeholder="Filter..."
                      size="small"
                      value={filterValues.status || ""}
                      onChange={handleFilterChange("status")}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableHead>
            <TableBody>
              {sortedOrders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell style={tableCellStyle}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar sx={{ bgcolor: "#f59e0b", marginRight: 2 }}>
                          {order.user[0]}
                        </Avatar>
                        {order.user}
                      </div>
                    </TableCell>
                    <TableCell>{order.project}</TableCell>
                    <TableCell>{order.address}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell style={tableCellStyle}>
                      <Tooltip title={order.status}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              backgroundColor: statusColors[order.status],
                              marginRight: "8px",
                            }}
                          />
                          <span
                            style={{
                              color: statusColors[order.status],
                              fontWeight: "bold",
                            }}
                          >
                            {order.status}
                          </span>
                        </div>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={sortedOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default OrderTable;
