import React, { useEffect } from "react";
import marked from "marked";
import { Typography } from "@material-ui/core";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";

const Preview = ({ md, copyToClipboard }) => {
	useEffect(() => {
		document.getElementById("preview").innerHTML = marked(md);
	}, [md]);

	return (
		<>
			<Typography
				variant="h4"
				style={{
					marginBottom: "1vw",
					alignItems: "center",
					justifyContent: "center",
					color: "#fff",
					display: "flex",
				}}
			>
				Markdown Preview &nbsp;&nbsp;
				<Tooltip
					title="Copy to Clipboard"
					onClick={() => copyToClipboard()}
				>
					<FileCopyOutlined fontSize="large" />
				</Tooltip>
			</Typography>
			<div
				id="preview"
				style={{
					height: "75vh",
					overflow: "auto",
				}}
			></div>
		</>
	);
};

export default Preview;
