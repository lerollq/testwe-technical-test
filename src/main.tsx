import React from "react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from "./App";
import api from "./api";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApiProvider api={api}>
			<App />
		</ApiProvider>
	</React.StrictMode>,
);
