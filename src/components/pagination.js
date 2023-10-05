import {usePagination} from '../services/usePagination'
import { DOTS } from '../services/usePagination';
import {AiOutlineArrowLeft as PreviousIcon} from 'react-icons/ai'
import {AiOutlineArrowRight as NextIcon} from 'react-icons/ai'

function Pagination({currentPage, totalCount, siblingCount = 1,  pageSize, onPageChange}) {

  const paginationRange = usePagination({
    currentPage, totalCount,siblingCount, pageSize

  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className='flex w-1/2 justify-between items-center'
    >
       {/* Left navigation arrow */}
      <li
        className=''
        aria-disabled= {currentPage===1 ? 'true' : 'false'}
        onClick={onPrevious}
      >
        <PreviousIcon />
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            className='w-8 h-8 aspect-square rounded-[50%] bg-blue flex items-center justify-center'
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className=''
        aria-disabled= {currentPage===lastPage ? 'true' : 'false'}

          // disabled: {currentPage === lastPage}

        onClick={onNext}
      >
        <NextIcon />
      </li>
    </ul>
  );
};


export default Pagination