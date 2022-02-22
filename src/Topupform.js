const Topup = () => {
  return (
    <form action="" method="post">
      <label htmlFor="amount">Select the amount: </label>
      <select name="amount" id="amount">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </form>
  );
};

export default Topup;
