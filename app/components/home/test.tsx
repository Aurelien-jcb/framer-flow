type Props = {
  name: string
} & (MaleProps | FemaleProps)

type MaleProps = {
  gender: "male"
  salary: number
}

type FemaleProps = {
  gender: "female"
  weight: number
}

const Test = (props: Props) => {

  if(props.gender === "male") {
    return <div>{props.salary}</div>
  } 
  return <div>{props.weight}</div>
}

export default Test;
