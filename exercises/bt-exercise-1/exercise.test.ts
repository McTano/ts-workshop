import { EmailDraft, CustomTypeError, exampleEmailDraft } from "./code";

// npm run bt-exercise-1


const idAsString = {
  subject: "have a good trip",
  id: "1",
  recipients: ["terrible_steve@hotmail.com"],
  from: {name: "Eleanor Cain", address: "eleanor@aol.com"} // name is optional;
}

const missingRecipients = {
  subject: "sup",
  id: 2,
  from: {name: "Eleanor Cain", address: "eleanor@aol.com"} // name is optional;
}

const nameOfSenderIsOptional = {
  subject: "sup",
  id: 3,
  recipients: ["farmsupplies@hotmail.com"],
  from: { address: "eleanor@aol.com" }
};

const recipientsCanBeEmpty = {
  subject: "sup",
  id: 4,
  recipients: [],
  from: {name: "Eleanor Cain", address: "eleanor@aol.com"} // name is optional;
}

const fromIsRequired = {
  subject: "sup",
  id: 2,
  recipients: "farmsupplies@hotmail.com",
};


const emailWithoutSubject = {
  id: 1,
  recipients: ["terrible_steve@hotmail.com"],
  from: { name: "Eleanor Cain", address: "eleanor@aol.com" }
};
const subjectAsNumber = {
  subject: 2001,
  id: 1,
  recipients: ["terrible_steve@hotmail.com"],
  from: { name: "Eleanor Cain", address: "eleanor@aol.com" }
};
test('EmailDraft type', () => {
  const shouldAcceptValidEmail: EmailDraft = {
    subject: "how are u dear?",
    id: 1,
    recipients: ["terrible_steve@hotmail.com"], // names are optional
    from: {name: "Eleanor Cain", address: "eleanor@aol.com"} // name is optional;
  }

  // typings:expect-error
  const missingRecipientsCheck: EmailDraft = missingRecipients;

  const recipientsCanBeEmptyCheck: EmailDraft = recipientsCanBeEmpty;

  // ok
  const nameOfSenderIsOptionalCheck: EmailDraft = nameOfSenderIsOptional

  // typings:expect-error
  const fromIsRequiredCheck: EmailDraft = fromIsRequired;

  // typings:expect-error
  const emailWithoutSubjectCheck: EmailDraft = emailWithoutSubject;

  // typings:expect-error
  const subjectAsNumberCheck: EmailDraft = subjectAsNumber;

  // typings:expect-error
  const idAsStringCheck: EmailDraft = idAsString;
})

/******************************************************************************************/
// PART 2
// describe('parseDraft', () => {
//   const { parseDraft } = require('./code');
//   test('type', () => {
//     const check: (jsonString: string) => EmailDraft = parseDraft
//     // typings:expect-error
//     const notAnyOldType: null | undefined | string | number = parseDraft
//   })


//   it('should parse a valid draft correctly', () => {
//     expect(()=> parseDraft(JSON.stringify(exampleEmailDraft)).toBe(exampleEmailDraft));
//   })

//   it('should accept a draft without sender name', () => {
//     expect(()=> parseDraft(JSON.stringify(nameOfSenderIsOptional)).toBe(exampleEmailDraft));
//   })  

//   it('should throw an error if data is null', () => {
//     expect(() => parseDraft('null')).toThrow(CustomTypeError);
//   })

//   it ('should error on a json containing a string', () => {
//     expect(() => parseDraft('"hello"')).toThrow(CustomTypeError);
//   });

//   it('should error if the data is a number', () => {
//     expect(() => parseDraft("1")).toThrow(CustomTypeError);
//   })
  
//   it('should error if id is a string', () => {
//     expect(() => parseDraft(JSON.stringify(idAsString))).toThrow(CustomTypeError);
//   });
// });
/******************************************************************************************/

  

