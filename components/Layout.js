import Navbar from "./Navbar";
import NextNprogress from "nextjs-progressbar";
const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
