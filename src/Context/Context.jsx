import React,{createContext,useState} from 'react';

const InfoContext = createContext();

const FormInfo = (props) => {
    const [name, setName] = useState('');
    const [errName, setErrName] = useState('');
    const [email,setEmail] = useState('');
    const [errEmail,setErrEmail] = useState('');
    const [phone, setPhone] = useState();
    const [errPhone, setErrPhone] = useState("");
    const [desc, setDesc] = useState('');
    const [errDesc, setErrDesc] = useState('');

    const formHandler = (submitValue) => {
        if((name && email && phone && desc) && (!errName && !errEmail && !errPhone && !errDesc)) {
            alert("Data are saved succesfully. Have a greate day!")
        }else {
            alert("Fill all data carefully. Thanks!")
        }
        submitValue.preventDefault();
    }
    const nameHandler = (inputValue) => {
        let nameItem = inputValue;
        if(nameItem.length < 6 && nameItem.length > 0) {
            setErrName("Name must be 6 character or more");
        }else {
            setErrName("")
        }
        setName(inputValue)
    }
    const emailHandler = (inputValue) => {
        let emailItem = inputValue;
        if(!/\S+@\S+\.\S+/.test(emailItem)) {
            setErrEmail("Email Address is not Valid");
        }else {
            setErrEmail("")
        }
        setEmail(inputValue)
    }
    const phoneHandler = (inputValue) => {
        let phoneItem = inputValue;
        if(!/\-?\d*\.?\d{1,2}/.test(phoneItem)) {
            setErrPhone("Phone Number is not valid");
        }else if(phoneItem.length < 11) {
            setErrPhone("Phone Number must be 11 character");
        }else {
            setErrPhone("")
        }
        setPhone(inputValue)
    }
    const descHandler = (inputValue) => {
        let descItem = inputValue;
        if(descItem.length < 20) {
            setErrDesc("Details Must be 20 character or more");
        }else if (descItem.length < 80) {
            setErrDesc("Details less then 80 character");
        }else {
            setErrDesc("");
        }
        setDesc(inputValue)
    }

    
    const saveData = () => {
        if(!name) {
            setErrName("Name must be filled");
        }
        if(!phone) {
            setErrPhone("Phone must be filled");
        }
        if(!email) {
            setErrEmail("Email must be filled");
        }
        if(!desc) {
            setErrDesc("Details Must be filled")
        }
        let items = {name, phone,email, desc};
        console.log(name, phone,email, desc)
        fetch(`http://localhost:3001/comments`, {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify(items)
        }).then((res) => {
            res.json().then((data) => {
                
            })
        })
    }
    const updateData = () => {
        alert("hi")
    }

    return(
        <InfoContext.Provider value={{
            name,
            email,
            phone,
            desc,
            errName,
            errEmail,
            errPhone,
            errDesc,
            nameHandler,
            emailHandler,
            phoneHandler,
            descHandler,
            formHandler,
            saveData,
            updateData
        }}>
            {props.children}
        </InfoContext.Provider>
    )
}


export {FormInfo, InfoContext}

