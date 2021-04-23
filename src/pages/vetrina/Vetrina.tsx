import { Button, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import TopNavBar from "../../components/nav-bar/TopNavBar";
import { UserContext } from "../../contextes/AuthProvider";
import { IngredientModel } from "../../models/IngredientModel";
import { _firestore } from "../../utils/firebase";
import IngredientInfoCard from "../shop-components/main-section/restaurant-components/IngredientInfoCard";

interface VetrinaProps {}

const Vetrina: React.FC<VetrinaProps> = () => {
  const vetrinaRef = _firestore.collection("/vetrina-ingredients").orderBy("phase");
  const [vetrinaIngredients] = useCollectionData<IngredientModel>(vetrinaRef);
  const { actualUser } = useContext(UserContext);
  return (
    <>
      <TopNavBar />
      <SimpleGrid columns={[1, 6]} columnGap="3">
        {vetrinaIngredients &&
          vetrinaIngredients.map((ingredient, index) => {
            const { imageURI, name, price, vegetarian, vegan } = ingredient;
            return (
              <IngredientInfoCard
                availableIngredient={ingredient}
                imageURI={imageURI}
                iteratorKey={index}
                key={index}
                name={name}
                price={price}
                vegan={vegan}
                vegetarian={vegetarian}
              />
            );
          })}
        <Link to={actualUser ? "/shop" : "/auth"}>
          <Button>Nuovo Ordine</Button>
        </Link>
      </SimpleGrid>
    </>
  );
};

export default Vetrina;
