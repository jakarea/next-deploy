import Head from "next/head";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
    <div>
        <style global jsx>
            {`
                .alert{
                    border: 1px solid;
                    padding: 20px
                }
            `}
        </style>
    <Head>
    <title>2</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
   
    <meta charset="utf-318" />
  </Head>
  <div className="container" style={layoutStyle}>
    {props.children}
  </div>
  </div>
);

export default Layout;