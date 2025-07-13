export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

let rowID: RowID = 0;
let database: Record<RowID, RowElement> = {};

export function insertRow(row: RowElement): RowID {
  rowID++;
  database[rowID] = row;
  return rowID;
}

export function updateRow(id: RowID, row: Partial<RowElement>): void {
  if (database[id]) {
    database[id] = { ...database[id], ...row };
  }
}

export function deleteRow(id: RowID): void {
  delete database[id];
}
