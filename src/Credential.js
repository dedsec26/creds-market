const Credential = (props) => {
  const { data } = props;

  return (
    <>
      {/* <h5 className="mb-2">Placeholder - Email</h5>
      <h5 className="">Placeholder - Password</h5> */}
      <h4>Credentials you requested are below:</h4>
      <hr />
      {data.map((cred) => (
        <div className="cred" key={cred.id}>
          <h5>Email: {cred.email}</h5>
          <h5>Password: {cred.pass}</h5>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Credential;
