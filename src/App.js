import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import Login from "./componenets/Login";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
				</Routes>
				<Routes>
					<Route path='/home' element={<Home />} />
				</Routes>
				<Routes>
					<Route path='/header' element={<Header />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
