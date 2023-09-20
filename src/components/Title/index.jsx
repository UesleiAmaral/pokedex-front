import { ContainerTitle } from "./style";
export const Title = (props) => {
  const myProps = { ...props };
  const number = `${myProps.id}`;
  return (
    <ContainerTitle {...props}>
      <img src="" alt="" />
      <span>{number}</span> {myProps.title}
    </ContainerTitle>
  );
};
