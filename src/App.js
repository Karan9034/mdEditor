import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import txt from "./txt";

const App = () => {
	const [md, setMd] = useState(txt);

	const fallback = () => {
		let copyText = document.getElementById("copy");
		copyText.select();
		try {
			var successful = document.execCommand("copy");
			var msg = successful ? "successful" : "unsuccessful";
			console.log("Copying text command was " + msg);
			if (successful) alert("Copied to Clipboard");
			else alert("Error while copying");
		} catch (err) {
			console.error("Oops, unable to copy", err);
		}
	};
	const copyToClipboard = () => {
		if (!navigator.clipboard) {
			fallback();
			return;
		}
		navigator.clipboard.writeText(md).then(
			() => {
				console.log("Copying to clipboard was successful!");
				console.log(navigator.clipboard);
				alert("Copied to Clipboard");
			},
			(err) => {
				console.error("Could not copy text: ", err);
				alert("Error while copying");
			},
		);
	};

	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<CodeEditor setMd={setMd} md={md} />
					</div>
					<div className="col-md-6">
						<Preview md={md} copyToClipboard={copyToClipboard} />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
