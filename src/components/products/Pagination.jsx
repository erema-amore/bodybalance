import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsAction';
import { changePage } from '../../store/products/productsSlice'
import style from '../../style/pagination.module.css'


export default function PaginationControlled() {
  const {currentPage, totalPages } = useSelector(state => state.products) 
  const dispatch = useDispatch()
  const handleChange = (event, value) => {
    dispatch(changePage({page: value}))
    dispatch(getProducts())
  };

  return (
    <Stack spacing={2}>
      <Pagination className={style.pagination}  count={totalPages} page={currentPage} onChange={handleChange} />
    </Stack>
  );
}