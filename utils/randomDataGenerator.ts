export class RandomDataUtil {

    static generateRandomEmail(): string {
        return `test${Date.now()}@mail.com`;
    }

    static generateRandomPassword(): string {
        return `Pass${Math.floor(Math.random() * 100000)}!`;
    }

    static generateRandomUsername(): string {
        return `user_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    }

    static generateRandomFirstName(): string {
        const names = ["Marko", "Nikola", "Stefan", "Luka", "Petar"];
        return names[Math.floor(Math.random() * names.length)];
    }

    static generateRandomLastName(): string {
        const lastNames = ["Jovanovic", "Petrovic", "Nikolic", "Markovic", "Stojanovic"];
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    }

    static generateRandomTelephone(): string {
        return `06${Math.floor(10000000 + Math.random() * 90000000)}`;
    }

    static generateRandomFullName(): string {
        return `${this.generateRandomFirstName()} ${this.generateRandomLastName()}`;
    }

    static generateRandomAddress(): string {
        const streets = ["Kralja Petra", "Nemanjina", "Bulevar Oslobodjenja", "Zmaj Jovina"];
        const number = Math.floor(Math.random() * 100) + 1;
        return `${streets[Math.floor(Math.random() * streets.length)]} ${number}`;
    }
}