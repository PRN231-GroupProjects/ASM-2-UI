import { BrowserRouter as Router } from "react-router-dom";
import RouteInit from "./routes/RouteInit"

const App = () => {
	return (
		<Router>
			<div className="w-screen h-screen flex justify-center items-center">
				<RouteInit />
			</div>
		</Router>
	);
};

export default App;
