import { motion } from "framer-motion";
import "./Home.styles.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("Navigate!");
    navigate("/table");
  };
  return (
    <div className="Home">
      <div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 3 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{ scale: [null, 4] }}
          onClick={() => onClick()}
        >
          <motion.span className="box_text">ENTER THE POKEDEX</motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
