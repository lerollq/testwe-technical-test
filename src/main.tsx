import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { RouterProvider } from "react-router-dom";
import api from "@/api";
import routes from "@/routes/index";
import "./index.css";

const root = document.getElementById("root");

if (!root) throw new Error("Root Element is missing");

createRoot(root).render(
	<StrictMode>
		<ApiProvider api={api}>
			<RouterProvider router={routes} />
		</ApiProvider>
	</StrictMode>,
);
