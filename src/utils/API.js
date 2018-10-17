import axios from "axios";

export default {
  // Company API Calls
  // Get all companies
  getCompanies: function() {
    return axios.get("/api/companies");
  },
  // Gets the company with the given id
  getCompany: function(id) {
    return axios.get("/api/companies/" + id);
  },
  // Deletes the company with the given id
  deleteCompany: function(id) {
    return axios.delete("/api/companies/" + id);
  },
  // Saves a company to the database
  saveCompany: function(companyData) {
    console.log(companyData);
    return axios.post("/api/companies", companyData);
  },

   // Project API Calls
   // Get all Projects
  getProjects: function() {
    console.log(axios.get("/api/projects"))
    return axios.get("/api/projects/");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id );
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function(projectData) {
    console.log(projectData);
    return axios.post("/api/projects", projectData);
  },


};
