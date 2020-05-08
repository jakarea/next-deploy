import Layout from './../../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = props =>(
		<Layout>
			<h1>Jobs</h1>
			<ul>
				{props.jobs.map(job => (
					<li key={job.id}>
					
                    <Link href="/jobs/[id]" as={`/jobs/${job._id}`}>
						<a>{job.title}</a>
					</Link>
					</li>
				))}
			</ul>
		</Layout>
	)

	Index.getInitialProps = async function() {
		const response = await fetch('http://careerstrip.com:3001/jobs')
		const jobs = await response.json()
		return {jobs : jobs.response.jobs}
	}
export default Index; 