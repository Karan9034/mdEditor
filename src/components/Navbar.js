import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
	return (
		<>
			<AppBar
				style={{
					backgroundColor: "#000",
				}}
			>
				<Toolbar className="toolbar">
					<Typography variant="h3" align="center" component="h1">
						mdEditor
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar className="toolbar-bottom" />
		</>
	);
};

export default Navbar;
