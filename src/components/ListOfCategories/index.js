import React, { useState, useEffect } from "react";
import { Category } from "@components/Category";
import { List, Item } from "./styles";
// eslint-disable-next-line import/no-relative-packages
// import bd from "../../../api/db.json
function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://petgram-server-victorr-i3daplbkd-victorraul22.vercel.app/categories"
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        setCategories(json);
        setLoading(false);
      })
      .catch((err) => window.console.log(err));
  }, []);
  return { categories, loading };
}

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
