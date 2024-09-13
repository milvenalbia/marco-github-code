import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import WorksCard from "./WorksCard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]); // State to hold unique categories

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Fetch projects from Firestore
  useEffect(() => {
    const projectCollectionRef = collection(db, "projects");

    const unsubscribe = onSnapshot(projectCollectionRef, (snapshot) => {
      const projectData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Group projects by category
      const groupedByCategory = projectData.reduce((acc, project) => {
        const category = project.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(project);
        return acc;
      }, {});

      // Add "All" category to the categories list
      setCategories(["All", ...Object.keys(groupedByCategory)]);

      // Store projects grouped by category
      setProjects(groupedByCategory);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
      {/* Tabs Navigation (Based on Categories) */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: 80,
          zIndex: 1000,
        }}
        className="dark:bg-slate-900 bg-white"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {categories.map((category, index) => (
            <Tab
              className="text-black dark:text-white font-bold"
              key={category}
              label={category}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>

      {/* Tab Panels (Show Projects Based on Selected Category) */}
      {categories.map((category, index) => (
        <CustomTabPanel key={category} value={value} index={index}>
          <div className="p-5 sm:p-0 flex flex-wrap justify-between">
            {category === "All"
              ? // If "All" tab is selected, show all projects from every category
                Object.keys(projects).flatMap((cat) =>
                  projects[cat].map((project) => (
                    <WorksCard key={project.id} project={project} />
                  ))
                )
              : // Otherwise, render projects that belong to the selected category
                projects[category]?.map((project) => (
                  <WorksCard key={project.id} project={project} />
                ))}
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
