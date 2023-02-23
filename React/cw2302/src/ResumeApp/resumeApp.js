import { Component, createRef} from 'react'

export default class ResumeApp extends Component{

    constructor(props){
        super(props);
        this.myResume = props.resume;
        this.baseResume = props.resume;
        this.state = {resume:this.myResume};

        this.nameRef = createRef();
        this.surnameRef = createRef();
        this.emailRef = createRef();
        this.bDayRef = createRef();
        this.phoneNumberRef = createRef();
        this.cityRef = createRef();

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeBDate = this.onChangeBDate.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);

        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerReset = this.handlerReset.bind(this);
    }
    onChangeName(e){
        this.myResume.name = e.target.value;
        this.setState({resume: this.myResume});
    }
    onChangeSurname(e){
        this.myResume.surname = e.target.value;
        this.setState({resume: this.myResume});
    }
    onChangeBDate(e){
        this.myResume.birthDay = e.target.value;
        this.setState({resume: this.myResume});
    }
    onChangeEmail(e){
        this.myResume.email = e.target.value;
        this.setState({resume: this.myResume});
    }
    onChangePhoneNumber(e){
        this.myResume.phoneNumber = e.target.value;
        this.setState({resume: this.myResume});
    }
    onChangeCity(e){
        this.myResume.city = e.target.value;
        this.setState({resume: this.myResume});
    }

    handlerReset(e){
        e.preventDefault();
        //this.myResume = this.baseResume;
        console.log(this.baseResume);
        this.nameRef.current.value = this.myResume.name;
        this.surnameRef.current.value = this.myResume.name;
        this.emailRef.current.value = this.myResume.name;
        this.bDayRef.current.value = this.myResume.name;
        this.phoneNumberRef.current.value = this.myResume.name;
        this.cityRef.current.value = this.myResume.name;

        this.setState({resume: this.myResume});
    }
    handlerSubmit(e){
        e.peventDefault();
    }

    render(){
        return(
        <>
            <div className="container">
                <form className='m-2' onReset={this.handlerReset} onSubmit={this.handlerSubmit}>
                    <div className="mb-3 row">
                        <label  className="col-4 col-form-label">Name</label>
                        <div className="col-8">
                            <input 
                                ref={this.nameRef}
                                type="text" 
                                className="form-control" 
                                placeholder="Name" 
                                value={this.state.resume.name}
                                onChange={this.onChangeName}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-4 col-form-label">Surname</label>
                        <div className="col-8">
                            <input 
                                ref={this.surnameRef}
                                type="text" 
                                className="form-control" 
                                placeholder="Surname" 
                                value={this.state.resume.surname}
                                onChange={this.onChangeSurname}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-4 col-form-label">Birth-Day</label>
                        <div className="col-8">
                            <input 
                                ref={this.bDayRef}
                                type="date" 
                                className="form-control" 
                                value={this.state.resume.birthDay}
                                onChange={this.onChangeBDate}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-4 col-form-label">Phone number</label>
                        <div className="col-8">
                            <input 
                                ref={this.phoneNumberRef}
                                type="phone" 
                                className="form-control" 
                                placeholder="Phone" 
                                value={this.state.resume.phoneNumber}
                                onChange={this.onChangePhoneNumber}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-4 col-form-label">Email</label>
                        <div className="col-8">
                            <input 
                                ref={this.emailRef}
                                type="email" 
                                className="form-control" 
                                placeholder="email@email.com" 
                                value={this.state.resume.email}
                                onChange={this.onChangeEmail}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-4 col-form-label">City</label>
                        <div className="col-8">
                            <input 
                                ref={this.cityRef}
                                type="email" 
                                className="form-control" 
                                placeholder="email@email.com" 
                                value={this.state.resume.city}
                                onChange={this.onChangeCity}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                            <button 
                                type="submit" 
                                className="btn btn-primary me-3">Save</button>
                            <button 
                                type="reset" 
                                className="btn btn-warning">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )}
}