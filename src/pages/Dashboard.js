// import Header from "../components/header";
// import Card from '../components/Card';
// import {cars} from '../constants/dummy-data'
// import { Link, useParams } from "react-router-dom";

// function Dashboard() {
//   let totalPages = 6;
//     const {pageno} = useParams()
//     console.log(pageno)
//   return (
//     <div className="bg-background ">
//     <Header />
//     <div className="w-11/12 flex m-auto p-4 justify-between flex-wrap">
//      { cars.slice(0,6).map((car) => (
//        <Card car = {car}/>

//      ))}
//     </div>
//      <ul class="pagination justify-content-end">
//     <li class="page-item disabled">
//       <Link to = {currentPage} class="page-link">Previous</Link>
//     </li>
//     <li class="page-item"><a class="page-link" href="#">1</a></li>
//     <li class="page-item"><a class="page-link" href="#">2</a></li>
//     <li class="page-item"><a class="page-link" href="#">3</a></li>
//     <li class="page-item">
//       <a class="page-link" href="#">Next</a>
//     </li>
//   </ul>
    
    
//   </div>
//   )
// }

// export default Dashboard