import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// const List = ({ items, render }: ListProps<string>) => {
//     return (
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{render(item)}</li>
//         ))}
//       </ul>
//     );
//   };

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
