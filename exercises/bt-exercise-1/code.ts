export const exampleEmailDraft = {
  subject: "how are u dear?",
  id: 1,
  recipients: ["terrible_steve@hotmail.com"],
  from: {name: "Eleanor Cain", address: "eleanor@aol.com"} // name field is optional;
}

type empty = undefined | null

// Give EmailDraft a more specific type.
export type EmailDraft = {
  subject: string,
  id: number,
  recipients: string[],
  from: {
    name?: string,
    address: string,
  }
};

export const typeSafeParse: (input: string) => {} | null | undefined = JSON.parse

/**
 * Use these inside parseDraft if the type of the parsed Data is wrong.
 */
export class CustomTypeError extends TypeError {}

const hasStringSubject = (parsedData: {subject?: string}): parsedData is {subject:string} => {
  return ('subject' in parsedData && typeof (parsedData as {subject: unknown}).subject === 'string');
}

/******************************************************************************************/
// /**
//  * This function needs some checks to make it assignable to EmailDraft.
//  * If the parsed data has the wrong shape, it should throw a CustomTypeError.
//  */
export const parseDraft = (jsonString: string): EmailDraft => {
  const parsedData: {} | null | undefined = JSON.parse(jsonString); // DON'T CHANGE THIS LINE
  // TODO: Do something here to get rid of the type error on the next line.
  if (parsedData == null) {
    throw new CustomTypeError('data is empty');
  }

  // if (hasStringSubject(parsedData)) {
  //   const str: string = parsedData.subject
  // }

  const { subject, id, recipients, from }: Partial<EmailDraft> = parsedData; // DON'T CHANGE THIS LINE
  
  
  // TODO: Narrow the types some more.
  return {subject, id, recipients, from};    // DON'T CHANGE THIS LINE
}

/******************************************************************************************/
  
