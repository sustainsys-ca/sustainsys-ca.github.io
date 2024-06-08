import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

 const config = defineConfig({
    projectId: "",
    dataset: "production",
    title: "SustainSys",
    apiVersion: "2024-06-08",
    basePath: "/admin",
    plugins: [structureTool()],
 })
 
 export default config;