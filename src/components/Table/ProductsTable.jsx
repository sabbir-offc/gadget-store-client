import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductsTable = ({ item }) => {
  const { image, productName, brandName, productType, rating, _id } = item;
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img className="h-10 w-10  object-cover" src={image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {productName}
            </div>
          </div>
        </div>
      </td>

      <td className="whitespace-nowrap px-4 py-4 capitalize text-sm text-gray-700">
        <div className="text-sm text-gray-700">{brandName}</div>
      </td>

      <td className="whitespace-nowrap px-4 py-4">
        <span className="inline-flex capitalize rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {productType}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 capitalize text-sm text-gray-700">
        {rating}
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
        <Link state={location.pathname} to={`/dashboard/update/${_id}`}>
          <button className="bg-[#FF4B91] p-3 text-white font-semibold rounded mt-3">
            Update
          </button>
        </Link>
      </td>
    </tr>
  );
};
ProductsTable.propTypes = {
  item: PropTypes.object,
};
export default ProductsTable;
