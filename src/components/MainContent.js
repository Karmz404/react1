import Banner from "./Banner";

export default function MainContent({ labels }) {
  return (
    <div className="container-fluid">
      <Banner labels={labels} />
    </div>
  );
}
