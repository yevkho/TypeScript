export interface ListItem {
  id: string;
  item: string;
  checked: boolean;
}

export interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  addItem(itemObj: ListItem): void;
}
