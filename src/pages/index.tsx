import { styled } from "@srm/styles";

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '$white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',

  fontSize: 16,

})

export default function Home() {
  return (
    <Button>Home</Button>
  );
}
