import {faker} from '@faker-js/faker';

export class RandomDataUtil {
    static generateRandomEmail(): string {
        return `test${Date.now()}@mail.com`;
    }

    static generateRandomPassword(): string {
        return `Pass${Math.floor(Math.random() * 100000)}!`;
    }

    static generateRandomUsername(): string {
        return `user${Date.now()}`;
    }

    static generateRandomFirstName(): string {
        return faker.person.firstName();
    }

    static generateRandomLastName(): string {
        return faker.person.lastName();
    }

    static generateRandomTelephone(): string {
        return faker.phone.number();
    }

    static generateRandomFullName(): string {
        return faker.person.fullName();
    }

    static generateRandomAddress(): string {
        return faker.location.streetAddress();
    }



  
}