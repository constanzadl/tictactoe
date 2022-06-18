export const Square = (props) => {

    return (
      <button className="w-20 aspect-square border-solid border border-blue-300 text-5xl font-bold text-blue-300" onClick={
        () => { props.onClick() }
      }>
        {props.value}
      </button>
    )
  }