import React from "react";
import AceEditor from "react-ace";
import Typography from "@material-ui/core/Typography";
import EditOutlined from "@material-ui/icons/EditOutlined";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-markdown";

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
					color: "#fff",
				}}
			>
				Enter Your Markdown Here &nbsp;&nbsp;
				<EditOutlined fontSize="large" />
			</Typography>
			<textarea id="copy" value={md} readOnly></textarea>
			<div className="editor">
				<AceEditor
					mode="markdown"
					theme="dracula"
					value={md}
					onChange={(md) => setMd(md)}
					name="editor"
					width="100%"
					style={{
						cursor: "text",
						minHeight: "75vh",
					}}
				/>
			</div>
		</>
	);
}

export default CodeEditor;
