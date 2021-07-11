import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import Typography from "@material-ui/core/Typography";
import EditOutlined from "@material-ui/icons/EditOutlined";

function CodeEditor({ setMd, md }) {
	return (
		<>
			<Typography
				variant="h4"
				style={{
					marginBottom: "1vw",
					alignItems: "center",
					justifyContent: "center",
					display: "flex",
				}}
			>
				Enter Your Markdown Here &nbsp;&nbsp;
				<EditOutlined fontSize="large" />
			</Typography>
			<div className="editor">
				<Editor
					value={md}
					onValueChange={(md) => setMd(md)}
					highlight={(md) => highlight(md, languages.text)}
					padding={10}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 12,
						backgroundColor: "#fff",
						cursor: "text",
						minHeight: "80vh",
					}}
				/>
			</div>
		</>
	);
}

export default CodeEditor;
