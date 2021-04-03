import React, {useEffect} from 'react'
import marked from 'marked'

const Preview = (props) => {
	useEffect(() => {
		document.getElementById("preview").innerHTML = marked(props.md)
	}, [props.md])
	return (
		<div id="preview">
		</div>
	)
}

export default Preview;