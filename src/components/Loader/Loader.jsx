import { Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Spinner
      size="xl"
      speed="0.65s"
      width={35}
      height={35}
      emptyColor="#E0E0E0"
      color="#FC842D"
      thickness="5px"
    />
  );
};

export default Loader;
