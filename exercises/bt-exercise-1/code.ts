export const exampleEmailDraft = {
  subject: "how are u dear?",
  id: 1,
  recipients: ["terrible_steve@hotmail.com"],
  from: {name: "Eleanor Cain", address: "eleanor@aol.com"} // name field is optional;
}

// Give EmailDraft a more specific type.
export type EmailDraft = any;

export const typeSafeParse: (input: string) => {} | null | undefined = JSON.parse

/**
 * Use these inside parseDraft if the type of the parsed Data is wrong.
 */
export class CustomTypeError extends TypeError {}

/******************************************************************************************/
// /**
//  * This function needs some checks to make it assignable to EmailDraft.
//  * If the parsed data has the wrong shape, it should throw a CustomTypeError.
//  */
// export const parseDraft = (jsonString: string): EmailDraft => {
//   const parsedData: {} | null | undefined = JSON.parse(jsonString); // DON'T CHANGE THIS LINE
//   // TODO: Do something here to get rid of the type error on the next line.
  
//   const { subject, id, recipients }: Partial<EmailDraft> = parsedData; // DON'T CHANGE THIS LINE
//   // TODO: Narrow the types some more.
//   return {subject, id};    // DON'T CHANGE THIS LINE
// }

/******************************************************************************************/
  
