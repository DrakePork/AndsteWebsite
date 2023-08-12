const RedirectPage = () => {
  // This won't be rendered because we're redirecting on the server side
  return <div>Redirecting...</div>;
};

export const getServerSideProps = async (context: { res: { writeHead: (arg0: number, arg1: { Location: string; }) => void; end: () => void; }; }) => {
  context.res.writeHead(302, { Location: 'https://www.linkedin.com/in/andreas-polden-steinsland-0191941b5/' });
  context.res.end();

  return { props: {} };
};

export default RedirectPage;
