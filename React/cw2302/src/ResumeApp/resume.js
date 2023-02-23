export default class Resume{
    constructor(name="", surname="", birthDay = "", email="", phoneNumber = "", city =""){
        this.name = name;
        this.surname = surname;
        this.birthDay = birthDay;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.city = city;
    }
    clone(){
        return new Resume(this.name, this.surname, this.birthDay, this.email, this.phoneNumber, this.city);
    }
}