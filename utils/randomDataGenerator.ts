import {faker} from '@faker-js/faker';

export class RandomDataUtil {
    static generateRandomEmail(): string {
        return faker.internet.email();
    }

    static generateRandomPassword(): string {
        return faker.internet.password();
    }

    static generateRandomUsername(): string {
        return faker.internet.username();
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