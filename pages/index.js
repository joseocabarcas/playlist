import React from 'react'
import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
	// static async getInitialProps({ req }) {
		// console.log(req)
		// const urls = []
		// return {}
	// }

	async componentDidMount() {
		const res = await fetch('http://cdn.tekus.co/Media/Tekus_BG2.jpg')
		console.log(res);
		const data = await res.blob()
		console.log(data);
	}

	render() {
		return (
			<section>
				Indexs
			</section>
		)
	}
}

export default Index;