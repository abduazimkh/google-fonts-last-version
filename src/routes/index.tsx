import RouteController from "./routes"

const index = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: boolean }) => {
  return (
    <>
      <RouteController isOpen={isOpen} setIsOpen={setIsOpen} />
    </>  
  )
}

export default index