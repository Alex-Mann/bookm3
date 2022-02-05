import Nav from '../../src/components/nav'

export default function Me() {
  return (
    <>
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col justify-between">Hello world</div>
          </div>
        </main>
      </div>
    </>
  )
}
