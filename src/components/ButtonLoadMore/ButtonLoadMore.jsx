import {  Button } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({onClick}) => {
  return (
    <Button onClick={onClick} type="button">
      Load more...
    </Button>
  );
};

export default ButtonLoadMore;