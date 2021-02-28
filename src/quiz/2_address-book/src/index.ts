import { Contact, PhoneType } from './types';
// api
/*
Promise 형식으로 return 되며 제네릭타입은 Contact[]
*/
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {  // fetchContacts 함수의 반환값이 Promise<Contact[]> 이기 때문에 response의 타입은 Contact[]가 될 것으로 추론
      this.contacts = response;
    });
  }

  // 이름을 통해 연락처를 찾음
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  // 주소를 통해 연락처를 찾음
  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // 전화번호를 통해 연락처를 찾음
  // phoneType : home / office / studio
  // 오탈자가 나올 수 있기 때문에 enum 변수화해서 넣어주는게 안전함
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }
  // enum 변수화 후 호출 방법
  // findConcatByPhone(1111, PhoneType.Phone);

  // 연락처 추가
  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  // 연락처 이름 조회
  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  // 연락처 주소 조회
  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
