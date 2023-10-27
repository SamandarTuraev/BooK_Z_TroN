import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Protected = ({ isLogged, children }) => {
   const { toast } = useToast();
   if (isLogged == "") {
      toast({
         variant: "destructive",
         title: " No Login ",
         description: "enter your login password and register",
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
