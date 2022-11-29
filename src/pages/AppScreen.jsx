import { useSelector } from "react-redux";
import Daily from "../components/Daily";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);

  return (
    <>
      <div className="container ">
        <h1 className="text-center"> Hola, {auth.username} </h1>
        <hr />
        <div className="container ">
          <Daily />
        </div>
      </div>
    </>
  );
};

export default AppScreen;
