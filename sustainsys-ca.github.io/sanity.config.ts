import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

 const config = defineConfig({
    projectId: "k9s7zkou",
    dataset: "production",
    title: "SustainSys",
    apiVersion: "2024-06-08",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
 })
 
 export default config;