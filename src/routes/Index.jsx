// Styles Import:
import "../styles/global.scss";

// Component Import:
import PageHead from "../components/PageHead";

// Section Import:

const Index = () => {
  // Header Props:
  const title = "Contact List";
  const image = "";
  return (
    <div className="page">
      <PageHead title={title} image={image} />
    </div>
  );
};

export default Index;
