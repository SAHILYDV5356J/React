import { useState,useCallback ,useEffect ,useRef} from 'react';



import './App.css'

function App() {

  
 
  const [length,setlength]= useState(8);
  const [numberallowed,setnumber]= useState(false);
  const [symballowed,setsymb]=useState(false);
  const [password,setpassword]=useState("");


  // ref hook

  const passwordref=useRef(null);


  // const passwordgenerator=useCallback(fn,[length,number,char,setpassword])


  const passwordgenerator=useCallback(()=>{

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberallowed){
      str+= "0123456789";
    }

    if(symballowed){
      str+="!@#$%^&*(){}[]~`";
    }

    for(let i=1;i<=length;i++){
      
      let stringidx = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(stringidx);
    }

    
       setpassword(pass);
    




  },[length,numberallowed,symballowed,setpassword]);


  useEffect(()=>{
    passwordgenerator();
  },[ length, numberallowed, symballowed, passwordgenerator])

 
 const  copypasswordtoclipboard= useCallback(()=>{

 

  passwordref.current?.select();  // for enhancing and it give extra details
  passwordref.current?.setSelectionRange(0,length);
   window.navigator.clipboard.writeText(password);   //it will also work

 }, [password]

)


  return (
    <>
      <div className="parent  mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-500  ">

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className="flex  rounded-lg overflow-hidden mb-4 p-4 shadow-none">
        <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white text-black rounded-l' placeholder='password' readOnly name="" id=""
        ref={passwordref}
        
        />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5'

        onClick={copypasswordtoclipboard}
        
        ><i id='copyicon' class="fa-regular fa-copy"></i></button>

      </div>

      <div className="optiondiv gap-x-3 ">

        <div className=" text-sm gap-x-2">
        <div className=" gap-x-1 ">
          <input type="range" min={8} max={16} value={length}

          className='cursor-pointer'

          onChange={(e)=>{setlength(e.target.value) }}
          
          />
          <label >Length: {length}</label>
        </div>

        <div className='check   gap-x-1'>
          <input type="checkbox"  id="numberInput"
          
          defaultChecked={numberallowed}

          onChange={()=>{
            setnumber((prev) => !prev)
          }}
          
          />
          <label htmlFor="numberInput"> Numbers</label>
        </div>

        <div className='check  gap-x-1'>
          <input type="checkbox"  id="symbInput"
          
          defaultChecked={symballowed}

          onChange={()=>{
            setsymb((prev) => !prev)
          }}
          
          />
          <label htmlFor="symbInput">Charaters</label>
        </div>
      </div>

    </div>
      


    </div>

      
    </>
  )
}

export default App
