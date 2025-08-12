import illustration1 from "@/assets/illustration1.svg"
import Navbar from "@/components/Navbar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

function HomeHeader() {
  return (
    <div className="bg-linear-to-r from-bg-home-header-background via-pink-300  to-violet-300 p-10">
      <div className="flex justify-center">
        <h2 className="text-5xl uppercase">
          <span className="font-bold">Find Your </span>
          <br />
          Dream Product
        </h2>
      </div>
      <div className="flex flex-row justify-center mt-20 gap-10 text-2xl font-semibold">
        <Card className="bg-radial-[at_25%_25%] from-orange-400 to-yellow-500 to-75% rounded-2xl cursor-pointer text-center border-0 md:h-24 lg:h-32">
          <CardContent className="my-auto">
            Clothes
          </CardContent>
        </Card>
        <Card className="rounded-2xl cursor-pointer text-center border-0">
          <CardContent className="my-auto">
            Furniture
          </CardContent>
        </Card>
        <Card className="bg-radial-[at_25%_25%] from-blue-500 to-blue-300 to-75% rounded-2xl cursor-pointer text-center border-0">
          <CardContent className="my-auto">
            Electronics
          </CardContent>
        </Card>
        <Card className="rounded-2xl cursor-pointer text-center border-0">
          <CardContent className="my-auto">
            Shoes
          </CardContent>
        </Card>
        <Card className="bg-radial-[at_25%_25%] from-green-500 to-green-300 to-75% rounded-2xl cursor-pointer text-center border-0">
          <CardContent className="my-auto">
            Miscellaneous
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function HomeContent() {
  return (
    <div className="bg-slate-100 p-5">
      <div className="text-center pt-5 mb-10 space-y-10">
        <h2 className="text-4xl font-semibold">Featured Products</h2>
        <span>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          <br />
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </span>
      </div>
      <div className="flex flex-row justify-center align-middle gap-10">
        <div className="md:w-2xl">
          <h5 className="text-xl font-bold">Nice Design</h5>
          <p className="mt-2 text-gray-600">Discover the beauty of our curated collection.</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <HomeCard />
          <HomeCard />
        </div>
        <div className="md:w-xs self-end">
          <img src={illustration1} alt="illustration 1" className="" />
        </div>
      </div>
    </div>
  )
}

function HomeCard() {
  return (
    <Card className="text-center md:w-lg mt-5 border-violet-500 border-2 shadow-md shadow-violet-500">
      <CardHeader className="font-bold text-2xl">Feature</CardHeader>
      <CardContent className="my-auto">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <HomeContent />
    </>
  )
}
