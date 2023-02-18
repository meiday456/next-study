interface Props {
  name: string;
  age: number;
}

const TestComponent = ({ name, age }: Props) => {
  return (
    <div>
      name : {name}, age : {age}
    </div>
  );
};
export default TestComponent;
