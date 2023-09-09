

const FeeTable = () => {
  return (
    <div className="container mx-auto mt-2">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-primary-green">
            <th className="border border-gray-300 p-2">Purpose</th>
            <th className="border border-gray-300 p-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-gray-300 p-2">Volunteers Travel Expenses</td>
            <td className="border border-gray-300 p-2">20%</td>
          </tr>
          <tr className="text-center">
            <td className="border border-gray-300 p-2">Website Maintenance</td>
            <td className="border border-gray-300 p-2">30%</td>
          </tr>
          <tr className="text-center">
            <td className="border border-gray-300 p-2">Donate to Animal Shelters</td>
            <td className="border border-gray-300 p-2">50%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeeTable;
