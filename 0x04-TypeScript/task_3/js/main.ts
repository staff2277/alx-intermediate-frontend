/// <reference path="crud.d.ts" />

import { RowID, RowElement } from '../interface';
import * as CRUD from '../js/crud';

const row: RowElement = {
  firstName: 'Amissah',
  lastName: 'Arthur',
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
