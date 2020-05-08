import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";

const Job = (props) => {
  return (
    <Layout>
      {props.job.title}
      <p>{props.job.description}</p>
    </Layout>
  );
};

Job.getInitialProps = async function (context) {
  //let id  = context.query.id[0]
  console.log("C", context.query);
  let id = '5e872adfcffb6d2fd1afb001';
  const response = await fetch(`http://careerstrip.com:3001/jobs/${id}`);
  const job = await response.json();
  return { job: job.response.job, company: job.response.company };
};
export default Job;
