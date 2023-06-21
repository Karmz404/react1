// import "./styles.css";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

export default function App() {
  const labels = {
    mainLogo:
      "https://images.unsplash.com/photo-1589675192397-1550ff0f7c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    desc: "This is a very shitty A.I ChatbOt developed by ",
    title: "ChadGPT",
    creator: "Karma404",
  };

  return (
    <div className="App">
      <NavBar labels={labels} />
      <MainContent labels={labels} />
    </div>
  );
}
