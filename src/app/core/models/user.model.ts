export class User {

    constructor(
        public id = '',
        public email = '',
        public password = '',
        public createdAt = 0,
        public lastLogin = 0
    ) {}
}