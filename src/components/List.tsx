import React from "react";
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  <div>{props.items.map(props.renderItem)}</div>;
}
