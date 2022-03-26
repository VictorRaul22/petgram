import React, { useState, useEffect } from "react";
import { Category } from "@components/Category";
import { List, Item } from "./styles";
import { useCategoriesData } from "../../hooks/useCategoriesData";
// eslint-disable-next-line import/no-relative-packages

function ListOfCategories() {
  const { categories, loading } = useCategoriesData();
  const [translade, setTranslade] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newtranslade = window.scrollY > 200;
      if (translade !== newtranslade) setTranslade(newtranslade);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [translade]);

  const redereList = (fixed, showTranlade) => (
    <List fixed={fixed} translate={showTranlade}>
      {loading ? (
        <p>Cargando</p>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category
              cover={category.cover}
              path={category.id}
              emoji={category.emoji}
            />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {redereList()}
      {redereList(true, translade)}
    </>
  );
}

export { ListOfCategories };
