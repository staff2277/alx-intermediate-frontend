export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export function insertRow(row: RowElement): RowID;
export function updateRow(rowId: RowID, row: RowElement): void;
export function deleteRow(rowId: RowID): void;
