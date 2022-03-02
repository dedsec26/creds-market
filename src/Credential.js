const Credential = (props) => {
  const { data } = props;

  return (
    <>
      {/* <h5 className="mb-2">Placeholder - Email</h5>
      <h5 className="">Placeholder - Password</h5> */}
      <h4>Credentials you requested are below:</h4>
      <hr />
      {/* {data.map((cred) => (
        <div className="cred" key={cred.id}>
          <h5>Email: {cred.email}</h5>
          <h5>Password: {cred.pass}</h5>
          <hr />
        </div>
      ))}
      {} */}
      {(() => {
        console.log(data);
        data.forEach((element) => {
          {
          }
          <div className="cred" key={element.id}>
            <h5>Email: {element.email}</h5>
            <h5>Password: {element.pass}</h5>
            <hr />
          </div>;
        });
      })()}
    </>
  );
};

export default Credential;
