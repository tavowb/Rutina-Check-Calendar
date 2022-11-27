import { useSelector } from "react-redux";
import Calendar from "../components/Calendar";

const MonthsScreen = () => {
  const { auth } = useSelector((state) => state);

  return (
    <>
      <div className="container ">
        <h1 className="text-center"> Hola, {auth.username} </h1>
        <hr />

        <div className="container ">
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default MonthsScreen;
