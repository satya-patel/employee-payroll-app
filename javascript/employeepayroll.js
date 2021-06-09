class EmployeePayrollData {
    
    id;
    //Getters & Setters
    
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp(/^[A-Z][a-z]{2,}/);
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is Incorrect';
        }
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) { 
        let now = new Date();
        if (startDate > now) throw 'start Date is a Future Date';
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30)
            throw 'Start Date is beyond 30 Days';
        this._startDate = startDate;
    }

    //Methods
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "Undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + ", gender='" + this._gender + 
                ", profilePic='" + this.profilePic + ", department=" + this._department +
                ", Salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }
}