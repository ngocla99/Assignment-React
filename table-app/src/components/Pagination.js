const Pagination = (props) => {
  const prev = () => {
    if (props.pageNumber === 1) return;

    const page = props.pageNumber - 1;
    props.onPaginate(page);
  };

  const next = () => {
    if (props.maxPageNumber === props.pageNumber) return;

    const page = props.pageNumber + 1;
    props.onPaginate(page);
  };

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className={`page-item ${props.pageNumber === 1 ? 'disabled' : ''}`}>
          <button className='page-link' onClick={prev}>
            Previous
          </button>
        </li>
        <li
          className={`page-item ${
            props.pageNumber === props.maxPageNumber ? 'disabled' : ''
          }`}
        >
          <button className='page-link' onClick={next}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
