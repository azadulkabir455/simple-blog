import React,{useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  let item = 10;
  useEffect(() =>{
    getData();
  },[item])
  const getData = async () => {
    const res = await fetch(`http://localhost:3001/comments?_page=1&_limit=${item}`);
    const data =await res.json();
    let total = res.headers.get("x-total-count");
    console.log(total)
    setCount(Math.ceil(total/item)); 
    setData(data)
  }
  const fetchComments = async (currentPage) => {
    const res = await fetch(`http://localhost:3001/comments?_page=${currentPage}&_limit=${item}`);
    const data = await res.json();
    return data;
  }
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchComments(currentPage);
    setData(commentsFormServer);

  }
  return (
    <>
       {
         data.map((item) => 
          <div className="row" key={item.id} style={{width: "33%",float:"left"}}>
            <div className="id">{item.id}</div>
            <h2>{item.name}</h2>
            <div className="bio">{item.body}</div>
          </div>
         )
       }
       <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        pageCount={count}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        onPageChange={handlePageClick}
      />
    </>
  );
}

export default App;
