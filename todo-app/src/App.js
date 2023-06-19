import { useState } from "react";


function App() 
{
  const [text,setText] = useState("");
  const [message,setMessage] = useState([]);
  

  const onChangeFunc = (e) => 
  {
    setText(e.target.value)
  }

  const onClickFunc = () => 
  {
    setMessage(prev => [...prev,text]);
    setText('');
  }

  const [filteredItems, setFilteredItems] = useState(message);

  const handleFilter = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = message.filter((item) =>
      item.toLowerCase().includes(keyword)
    );
    setFilteredItems(filtered);
  };

  const divClicksFunc = (clickedMessage) => {
    setMessage(prev => prev.filter(message => message !== clickedMessage));
  };
  

  const divStyle = 
  {
    width: '400px',
    height: '50px',
    backgroundColor: '#747575',
    color: 'white',
    fontSize: '25px',
    margin: '10px',
    padding: '15px',
    fontFamily: 'nexa,black',
    display: 'flex',
    alignItems: 'center',
    
  };

  const ekleStyle = 
  {
    width: '85px',
    height: '85px',
    backgroundColor: '#747575',
    color: 'white',
    fontSize: '25px',
    margin: '10px',
    padding: '15px',
    fontFamily: 'nexa,black',
    display: 'flex',
    alignItems: 'center',
  }

  const divSecFunc =
  {
    display: "flex",
    alignItems: "center",
  }


  return (

    <>
    <div style={divSecFunc}>
    <input style={divStyle} value={text} onChange={onChangeFunc} type="text" placeholder="Yapılacaklar..."/>
    <button style={ekleStyle} onClick={onClickFunc}>
      Ekle
    </button>
    </div>
    
    {
      message?.map((msg,i)=>(
        <div style={divStyle} key={i} onClick={() => divClicksFunc(msg)} >
          {msg}
        </div>
      ))
    }
    </>
  );
}

export default App;
