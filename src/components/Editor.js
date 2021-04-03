import React from 'react'

const Editor = (props) => {
	return (
		<div id="editor">
			<textarea onChange={(e) => props.setMd(e.target.value)} value={props.md}></textarea>
		</div>
	)
}

export default Editor;