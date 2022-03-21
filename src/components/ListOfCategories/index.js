import React from "react";
import { Category } from "@components/Category";
import { List, Item } from "./styles";

function ListOfCategories() {
  return (
    <List>
      {[1, 2, 3, 4].map((category) => (
        <Item>
          <Category category={category} key={category} />
        </Item>
      ))}
    </List>
  );
}

export { ListOfCategories };
