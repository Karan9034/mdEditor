import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import txt from "./txt";

const App = () => {
	const [md, setMd] = useState(txt);

	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<CodeEditor setMd={setMd} md={md} />
					</div>
					<div className="col-md-6">
						<Preview md={md} />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
