import {useMemo} from 'react'


export const DOTS = '...'

const range = (start,end) => {
  let length = end - start +1

  return Array.from({length},(_,index) => start+index)

}
export const usePagination = ({currentPage, totalCount,siblingCount,  pageSize}) =>{
     
    const paginationRange = useMemo(() => {
    const pageCount = Math.ceil(totalCount/pageSize)

    const pageNumber = siblingCount + 5
     if (pageNumber <= pageCount) {
       return range(1,pageCount)
        
     }

     const leftSibling = Math.max(currentPage-siblingCount,1)
     const rightSibling = Math.min(currentPage+siblingCount,pageCount)

     const shouldShowLeftDot = currentPage > 2;
     const shouldShowRightDot = currentPage < pageCount -2;

     const firstPageIndex = 1;
    const lastPageIndex = totalCount;

    if (!shouldShowLeftDot && shouldShowRightDot) {
      let leftItemCount = 3+2*siblingCount
      let leftRange = range(1,leftItemCount)

      return [...leftRange , DOTS,totalCount]
      
    }

    if (shouldShowLeftDot && !shouldShowRightDot) {
      let rightItemCount = 3+2*siblingCount
      let rightRange = range(totalCount-rightItemCount+1,totalCount)

      return [firstPageIndex , DOTS,...rightRange]
      
    }

    if (shouldShowLeftDot && shouldShowRightDot) {
      const middleRange = range(leftSibling,rightSibling) 

      return [firstPageIndex, DOTS, ...middleRange, DOTS , lastPageIndex]
      
    }

     } , [totalCount,pageSize,siblingCount,currentPage])

     console.log(paginationRange)

     return paginationRange
}