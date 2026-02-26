import { ChevronUp, Edit, Eye, Pencil, Trash } from "lucide-react";
import { MdUpdate } from "react-icons/md";

const TransactionActions = () => {
  return (
    <div className="flex gap-2 text-gray-500">
      <Eye className="w-4 cursor-pointer hover:text-blue-500" />
      <Edit className="w-4 cursor-pointer hover:text-green-500" />
      <Trash className="w-4 cursor-pointer hover:text-red-500" />
    </div>
  );
};

export default TransactionActions;
