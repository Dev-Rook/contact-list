// Styles Import:
import "../styles/global.scss";

// Component Import:
import PageHead from "../components/PageHead";

// Section Import:
import ContactGrid from "../sections/ContactGrid";

const Index = () => {
  // Header Props:
  const title = "Contact List";
  const image = "";
  return (
    <div className="page">
      <PageHead title={title} image={image} />
      <ContactGrid />
    </div>
  );
};

export default Index;
