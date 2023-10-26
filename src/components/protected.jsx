import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
const Protected = ({ isLogged, children }) => {
   const { toast } = useToast();
   if (!isLogged) {
      toast({
         title: "Scheduled: Catch up",
         description: "Friday, February 10, 2023 at 5:57 PM",
      });
      return <Navigate to="/" replace />;
   }
   return children;
};
export default Protected;

Protected.propTypes = {
   isLogged: PropTypes.any,
   children: PropTypes.any,
};
