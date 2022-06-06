export interface Student {
id: number | null,
name: string;
lastName: string;
room: number,
year: number,
course: string,
sec: number,
turn: number,
dni: number,
nationality: string;
dateBorn: string;
cuil: number,
address: string;
cp: number,
city: string;
bar: string;
email: string;
phone: number,
illCost: number,
/*
    const [name: setName] = useState("");
    const [lastName: setLastName] = useState("");
    const [room: setRoom] = useState("");
    const [year: setYear] = useState("");
    const [sec, setSec] = useState("");
    const [turn: setTurn] = useState("");
    const [dni: setDni] = useState("");
    const [nnac: setNac] = useState("");
    const [dateBorn: setDateBorn] = useState("");
    const [cuil: setCuil] = useState("");
    const [address: setAddress] = useState("");
    const [cp: setCp] = useState("");
    const [city: setCity] = useState("");
    const [bar: setBar] = useState("");
    const [emmail: setEmail] = useState("");
    const [phone: setPhone] = useState("");
*/    
    
    
    


}

export const emptyStudent: Student = { id: null, name: "", lastName: "", room: -1, year: -1, course: "ISI", sec: -1, turn: -1, dni: -1, nationality: "", dateBorn: "", cuil: -1, address: "", cp: -1, city: "", bar: "", email: "", phone: -1, illCost: -1};
