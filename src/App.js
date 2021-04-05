import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import txt from './txt'

const App = () =>{
	const [md, setMd] = useState(txt)

	return(
		<React.Fragment>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<Editor setMd={setMd} md={md}/>
					</div>
					<div className="col-md-6">
						<Preview md={md}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}


export default App;