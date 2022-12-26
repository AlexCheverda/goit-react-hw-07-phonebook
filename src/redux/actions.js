import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// export const addContact = createAction('contacts/add', (name, number) => {
//     return {
//         payload: {
//             id: nanoid(),
//             name,
//             number,
//         },
//     };
// });
// export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');