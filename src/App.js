import './App.css';
import { Chart } from "react-google-charts";


function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Работа", 3],
    ["Перекусы", 2],
    ["Общение", 5],
    ["Учёба", 5],
    ["Сон", 9],
  ];

  const options = {
    title: "Мой день",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}

export default App;
