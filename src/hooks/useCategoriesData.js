// import { gql } from '@apollo/client';
import { useState, useEffect } from "react";

export function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  // const QUERY_CATEGORIES = gql`
  //   query getCategories {
  //     categories {
  //       id,
  //       cover,
  //       emoji
  //     }
  //   }
  // `
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
